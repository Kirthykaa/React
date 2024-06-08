import Header from "./Header";
import LastPageOrder from "./LastPageOrders";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Order.css";

export default function Order() {
  const sltMenuItems = useSelector((state) => state.sltPdts.sltProducts);
  const [showup, setShowup] = useState("order now");
  const [data, setData] = useState({
    name: "",
    mobile: "",
    address: "",
    instruction: "",
  });

  const style = {
    float: "right",
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#666",
    textTransform: "lowercase",
  };

  const styler = {
    background: "#27ae60",
  };

  const onOrderHandler = () => {
    console.log("this one called ");

    if (
      sltMenuItems &&
      data.name &&
      data.mobile &&
      data.address &&
      data.instruction
    ) {
      setShowup("ordered");
    }
  };

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Header />
      <LastPageOrder />
      <section className="order" id="order">
        <h3 className="sub-heading"> order now </h3>
        <h1 className="heading"> Fill your details </h1>
        <form action="">
          <div className="inputbox">
            <div className="input">
              <span>your names</span>
              <input
                id="name"
                type="text"
                placeholder="enter your name"
                value={data.name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="input">
              <span>your number </span>
              <input
                id="mobile"
                type="number"
                placeholder="enter your number"
                value={data.mobile}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="input">
              <span>your address</span>
              <textarea
                id="address"
                placeholder="enter your address"
                cols="30"
                rows="10"
                value={data.address}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
            <div className="input">
              <span>Cooking Instruction's</span>
              <textarea
                id="instruction"
                placeholder="enter your message"
                cols="30"
                rows="10"
                value={data.instruction}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
          </div>
          <div>
            <input
              type="button"
              style={showup == "ordered" ? styler : {}}
              value={showup}
              className="btn"
              onClick={onOrderHandler}
            />
            {showup == "ordered" && (
              <span style={style}>
                *our executive will call for order confirmation
              </span>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
