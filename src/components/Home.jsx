/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Cards from "./Cards";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const getCardData = async () => {
    try {
      const response = await axios.get(
        "https://mtrip-dynamic.herokuapp.com/cities"
      );
      //console.log(response);
      setCardData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCardData();
  }, []);

  const filterCities = (e) => {
    setSearchFilter(e.target.value);
    setFilteredCities(
      cardData.filter((data) =>
        data.city.toLowerCase().match(searchFilter.toLowerCase())
      )
    );
  };

  return (
    <div style={{ backgroundColor: "#effafc" }}>
      <div
        className="text-center"
        style={{
          position: "relative",
          backgroundImage:
            "url('https://hugostevens.files.wordpress.com/2020/06/cities3.jpg')",
          height: "65vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <NavBar /> */}
        <div
          className="container"
          style={{
            position: "absolute",
            marginTop: "10%",
            marginLeft: "8%",
          }}
        >
          <h1 style={{ color: "#fff" }}>Welcome to TravelStuff</h1>
          <br />
          <h5 style={{ color: "#fff", fontWeight: "bolder" }}>
            Explore every corner of this Earth with us
          </h5>
          <br />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => filterCities(e)}
            placeholder="Search a City"
            style={{ padding: "12px", width: "50%", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div className="container">
        <div className="row ms-3">
          {!searchFilter
            ? cardData.map((data) => {
                return <Cards data={data} />;
              })
            : filteredCities.map((data) => {
                return <Cards data={data} />;
              })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
