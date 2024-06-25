import React, { useState } from 'react';
import './Weather.css';

const api = {
    key: 'b105a033c81647ba529be3b634fda696',
    base: 'https://api.openweathermap.org/data/2.5/'
};

const Weather = () => {
    const [query, setQuery] = useState(''); 
    const [weather, setWeather] = useState({});

    const search = (event) => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    };

    const dateBuilder = (dates) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[dates.getDay()];
        let month = months[dates.getMonth()];
        let date = dates.getDate();
        let year = dates.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className='weather-app'>
            <main>
                <div className='search-box'>
                    <input 
                        type='text' 
                        className='search-bar' 
                        placeholder='Search' 
                        value={query}
                        onChange={event => setQuery(event.target.value)} 
                        onKeyPress={search}
                    />
                </div>
                <div className='location-box'>
                    <div className='location'>
                        {weather.name ? `${weather.name}, ${weather.sys.country}` : ''}
                        <div className='date'>
                            {dateBuilder(new Date())}
                        </div>
                    </div>
                    <div className='weather-box'>
                        <div className='temperature'>
                            {weather.main ? `${(weather.main.temp).toFixed(0)}°C` : ''}
                        </div>
                    </div>
                    <div className='weather'>
                        {weather.main ? `${weather.weather[0].main}` : ''}
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Weather;
