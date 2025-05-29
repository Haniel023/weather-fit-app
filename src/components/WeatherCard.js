function WeatherCard({ weather }){
    const { location, current } = weather;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h1 className="text-4xl font-bold">{current.temp_c}°C</h1>
            <p className="text-xl">{current.condition.text}</p>
            <p className="text-gray-600">{location.name}, {location.country}</p>
            <img
                src={current.condition.icon}
                alt={current.condition.text}
                className="mx-auto mt-4"
            />
        </div>
    );
}

export default WeatherCard;