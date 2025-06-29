import './WeatherCard.css';
import weatherSunny from '../../assets/sunny2.png';
const WeatherCard = () => {
  return (
    <section className="weather-card">
        <p className="weather-card__temp">
        75&deg;F
        </p>
        <img className="weather-card__image" alt="weather condition image" src={weatherSunny}/>
    </section>
  )
}

export default WeatherCard