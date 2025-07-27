const openWeatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const city = 'Lublin';

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};


export const getWeather = async () => {
    const positionCoordinates = getPosition();
    console.log(positionCoordinates);
    console.log(openWeatherApiKey);
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${positionCoordinates.lat}&lon=${positionCoordinates.lon}&appid=${openWeatherApiKey}`
    );
    const data = await res.json();
    console.log(data);
};
