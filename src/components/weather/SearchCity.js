import React from "react";

const SearchCity = ({ weather, setWeather, getWeatherData }) => {
  return (
    <div className="w-full sm:w-3/4 mx-auto z-50 h-[550px] p-6 rounded-lg">
      <div className="mt-10">
        <input
          type="search"
          placeholder="search any city..."
          className="py-2 px-1 bg-slate-200 border-b-2 border-slate-600 w-3/4 text-black focus:outline-none rounded-l-md focus:border-2 focus:border-[#3b0764]"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
        <button
          onClick={getWeatherData}
          className="text-white bg-cyan-900 hover:bg-cyan-800 px-2 py-2.5 rounded-r-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCity;
