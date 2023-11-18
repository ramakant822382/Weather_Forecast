import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <Form onSubmit={handleSearch} className="search-container">
      <Form.Group controlId="formBasicCity">
        <Form.Control
          type="text"
          className="search-input"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="search-button">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
