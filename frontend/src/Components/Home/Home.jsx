import React from 'react';
import './Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from 'react';


const Gallery = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="about">
      <div className="about__wrapper wrapper--small" data-aos="zoom-in-up">
        <div className="about__content">
          <div className="about__content-blurb blurb blurb--framed">
            <h2 className="blurb__heading">Reclaimed<br />Artistry</h2>
            <p className="blurb__copy no-margin">Transforming the Past into Artful Futures</p>
          </div>
          <p className="about__content-signature">Scott Martin</p>
        </div>
        <img className="about__visual" src="Assets/Images/about-visual.png" alt="James Martin" />
      </div>
    </section>
  );
};

export default Gallery;
