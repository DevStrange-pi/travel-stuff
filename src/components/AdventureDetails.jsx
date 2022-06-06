/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AdventureDetails = () => {
  const navigate = useNavigate();

  const [adventDetails, setAdventDetails] = useState({});
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const { id } = useParams();

  const [head, setHead] = useState();
  const [total, setTotal] = useState(0);

  //for post method after form submission
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://mtrip-dynamic.herokuapp.com/adventures/detail?adventure=${id}`
      );
      //console.log(response.data);
      setAdventDetails(response.data);
      setImage1(response.data.images[0]);
      setImage2(response.data.images[1]);
      setImage3(response.data.images[2]);
      setTotal(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const totalCost = () => {
    setTotal(adventDetails.costPerHead * head);
  };

  useEffect(() => {
    totalCost();
  }, [head]);

  // post method during form submission
  const postDetails = async (e) => {
    e.preventDefault();
    try {
      const postResponse = await axios.post(
        "https://mtrip-dynamic.herokuapp.com/reservations/new",
        {
          name,
          date,
          person: head,
          adventure: adventDetails.id,
        }
      );
      if (postResponse.data.success) {
        alert("Booking Successful");
        adventDetails.available = false;
        adventDetails.reserved = true;
        navigate(`/adventures/details/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* alert div displayed conditionally */}
      {adventDetails.reserved ? (
        <div className="container container-md container-sm mt-5">
          <div className="container container-md container-sm ms-3">
            <div class="alert alert-success" role="alert">
              Congratulations ! Your Booking is successful. (Click{" "}
              <a href="/bookings" class="alert-link">
                here
              </a>
              {""} to view your Bookings).
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="container d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column">
        <div className="container" style={{ marginTop: "10%", flex: "3" }}>
          <div className="container">
            {/* carousel heading div starts here  */}
            <div
              className="container"
              style={{
                border: "1px solid #eeeeee",

                padding: "20px 8px 1px 15px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            >
              <h1>{adventDetails.name}</h1>

              <p
                style={{
                  color: "#c8c9ca",
                  fontSize: "1.2rem",
                  wordSpacing: "2px",
                  letterSpacing: "1px",
                }}
              >
                {adventDetails.subtitle}
              </p>
            </div>
            {/* carousel heading ends here */}

            {/* carousel code from here */}
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* carousel ends here */}
            <div
              className="container"
              style={{
                border: "1px solid #eeeeee",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <hr />
              <h4 style={{ fontSize: "19px" }}>About the experience</h4>
              <p>{adventDetails.content}</p>
            </div>
          </div>

          <br />
        </div>

        {/* sold out panel to be displayed conditionally */}
        {adventDetails.available ? (
          <div
            className="container container-md container-sm booking-panel-available"
            style={{
              marginTop: "10%",
              flex: "1.2",
              width: "90%",
              height: "50%",
              padding: "25px 20px 25px 20px",
              border: "1px solid #eeeeee",
              borderRadius: "10px",
            }}
          >
            {/* form starts here */}
            <form onSubmit={postDetails}>
              <div className="mb-3">
                <label
                  style={{ fontWeight: "500" }}
                  htmlFor="exampleInputText1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputText1"
                  aria-describedby="textHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  style={{ fontWeight: "500" }}
                  htmlFor="exampleInputDate1"
                  className="form-label"
                >
                  Pick a Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  id="exampleInputDate1"
                />
              </div>

              <hr />
              <div className="mb-3 d-flex">
                <div className="container" style={{ marginLeft: "-11px" }}>
                  <label
                    htmlFor="exampleInputNumber1"
                    className="form-label"
                    style={{ fontWeight: "500", marginBottom: "2px" }}
                  >
                    Person(s)
                  </label>
                  <p>
                    {"\u20B9"}&nbsp;
                    {adventDetails.costPerHead} / head
                  </p>
                </div>
                <div
                  className="container mt-3"
                  style={{
                    marginRight: "-11px",
                  }}
                >
                  <input
                    type="number"
                    value={head}
                    onChange={(e) => setHead(e.target.value)}
                    min="0"
                    max="10"
                    className="form-control"
                    id="exampleInputNumber1"
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="container mt-1">
                  <h6>Total</h6>
                </div>
                <div
                  className="container"
                  style={{
                    textAlign: "right",
                  }}
                >
                  <h5>
                    {"\u20B9"}&nbsp; {total}
                  </h5>
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary p-3"
                style={{ width: "100%", borderRadius: "9px" }}
              >
                <h6 style={{ margin: "auto" }}>Book</h6>
              </button>
            </form>
          </div>
        ) : (
          <div
            className="container container-md container-sm booking-panel-sold-out"
            style={{
              marginTop: "10%",
              flex: "1.2",
              width: "90%",
              height: "20%",
              padding: "25px 20px 25px 20px",
              border: "1px solid #eeeeee",
              borderRadius: "10px",
            }}
          >
            <h3>Sold Out !</h3>
            <hr />
            This adventure is currently sold out. But theres a lot more to
            &nbsp;
            <a
              href="/bookings"
              style={{ color: "orange", textDecoration: "none" }}
            >
              Explore
            </a>
          </div>
        )}

        <br />
        <br />
      </div>
    </>
  );
};

export default AdventureDetails;
