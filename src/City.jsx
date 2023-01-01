import React from "react";

const City = ({ city }) => {
    console.log(city);
  return (
    <div>
        <div className="w-[350px] rounded-md shadow mx-auto">
            <h1 className="text-5x1 font-bold">{city.main.temp}°C</h1>
            <h1 className="text-3x1 font-semibold">{city.name}</h1>
            <h1 className="text-2x1">{city.weather[0].main}</h1>
        </div>
    </div>
  );
 
};

export default City;