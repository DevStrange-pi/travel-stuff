/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();

  const getAdventure = (id) => {
    navigate(`/adventures/${id}`);
  };

  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 "
      style={{ marginTop: "10%" }}
    >
      <div
        className="card border-0"
        style={{
          width: "14rem",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <a href="" onClick={() => getAdventure(data.id)}>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={data.image}
              className="card-img-top card-focus"
              style={{ width: "15rem", height: 400 }}
            />
            <div className="img-text">
              <h5
                style={{
                  color: "#fff",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                {data.city}
              </h5>
              <p
                style={{
                  color: "#fff",
                  letterSpacing: "3px",
                  fontWeight: "bold",
                }}
              >
                {data.description}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
