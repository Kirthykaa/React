import { useNavigate } from "react-router-dom";
import "./Dishes.css";

// Static imports for images
import dish1 from "../assets/images/dish-1.png";
import dish2 from "../assets/images/dish-2.png";
import dish3 from "../assets/images/dish-3.png";
import dish4 from "../assets/images/dish-4.png";
import dish5 from "../assets/images/dish-5.png";
import dish6 from "../assets/images/dish-6.png";

export default function Dishes() {
  const navigate = useNavigate();

  const dishes = [
    {
      name: "Burger",
      price: 130,
      star: 4,
      img: dish1,
    },
    {
      name: "Chicken Nuggets",
      price: 100,
      star: 3,
      img: dish2,
    },
    {
      name: "Choclate frapee",
      price: 99,
      star: 4,
      img: dish3,
    },
    {
      name: "Choco truffle",
      price: 300,
      star: 5,
      img: dish4,
    },
    {
      name: "Ice fudge",
      price: 100,
      star: 4,
      img: dish5,
    },
    {
      name: "Egg Meal",
      price: 200,
      star: 5,
      img: dish6,
    },
  ];

  return (
    <section className="dishes" id="dishes">
      <h3 className="sub-heading">our dishes</h3>
      <h1 className="heading">popular dishes</h1>
      <div className="box-container">
        {dishes.map((item, index) => (
          <div key={index} className="box">
            <a onClick={() => navigate("/menu")} className="fas fa-eye"></a>
            <img src={item.img} className="menu-foods" alt={item.name} /> 
            <h3>{item.name}</h3>
            <div className="stars">
              {Array.from(Array(item.star), (e, i) => {
                return <i key={i} className="fas fa-star"></i>;
              })}
            </div>
            <span>Rs {item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
