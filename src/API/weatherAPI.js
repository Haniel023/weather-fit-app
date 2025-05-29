const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export async function fetchWeatherByCoords(lat, lon){
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
    );
    if (!res.ok) throw new Error("Failed to fetch weather status!");
    return res.json();
}