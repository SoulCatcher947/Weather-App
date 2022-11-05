import React from "react"
import Card from "./Card"
import NightSky from "./assets/night-sky.jpg"
import ClearSky from "./assets/clear-sky.jpg"
import Cloudy from "./assets/cloudy.jpg"
import Foggy from "./assets/foggy.jpg"
import RainyDay from "./assets/rainy-day.jpg"
import SunnyDay from "./assets/sunny-day.jpg"
import Snowy from "./assets/snow-day.jpg"
import ThunderStorm from "./assets/thunderstorm.jpg"
import CloudyNight from "./assets/cloudy-night.jpg"

export default function App() {

  const [search, setSearch] = React.useState("")
  const [city, setCity] = React.useState("Ottawa")
  const [weather, setWeather] = React.useState("")

  const weatherAPI_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f15532ff2f6a1b3c5cc8a93be97a9455`
  
  React.useEffect(() => {
    fetch(weatherAPI_url)
    .then(res => res.json())
    .then(data => setWeather(data))
  },[city]) 

  
  
  function handleChange(event) {
    setSearch(prevSearch => {
        return {
            ...prevSearch,
            [event.target.name]: event.target.value
        }
    })
  }

  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      setCity(prevCity => prevCity = search.search)
    }
  };

  function styles() {
    const id = weather.weather[0].icon
    let url = ""
    if(id === "01d") {
      url = `url(${ClearSky})`
    }
    else if(id === "02d" || id === "03d") {
      url = `url(${SunnyDay})`
    }
    else if(id === "04d") {
      url = `url(${Cloudy})`
    }
    else if(id === "04n") {
      url = `url(${CloudyNight})`
    }
    else if(id === "09d" || id === "10d" || id === "10n" || id === "09n") {
      url = `url(${RainyDay})`
    }
    else if(id === "11d" || id === "11n") {
      url = `url(${ThunderStorm})`
    }
    else if(id === "13d" || id === "13n") {
      url = `url(${Snowy})`
    }
    else if(id === "50d") {
      url = `url(${Foggy})`
    }
    else {
      url = `url(${NightSky})`
    }
    return {
      backgroundImage: url
      
    }
  }

  return weather.length != [] ? (
    <div className="home" style={styles()}>
      <header>
        <input 
          type="text" 
          placeholder="Search for city..."
          id="search" 
          name="search" 
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="search-bar" >
        </input>
        <div className="weather">
          <h1 className="city">{city}</h1>
          <div className="temp">
            <img 
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
              <h1>{Math.round(weather.main.temp)}°</h1>
          </div>
          <h2 className="description">{weather.weather[0].description}</h2>
        </div>
      </header>
      <main>
        <Card 
          feelsLike={Math.round(weather.main.feels_like)}
          maxTemp={Math.round(weather.main.temp_max)}
          minTemp={Math.round(weather.main.temp_min)}
          humidity={weather.main.humidity}
          pressure={weather.main.pressure}
          windSpeed={Math.round(weather.wind.speed)}
        />
      </main>
    </div>
  ) : (
    <h1></h1>
  )
}
