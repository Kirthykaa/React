import { useEffect, useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedPdts, setPdts } from "../redux/actions/menuActions";

function Menu() {
  const navigate = useNavigate();
  const menuData = useSelector((state) => state.allPdts.products);
  const [menuItems, setMenuItem] = useState(menuData);
  const [sltData, setSltData] = useState({});
  const dispatch = useDispatch();

  const onMenuAddHandler = (e, param) => {
    if (param.count < 25) {
      setMenuItem((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id == param.id) {
            return { ...obj, count: param.count + 1 };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  const onMenuSubHandler = (e, param) => {
    if (param.count > 0) {
      setMenuItem((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id == param.id) {
            return { ...obj, count: param.count - 1 };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  useEffect(() => {
    dispatch(setPdts(menuItems));
    let totSlt = menuItems.filter((ele) => ele.count > 0);
    console.log("selected Pdts :>> ", totSlt);
    setSltData(totSlt);
    dispatch(selectedPdts(totSlt));
  }, [menuItems]);

  const onChkoutHandler = () => {
    setTimeout(() => navigate("/order"), 2000);
  };

  return (
    <>
      <Header />
      <SearchForm />
      <section className="menu" id="menu">
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading">today's speciality</h1>
        <div className="box-container">
          {menuItems
            ? menuItems.map((item, index) => {
                return (
                  <div key={index} className="menu-box">
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <div>
                        <h3>{item.name}</h3>
                        <div className="stars">
                          {Array.from(Array(item.star), (e, id) => {
                            return <i key={id} className="fas fa-star"></i>;
                          })}
                        </div>
                        <p>{item.describe}</p>
                      </div>
                      <div>
                        <button
                          className="topup-btn"
                          onClick={(e) => onMenuSubHandler(e, item)}
                        >
                          -
                        </button>
                        <span className="item-count">{item.count}</span>
                        <button
                          className="topup-btn"
                          onClick={(e) => onMenuAddHandler(e, item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="price">Rs {item.price}</span>
                  </div>
                );
              })
            : null}
        </div>
        <div className="chk-out-container">
          <button className="topup-btn" onClick={() => onChkoutHandler()}>
            Checkout
          </button>
        </div>
      </section>
    </>
  );
}

export default Menu;
