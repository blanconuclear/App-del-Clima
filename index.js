"use strict";

const API_KEY = "1e326bfec4e5e9573b83f83144fb3d22";

//Obtenemos datos de la API
async function fetchData(position) {
  const { latitude, longitude } = position.coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  const data = await response.json();

  //Obtenemos datos de la data.
  const weatherData = {
    location: data.name,
    temperature: `${data.main.temp}º`,
  };

  //Imprimimos los datos
  Object.keys(weatherData).forEach((key) => {
    document.getElementById(key).textContent = weatherData[key];
  });

  cleanUp();
}

const cleanUp = () => {
  let container = document.getElementById("container");
  let loader = document.getElementById("loader");

  loader.style.display = "none";
  container.style.display = "flex";
};

/* //Obtenemos la fecha actual
const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}; */

//Obtenemos la localización
const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
};
onLoad();
