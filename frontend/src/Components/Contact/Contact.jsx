import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Element, scroller } from 'react-scroll';
import './Contact.css'
import AOS from 'aos';

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const contactFormRef = useRef(null);
  const contactVisualRef = useRef(null);
  const contactWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const contactElement = contactWrapperRef.current;
      if (contactElement && yOffset > contactElement.offsetTop - window.innerHeight) {
        gsap.fromTo(contactFormRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" }
        );
        gsap.fromTo(contactVisualRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" }
        );
        gsap.fromTo(contactWrapperRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power1.out" }
        );
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element name="contact" className="contact" ref={contactWrapperRef}>
      <h2 className="contact__heading title">Contact Me</h2>
      <div className="contact__wrapper wrapper--large" data-aos="zoom-in">
        <div className="contact__visual" ref={contactVisualRef} data-aos="fade-right">
          <img src="Assets/Images/c.png" alt="James Martin's location" />
          {/* <p className='info'>dsdsdwsd</p> */}
        </div>
        <form className="contact__form" ref={contactFormRef} data-aos="fade-left">
          <div className='info-contact'>
            <input className="contact__form-el contact__form-el--name" type="text" placeholder="Your Name" spellCheck="false" />
            <input className="contact__form-el contact__form-el--email" type="email" placeholder="Your Email" spellCheck="false" />
          </div>

          <textarea className="contact__form-el contact__form-el--message" placeholder="Your Message"></textarea>
          <input className="contact__form-el contact__form-el--submit" type="submit" value="Send" />
        </form>
      </div>
    </Element>
  );
};

export default Contact;
