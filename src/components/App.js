import React, { useState } from "react";

const data = [
  {
    name: "Madhya Pradesh",
    description: "Heart of India",
    cities: [
      {
        name: "Indore",
        description: "Cleanest city of India",
        landmarks: [
          {
            name: "Rajwada",
            description: "Historic palace in Indore",
          },
          {
            name: "Sarafa Bazaar",
            description: "Famous food market",
          },
        ],
      },
      {
        name: "Bhopal",
        description: "City of Lakes",
        landmarks: [
          {
            name: "Upper Lake",
            description: "Beautiful lake in Bhopal",
          },
          {
            name: "Van Vihar",
            description: "National park and zoo",
          },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "Financial capital state",
    cities: [
      {
        name: "Mumbai",
        description: "City of Dreams",
        landmarks: [
          {
            name: "Gateway of India",
            description: "Famous monument",
          },
          {
            name: "Marine Drive",
            description: "Queen’s Necklace",
          },
        ],
      },
      {
        name: "Pune",
        description: "Educational hub",
        landmarks: [
          {
            name: "Shaniwar Wada",
            description: "Historic fort",
          },
          {
            name: "Aga Khan Palace",
            description: "Important historical site",
          },
        ],
      },
    ],
  },
];

export default function App() {
  // Default auto-select first item
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const selectedState = data[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  // Handle state change
  const handleStateChange = (e) => {
    const newStateIndex = Number(e.target.value);

    setStateIndex(newStateIndex);
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  // Handle city change
  const handleCityChange = (e) => {
    const newCityIndex = Number(e.target.value);

    setCityIndex(newCityIndex);
    setLandmarkIndex(0);
  };

  // Handle landmark change
  const handleLandmarkChange = (e) => {
    setLandmarkIndex(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dropdown React</h2>

      {/* State Dropdown */}
      <label>State: </label>
      <select
        id="state"
        value={stateIndex}
        onChange={handleStateChange}
      >
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">
        {selectedState.description}
      </div>

      <br />

      {/* City Dropdown */}
      <label>City: </label>
      <select
        id="city"
        value={cityIndex}
        onChange={handleCityChange}
      >
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">
        {selectedCity.description}
      </div>

      <br />

      {/* Landmark Dropdown */}
      <label>Landmark: </label>
      <select
        id="landmark"
        value={landmarkIndex}
        onChange={handleLandmarkChange}
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      <div id="landmark-name">
        {selectedLandmark.name}
      </div>
      <div id="landmark-description">
        {selectedLandmark.description}
      </div>
    </div>
  );
}
