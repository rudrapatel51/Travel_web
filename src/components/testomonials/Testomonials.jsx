// src/components/TestimonialCarousel.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Mark Huff",
    position: "Businesswoman"
  },
  {
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Mark Huff",
    position: "Businesswoman"
  },
  {
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Mark Huff",
    position: "Businesswoman"
  },
  {
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Mark Huff",
    position: "Businesswoman"
  },
  {
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Mark Huff",
    position: "Businesswoman"
  },
  // Add the rest of your testimonials here
];

const Testomonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="testimonials-wrap py-10">
      <div className="container mx-auto">
        <div className="heading-section text-center mb-8">
          <span className="sub-heading text-teal-500 uppercase tracking-widest font-semibold text-xs">Testimonials</span>
          <h2 className="text-2xl font-semibold mt-2">Happy Clients &amp; Feedbacks</h2>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay  className="carousel-testimonial">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item px-4">
              <div className="testimonial-box flex p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div
                  className="user-img w-44 h-20 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.img})` }}
                ></div>
                <div className="text pl-6">
                  <p className="mt-4 mb-4">{testimonial.text}</p>
                  <p className="name font-semibold">{testimonial.name}</p>
                  <span className="position text-gray-500 text-sm">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testomonials;
