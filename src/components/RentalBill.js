import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./BillSummary.css";
import { useSelector } from "react-redux";
import ServiceContainer from "./ServiceContainer";

export default function RentalBill() {
  const sltChef = useSelector((state) => state.sltChef.sltChef);
  const userData = useSelector((state) => state.userData.userData);

  console.log("userData :>> ", userData);

  return (
    <>
      <h1 className="heading">BILL SUMMARY</h1>
      <div className="box-sub-container">
        <div className="entire-container">
          <ServiceContainer chef={sltChef} btn={false} />
          <div className="alter-cust">
            <span className="bill-cust-head">Customer Details</span>
            <div className="cust-holder">
              {userData?.name &&
                Object.entries(userData).map((data) => (
                  <div className="sec-holder">
                    <span className="user-tile">{`${data[0]} : `}</span>
                    <span className="user-ans">{data[1]}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="subtotal-container">
          <div className="subtotal-info">
            <span>Rental total</span>
            <p>includes ₹2 Feeding Indian donation</p>
          </div>
          <span className="subtotal-price">₹{200}</span>
        </div>
        <div className="delivery-container">
          <div className="delivery-info">
            <span>Person's destination travel fee</span>
            <p>
              selected person come's to your house on his own mode of
              transportation
            </p>
          </div>
          <span className="subtotal-price">₹200</span>
        </div>
        <hr />
        <div className="final-container">
          <div className="final-info">
            <span>Overall Cost</span>
          </div>
          <span className="grand-price">₹{200} + Total of foods x 200</span>
        </div>
      </div>
      <div className="box-sub-container">
        <div className="delivNote-container">
          <span>Any Queries reach our team by mobile</span>
          <p>payment can be done to your selected chef after work completed.</p>
          <div className="delivery-call">
            <FontAwesomeIcon icon={faPhone} />
            <p>
              Our executive will call to check the person's availability
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
