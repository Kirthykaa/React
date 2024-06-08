import React from "react";
import { selectedChef } from "../redux/actions/menuActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function ServiceContainer({ chef, btn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="service-box-container">
      <div className="service">
        <img src={chef.img} alt="chef photo" />

        <h3>{chef.name}</h3>
        <span className="service-age">
          <span className="service-qn">Age: </span>
          {chef.age}
        </span>
        <span className="service-experience">
          <span className="service-qn">Experience: </span>
          {chef.experience}
        </span>
        <span className="service-rating">
          {Array.from(Array(chef.rating), (e, i) => {
            return <i key={i} className="fas fa-star"></i>;
          })}
        </span>
        <span className="service-desc">{chef.description}</span>
      </div>
      {btn && (
        <button
          className="nav-btn active"
          onClick={() => {
            console.log("chef :>> ", chef);
            dispatch(selectedChef(chef));
            navigate("/reservation");
          }}
        >
          Book Now
        </button>
      )}
    </div>
  );
}

export default ServiceContainer;
