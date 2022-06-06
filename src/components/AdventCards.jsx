/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react";

const AdventCards = (props) => {
  const navigate = useNavigate();

  return (
    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <div
        className="card mb-5 border-0"
        style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          position: "relative",
          height: "40%",
        }}
      >
        <a
          href=""
          onClick={() => navigate(`/adventures/details/${props.data.id}`)}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <div
            style={{
              overflow: "hidden",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <img
              src={props.data.image}
              className="card-img-top img-blur"
              alt=""
              style={{
                objectFit: "cover",
                height: "50vh",
              }}
            />
          </div>
          <div
            className="category-banner"
            style={{
              color: "#fff",
              position: "absolute",
              top: "25px",
              right: "0",
              backgroundColor: "#ff9100",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <h6
              style={{
                margin: "auto",
                padding: "8px 20px",
                fontWeight: "bolder",
              }}
            >
              {props.data.category}
            </h6>
          </div>
          <div
            className="card-body"
            style={{
              border: "1px solid #c8c9ca",
              borderTop: "none",
              paddingTop: "20px",
              paddingBottom: "8px",
            }}
          >
            <div className="d-flex justify-content-between">
              <h6 className="card-text" style={{ fontWeight: "bolder" }}>
                {props.data.name}
              </h6>
              <span>
                {"\u20B9"}&nbsp;
                {props.data.costPerHead}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="card-text" style={{ fontWeight: "bolder" }}>
                Duration
              </h6>
              <p className="card-text">{props.data.duration} Hours</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdventCards;
