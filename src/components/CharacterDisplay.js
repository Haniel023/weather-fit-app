function getOutfit(condition, temp) {
    if(condition.includes("Rain")) return "☔ Raincoat";
    if(condition.includes("Snow")) return "🧣 Jacket + Scarf";
  if (temp >= 30) return "🩳 Tank Top";
  if (temp >= 20) return "👕 T-shirt";
  if (temp >= 10) return "🧥 Hoodie";
  return "🧥 Thick Coat";
}

function CharacterDisplay({ weather }){
    const {current} = weather;
    const outfit = getOutfit(current.condition.text, current.temp_c);

    return (
        <div className="mt-6 p-4 bg-white rounded-lg shadow text-center">
            <div className="text-6xl mb-2">🧍</div>
            <div className="text-xl font-semibold">Outfit Suggestion:</div>
            <div className="text-2xl mt-2">{outfit}</div>
        </div>
    );
}

export default CharacterDisplay;