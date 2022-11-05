import React from "react"

export default function Card(props) {
    return (
        <div className="data">
          <div className="card">
            <p>Feels Like</p>
            <h1 className="details">{props.feelsLike}°</h1>
          </div>
          <div className="card">
            <p>High</p>
            <h1 className="details">{props.maxTemp}°</h1>
          </div>
          <div className="card">
            <p>Low</p>
            <h1 className="details">{props.minTemp}°</h1>
          </div>
          <div className="card">
            <p>Humidity</p>
            <h1 className="details">{props.humidity}%</h1>
          </div>
          <div className="card">
            <p>Pressure</p>
            <h1 className="details">{props.pressure} hPa</h1>
          </div>
          <div className="card">
            <p>Wind Speed</p>
            <h1 className="details">{props.windSpeed} km/h</h1>
          </div>
        </div>
    )
}