import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review: "Excellent service and genuine medicines. The staff are always helpful and supportive.",
  },
  {
    name: "Rahul Menon",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    review: "Fast delivery and affordable pricing. Highly recommend Pharma Prix.",
  },
  {
    name: "Anjali Desai",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "Very professional team and excellent customer care experience at Pharma Prix.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="section-title">
          <span>TESTIMONIALS</span>

          <h2>
            What Our Customers Say
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <div className="testimonial-top">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>

                </div>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p>
                  "{item.review}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;