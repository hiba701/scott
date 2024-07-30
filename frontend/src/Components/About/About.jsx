import React, { useEffect } from 'react';
import './About.css'; 
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <div id="about" className="paddsection">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-lg-4" data-aos="fade-right">
            <div className="div-img-bg">
              <div className="about-img">
                <img src="Assets/Images/me.jpg" className="img-responsive" alt="me" />
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="about-descr">
              <p className="p-heading">
              Welcome to my gallery. I turn discarded materials into unique, sustainable art.
              </p>
              <p className="separator">
              I transform overlooked materials—like scrap metal and discarded plastics—into art, giving them new purpose and reflecting my commitment to sustainability.
              </p>
            </div>
            <input className="form-b" type="submit" value="Help me" onClick={handleButtonClick} />

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
