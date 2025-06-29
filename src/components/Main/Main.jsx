import './Main.css';
import WeatherCard from "../WeatherCard/WeatherCard"
import { defaultClothingItems } from '../../utils/constants';

const Main = () => {
  return (
    <main>
        <WeatherCard/>
        <section className="cards">
            <p className="cards__text">
            Today is 75° F / You may want to wear:
            </p>
            <ul className='cards__list'>
                {defaultClothingItems.map((item) => {
                   return (
                    <div key={item._id} className='cards__item'>
                    <h2 className='cards__title'>{item.name}</h2>
                    <img className='cards__image' src={item.link} alt={item.name}/>
                   </div>
                   ) 
                })};
            </ul>
        </section>
    </main>
  )
}

export default Main