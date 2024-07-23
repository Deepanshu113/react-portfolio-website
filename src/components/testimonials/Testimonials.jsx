import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Deepanshu delivered an exceptional project that exceeded our expectations. His technical expertise and attention to detail ensured a seamless and highly functional final product. Highly recommended for anyone looking for a reliable and skilled developer.",
  },

  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Working with Deepanshu was a great experience. He not only met all the project requirements but also provided valuable insights that enhanced the end result. His professionalism and commitment to quality were evident throughout.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "We are extremely satisfied with Deepanshu's work. His dedication, technical skills, and responsiveness contributed to a successful project delivery. He went above and beyond to ensure our needs were met. Excellent service!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Deepanshu's work was top-notch. He delivered the project on time and with impressive accuracy. His ability to communicate effectively and incorporate feedback made the process smooth and efficient. A pleasure to work with!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
       {
        data.map(({avatar,name, review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">
            {review}
            </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  );
};

export default Testimonials;
