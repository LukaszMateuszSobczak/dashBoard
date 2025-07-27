const openWeatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getPosition = () => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve(pos.coords);
            },
            () => {
                resolve({
                    latitude: 52.2297,
                    longitude: 21.0122,
                });
            }
        );
    });
};

export const getWeather = async () => {
    const pos = await getPosition();
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&units=metric&cnt=2&appid=${openWeatherApiKey}`
    );
    const data = await res.json();
    return {
        city: data.city.name,
        today: {
            weatherDate: data.list[0].dt,
            weatherDescription: data.list[0].weather[0].description,
            weatherIcon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
            actualTemp: data.list[0].main.temp.toFixed(),
            tempMin: data.list[0].main.temp_min.toFixed(),
            tempMax: data.list[0].main.temp_max.toFixed(),
            wind: data.list[0].wind.speed,
        },
        tomorrow: {
            weatherDate: data.list[1].dt,
            weatherDescription: data.list[1].weather[0].description,
            weatherIcon: `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
            actualTemp: data.list[1].main.temp.toFixed(),
            tempMin: data.list[1].main.temp_min.toFixed(),
            tempMax: data.list[1].main.temp_max.toFixed(),
        },
    };
};

export const setWeather = async () => {
    const weatherData = await getWeather();
    createElement(weatherData);
};

const weatherBox = document.querySelector('#weatherBox');

const createElement = (data) => {
    const unicodeCelsius = '\u00B0C';
    //h3 city name
    const h3 = document.createElement('h3');
    h3.className = 'city';
    h3.textContent = data.city;
    weatherBox.appendChild(h3);

    //column with icon and weather condition
    const div1 = document.createElement('div');
    div1.className = 'column';
    const icon = document.createElement('img');
    icon.src = data.today.weatherIcon;
    div1.appendChild(icon);
    const todayDesc = document.createElement('p');
    todayDesc.className = 'text-small';
    todayDesc.textContent = data.today.weatherDescription;
    div1.appendChild(todayDesc);

    weatherBox.append(div1);

    //column with temps

    const div2 = document.createElement('div');
    div2.className = 'column';
    const temp = document.createElement('p');
    temp.className = 'text-large';
    temp.textContent = `${data.today.actualTemp}${unicodeCelsius}`;

    div2.appendChild(temp);
    const minMaxTemp = document.createElement('p');
    minMaxTemp.className = 'text-small';
    minMaxTemp.textContent = `${data.today.tempMax}${unicodeCelsius} / ${data.today.tempMin}${unicodeCelsius}`;
    div2.appendChild(minMaxTemp);
    const wind = document.createElement('p');
    wind.className = 'text-small';
    wind.textContent = `Wind: ${data.today.wind} m/s`;
    div2.appendChild(wind);

    weatherBox.appendChild(div2);

    //horizontal line
    const line = document.createElement('div');
    line.className = 'horizontal-line';

    weatherBox.appendChild(line);

    //tomorrow box
    const div4 = document.createElement('div');
    div4.className = 'column';
    const dayName = document.createElement('p');
    dayName.className = 'text-small';
    dayName.textContent = 'Tomorrow'; //! edit real day
    div4.appendChild(dayName);
    const iconTomorrow = document.createElement('img');
    iconTomorrow.src = data.tomorrow.weatherIcon;
    div4.appendChild(iconTomorrow);
    const minMaxTempTomorrow = document.createElement('p');
    minMaxTempTomorrow.className = 'text-small';
    minMaxTempTomorrow.textContent = `${data.tomorrow.tempMax}${unicodeCelsius} / ${data.tomorrow.tempMin}${unicodeCelsius}`;
    div4.appendChild(minMaxTempTomorrow);

    weatherBox.appendChild(div4);
};

/*
<div class="card padding-big weather">
    <h3 class="city">Lublin</h3>
    <div class="column">
        <i class="fa-solid fa-sun"></i>
        <p class="text-small">sunny</p>
    </div>
    <div class="column">
        <p class="text-large">20 C</p>
        <p class="text-small">12/24 C</p>
    </div>
    <div class="column">
        <p class="text-large">quality</p>
        <p class="text-small">1.6mph</p>
    </div>
    <div class="horizontal-line"></div>
    <div class="column">
        <p>Monday</p>
        <i class="fa-solid fa-snowflake"></i>
        <p>10/17C</p>
    </div>
</div>
*/
