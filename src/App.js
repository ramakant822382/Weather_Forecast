// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import SearchBar from "./Component/SearchBar";
import WeatherList from "./Component/WeatherList";
import { Card } from "react-bootstrap";
import CityList from "./Component/CityList";
import Nav from "./Component/Nav";

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [cityinfo, setCityinfo] = useState([]); // State to store the searched city

  useEffect(() => {
    // Fetch weather data when the component mounts or when the city changes
    if (city) {
      const API_KEY = "57fa2bc463a72d1d6036f4d26a736009";
      const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      axios
        .get(API_URL)
        .then((response) => {
          // Extracting the first 5 days from the forecast data

          const fiveDayForecast = response.data.list.filter(
            (reading, index) => index % 8 === 0
          );

          setForecast(fiveDayForecast);

          const data = response.data.city;
          setCityinfo(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <Container>
      <div>
        <Nav />
      </div>
      <div className="city">
        <div className="city-data">
          <CityList data={cityinfo} />
        </div>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="card1">
        <div className="postion">
          <div
            className="weather-card"
            style={{ backgroundColor: "rgb(141, 220, 220)" }}
          >
            <h3>Date</h3>
            <Card.Title>Weather icon</Card.Title>
            <Card.Text> High Tempature </Card.Text>
            <Card.Text>
              <Card.Text> Low Tempature </Card.Text>
            </Card.Text>
            <Card.Text>Humidity%</Card.Text>
          </div>
        </div>
        <div className="wea">
          <WeatherList forecast={forecast} />
        </div>
      </div>
    </Container>
  );
};

export default App;
