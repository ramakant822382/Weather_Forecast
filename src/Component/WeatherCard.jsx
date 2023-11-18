import React from "react";
import { Card } from "react-bootstrap";
import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return <FaSun />;
    case "Clouds":
      return <FaCloud />;
    case "Rain":
      return <FaCloudRain />;
    case "Snow":
      return <FaSnowflake />;
    default:
      return null;
  }
};

const WeatherCard = ({ day }) => {
  const { weather,  main } = day;

  const date = new Date(day.dt * 1000);
  const dateString = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card-body">
      <div className="weather-card">
        <h3>{dateString}</h3>
        <Card.Title>
          {getWeatherIcon(weather[0].main)} {weather[0].main}
        </Card.Title>
        <Card.Text> {main.temp_max} </Card.Text>
        <Card.Text>
          <Card.Text> {main.temp_min} </Card.Text>
        </Card.Text>
        <Card.Text>{main.humidity}%</Card.Text>
      </div>
    </div>
  );
};

export default WeatherCard;
