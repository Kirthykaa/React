import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css";
import "./Carousel.css";

// Import images statically
import noodleImg from "../assets/images/noodle.jpg";
import salmonWrapImg from "../assets/images/salmon_wrap.jpg";
import pizzaImg from "../assets/images/pizza.jpg";

// Array of slide data
const slides = [
  {
    title: "Nutri Noodles",
    description: "Have some nutritious food, stay healthy as always!",
    img: noodleImg,
  },
  {
    title: "Salmon Wrap",
    description: "Wrap rolls for a spicy and delicious combo.",
    img: salmonWrapImg,
  },
  {
    title: "Pizza",
    description: "Pizza with cheese-filled and chilli flavors.",
    img: pizzaImg,
  },
];

export default function Carousel() {
  const navigate = useNavigate();

  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide slide">
              <div className="content">
                <span>Our Special Dish</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <a onClick={() => navigate("/menu")} className="btn">
                  Order Now
                </a>
              </div>
              <div className="image">
                <img src={slide.img} alt={slide.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
