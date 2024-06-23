import { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedPdts, setPdts } from "../redux/actions/menuActions";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Use useSelector to fetch the products from the Redux store
  const menuData = useSelector((state) => state.allPdts.products);
  
  // Initialize state with menuData from Redux store
  const [menuItems, setMenuItems] = useState(menuData);

  // Handle incrementing or decrementing item count
  const updateMenuItemCount = useCallback((itemId, delta) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: Math.max(0, item.count + delta) } : item
      )
    );
  }, []);

  // Handle the logic whenever menuItems changes
  useEffect(() => {
    dispatch(setPdts(menuItems));
    const selectedItems = menuItems.filter((item) => item.count > 0);
    dispatch(selectedPdts(selectedItems));
  }, [menuItems, dispatch]);

  // Handle checkout logic
  const onCheckoutHandler = () => {
    setTimeout(() => navigate("/order"), 2000);
  };

  return (
    <>
      <Header />
      <SearchForm />
      <section className="menu" id="menu">
        <h3 className="sub-heading">Our Menu</h3>
        <h1 className="heading">Today's Speciality</h1>
        <div className="box-container">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-box">
              <div className="image">
                {/* Using require to dynamically load images */}
                <img src={require(`../assets/images/${item.img.split('/').pop()}`)} alt={item.name} />
              </div>
              <div className="content">
                <div>
                  <h3>{item.name}</h3>
                  <div className="stars">
                    {Array.from({ length: item.star }).map((_, index) => (
                      <i key={index} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p>{item.describe}</p>
                </div>
                <div className="counter">
                  <button
                    className="topup-btn"
                    onClick={() => updateMenuItemCount(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="item-count">{item.count}</span>
                  <button
                    className="topup-btn"
                    onClick={() => updateMenuItemCount(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <span className="price">Rs {item.price}</span>
            </div>
          ))}
        </div>
        <div className="chk-out-container">
          <button className="topup-btn" onClick={onCheckoutHandler}>
            Checkout
          </button>
        </div>
      </section>
    </>
  );
}
