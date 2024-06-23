import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Review.css";

// Static imports for images
import pic1 from "../assets/images/pic-1.jfif";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.png";
import pic4 from "../assets/images/pic-4.jfif";
import pic5 from "../assets/images/pic-5.jfif";
import pic6 from "../assets/images/pic-6.jpg";

export default function Review() {
  // Array of customer reviews
  const customerReview = [
    {
      name: "Santa",
      star: 4,
      img: pic1,
      feedback: "“Adi poliki food”",
    },
    {
      name: "Swetha",
      star: 5,
      img: pic2,
      feedback:
        "“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”",
    },
    {
      name: "Keerthy",
      star: 5,
      img: pic3,
      feedback:
        "“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”",
    },
    {
      name: "Aswini",
      star: 4,
      img: pic4,
      feedback:
        "“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”",
    },
    {
      name: "Sakura",
      star: 5,
      img: pic5,
      feedback: "“Best Pizza EVER! Not just on the lower Cape…. anywhere!”",
    },
    {
      name: "Sasuke",
      star: 5,
      img: pic6,
      feedback:
        "“Breakfast was delicious. Like a good homestyle country savory breakfast (and I’m from the south, that’s saying a lot)… Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape”",
    },
  ];

  return (
    <section className="review" id="review">
      <h3 className="sub-heading">Customer's Review</h3>
      <h1 className="heading">What They Say</h1>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {customerReview.map((item, index) => (
          <SwiperSlide key={index} className="slide">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={item.img} className="review-img" alt={item.name} />
              <div className="user-info">
                <h3>{item.name}</h3>
                <div className="stars">
                  {Array.from({ length: item.star }, (v, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
            <p>{item.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
