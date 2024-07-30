import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import '../../App.css';

const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero'); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHeaderScrolled(scrollPosition > 100);
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleHashScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          scrollto(window.location.hash);
        }
      } else {
        setActiveSection('#hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleHashScroll);

    // Initial run to ensure correct state
    handleScroll();
    handleHashScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleHashScroll);
      observer.disconnect();
    };
  }, []);

  const scrollto = (el) => {
    const header = document.querySelector('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16;
    }

    const elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  };

  const handleMobileNavToggle = () => {
    setNavbarMobile(!navbarMobile);
  };

  const handleNavLinkClick = (e, hash) => {
    if (document.querySelector(hash)) {
      e.preventDefault();

      if (navbarMobile) {
        setNavbarMobile(false);
      }
      scrollto(hash);
      setActiveSection(hash);
    }
  };

  return (
    <header id="header" className={`fixed-top ${headerScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <span
          className="logo"
          onClick={(e) => handleNavLinkClick(e, '#hero')}
          style={{ cursor: 'pointer' }}
        >
          Scott
        </span>

        <nav id="navbar" className={`navbar ${navbarMobile ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${activeSection === '#hero' ? 'active' : ''}`}
                href="#hero"
                onClick={(e) => handleNavLinkClick(e, '#hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${activeSection === '#about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => handleNavLinkClick(e, '#about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${activeSection === '#gallery' ? 'active' : ''}`}
                href="#gallery"
                onClick={(e) => handleNavLinkClick(e, '#gallery')}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${activeSection === '#contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`bi mobile-nav-toggle ${navbarMobile ? 'bi-x' : 'bi-list'}`}
            onClick={handleMobileNavToggle}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
