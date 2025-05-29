import { useEffect, useState } from 'react';
import { fetchWeatherByCoords } from "./API/weatherAPI";
import WeatherCard from "./components/WeatherCard";
import CharacterDisplay from './components/CharacterDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try{
        const data = await fetchWeatherByCoords(latitude, longitude);
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    })
  }, []);

  if (!weather) return <div className="p-4 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center">
      <WeatherCard weather={weather}/>
      <CharacterDisplay weather={weather}/>
    </div>
  );
}

export default App;
