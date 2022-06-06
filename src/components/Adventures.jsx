/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdventCards from "./AdventCards";

const Adventures = () => {
  const { id } = useParams();
  let selectedCategory;
  let selectFilter;
  let selectedDuration;
  let selectDurationFilter;
  const [adventuresData, setAdventuresData] = useState([]);
  // below state variable for setting the category filter value
  const [category, setCategory] = useState([]);
  const [duration, setDuration] = useState([]);
  const [filterAdv, setFilterAdv] = useState([]);

  const getAdventures = async () => {
    try {
      const response = await axios.get(
        `https://mtrip-dynamic.herokuapp.com/adventures?city=${id}`
      );
      setAdventuresData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdventures();
  }, []);

  const categoryFilter = (e) => {
    selectedCategory = e.target.value;
    selectFilter = adventuresData.filter(
      (value) => value.category === selectedCategory
    );

    var duplicateValue = filterAdv.filter(
      (value) => value.category === selectedCategory
    );

    if (duplicateValue.length === 0) {
      setFilterAdv([...filterAdv, ...selectFilter]);
      setCategory([...category, selectedCategory]);
    }

    // setCategory([...category, e.target.value]);
    //console.log(category);
  };

  const durationFilter = (e) => {
    selectedDuration = e.target.value.split(",");
    setDuration(selectedDuration);
    selectDurationFilter = adventuresData.filter(
      (value) =>
        value.duration >= selectedDuration[0] &&
        value.duration <= selectedDuration[1]
    );
    // console.log(selectedDuration.length);
    // console.log(selectDurationFilter);
    setFilterAdv(selectDurationFilter);
  };

  return (
    <div className="container">
      <div className="container" style={{ marginTop: "10%" }}>
        <h1>Explore All Adventures </h1>
        <p style={{ fontSize: "26px" }}>
          Here's a list of places that you can explore in this city
        </p>
        <br />
        {/* <hr /> */}
        <div
          className=" d-flex flex-row p-2 align-items-center "
          style={{
            borderTop: "1px solid #c8c9ca",
            borderBottom: "1px solid #c8c9ca",
          }}
        >
          <div
            className="filter-cont m-1 pe-2"
            style={{
              borderRight: "1px solid #c8c9ca",
            }}
          >
            Filters:
          </div>
          <div
            className="d-flex align-items-center duration-cont m-2 pe-3"
            style={{ borderRight: "1px solid #c8c9ca" }}
          >
            <select
              className="form-control"
              name="duration"
              value={duration}
              onChange={(e) => durationFilter(e)}
            >
              <option selected disabled value={[]}>
                Filter by Duration (Hours)
              </option>

              <option value={[0, 2]}>0-2 Hours</option>
              <option value={[2, 6]}>2-6 Hours</option>
              <option value={[6, 12]}>6-12 Hours</option>
              <option value={[12, 100]}>12+ Hours</option>
            </select>
            <div className="ms-2">
              <a
                style={{ textDecoration: "none" }}
                href="#"
                onClick={() => {
                  setFilterAdv([]);
                  setDuration([]);
                }}
              >
                Clear
              </a>
            </div>
          </div>

          <div
            className="d-flex align-items-center category-cont m-2 pe-3 "
            style={{ borderRight: "1px solid #c8c9ca" }}
          >
            <select
              className="form-control"
              onChange={(e) => {
                categoryFilter(e);
              }}
              value={category.length === 0 ? "" : category[category.length - 1]}
            >
              <option selected disabled value="">
                Add Category
              </option>
              <option value="Cycling">Cycling Routes</option>
              <option value="Hillside">Hillside Getaways</option>
              <option value="Beaches">Serene Beaches</option>
              <option value="Party">Party Spots</option>
            </select>
            <div className="ms-2">
              <a
                style={{ textDecoration: "none" }}
                href="#"
                onClick={() => {
                  setFilterAdv([]);
                  setCategory([]);
                }}
              >
                Clear
              </a>
            </div>
          </div>
          {/* <div
            className="category-clear"
            style={{ borderRight: "1px solid #c8c9ca" }}
          ></div> */}
        </div>
        {/* <hr /> */}
        <br />
        <div className="container ms-2 mt-4 ">
          {category.map((ele) => {
            return (
              <span
                class="badge rounded-pill bg-light text-dark"
                style={{
                  padding: "14px 10px",
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  border: "2px solid #ff9100",
                  marginRight: "30px",
                }}
              >
                {ele}
              </span>
            );
          })}
        </div>
        <br /> <br />
        <div className="container">
          <div className="row">
            {category.length === 0 && duration.length === 0
              ? adventuresData.map((data) => {
                  return <AdventCards data={data} />;
                })
              : filterAdv.map((item) => {
                  return <AdventCards data={item} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventures;
