import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Slider.css"

const Slider = () => {
  return (
    <div id="services">
      <div className="container con">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="services-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SwiperSlide>
            <div className='slides'>

            <div className="services-block">
              <i className="fas fa-palette"></i>
              <span className='s-t'>The Art of Rebirth</span>
              <p className="separator">I believe that art can be a powerful tool for change. </p>
            </div>

            <div className="services-block">
              <i className="fas fa-tree"></i>
              <span className='s-t'>Transforming Trash into Treasure</span>
              <p className="separator">I'm passionate about reducing waste and giving new life to discarded materials </p>
            </div>

            <div className="services-block">
              <i className="fas fa-hand-holding-heart"></i>
              <span className='s-t'>From Discarded to Divine</span>
              <p className="separator">I'm proud to showcase the beauty and uniqueness of each piece. </p>
            </div>

            </div>

          </SwiperSlide>

          <SwiperSlide>
          <div className='slides'>
            <div className="services-block">
              <i className="	fas fa-seedling"></i>
              <span className='s-t'>Sustainable Future</span>
              <p className="separator">I'm committed to creating art that not only inspires but also contributes to a more eco-friendly future.</p>
            </div>

            <div className="services-block">
              <i className="fas fa-award"></i>
              <span className='s-t'>Unleashing Creativity from Waste</span>
              <p className="separator">I believe that creativity knows no bounds – not even when it comes to waste.</p>
            </div>

            <div className="services-block">
            <i className="fa fa-paint-brush"></i>
              <span className='s-t'>Where Art Meets ActivismY</span>
              <p className="separator">I'm passionate about using my craft to make a difference.  </p>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;