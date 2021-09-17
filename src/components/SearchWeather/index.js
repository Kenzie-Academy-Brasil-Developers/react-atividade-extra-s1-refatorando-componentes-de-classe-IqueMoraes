import { useState, useEffect } from "react";

import "./style.css";

function SearchWeather({ handleChangeWeather }) {
  // class SearchWeather extends Component {
  const [inputValue, setInputValue] = useState("Curitiba");
  const [cityValue, setCityValue] = useState(""); //criado para dar o start com o botão.

  // state = {
  //   inputValue: "Curitiba",
  // };

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  // handleSubmit = () => {
  //   // const { inputValue } = this.state;
  //   // const { handleChangeWeather } = this.props;

  //   // fetch(`https://goweather.herokuapp.com/weather/${this.state.inputValue}`)
  //     .then((response) => response.json())
  //     .then((response) => handleChangeWeather(response, inputValue));
  // };

  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${cityValue}`)
      .then((rest) => rest.json())
      .then((rest) => handleChangeWeather(rest, cityValue));
  }, []);

  // render() {
  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          // onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
      </div>
      <div>
        <button
          className="search-button"
          //  onClick={this.handleSubmit}
          onClick={() => setCityValue(inputValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
  // }
}

export default SearchWeather;
