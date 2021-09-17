import { useState, useEffect } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

// class App extends Component {
function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  // state = {
  //   weather: {},
  //   city: "",
  // };

  useEffect(() => {}, []);

  const handleChangeWeather = (weatherData, city) => {
    setWeather(weatherData);
    setCity(city);
  };

  // render() {
  return (
    <div className="App">
      {/* <SearchWeather handleChangeWeather={this.handleChangeWeather} /> */}
      <SearchWeather handleChangeWeather={handleChangeWeather} />

      {/* <DisplayWeather info={this.state} /> */}
      <DisplayWeather weather={weather} city={city} />
    </div>
  );
  // }
}

export default App;
