import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState([]);

  const getBookings = async () => {
    try {
      const response = await axios.get(
        "https://mtrip-dynamic.herokuapp.com/reservations/"
      );
      setBookingData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookings();
  }, []);

  //function for converting to Normal readable time
  const convertDate = (time) => {
    const dateString = new Date(time).toUTCString();
    const newDateString = dateString.split(" ").slice(0, 5).join(" ");
    return newDateString;
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "8%" }}>
        <div className="container d-flex">
          <h2 style={{ letterSpacing: "2px", wordSpacing: "7px" }}>
            Your Bookings
          </h2>
          <img
            src={require("./downArrow.png")}
            alt=""
            width="30"
            height="30"
            style={{ margin: "7px 8px 8px 14px" }}
          />
        </div>
        <br />
        <div className="container table-responsive">
          <table
            className="table table-striped table-bordered"
            style={{ textAlign: "center", verticalAlign: "middle" }}
          >
            <thead style={{ backgroundColor: "#88d5ef" }}>
              <tr>
                <th>Transaction ID</th>
                <th>Booking name</th>
                <th>Adventure</th>
                <th>Person(s)</th>
                <th>Date of Visit</th>
                <th>Price</th>
                <th>Booking Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => {
                return (
                  <tr>
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.adventureName}</td>
                    <td>{booking.person}</td>
                    <td>{booking.date}</td>
                    <td>{booking.price}</td>
                    <td>{convertDate(booking.time)}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          navigate(`/adventures/details/${booking.adventure}`)
                        }
                      >
                        Get Adventure
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Bookings;
