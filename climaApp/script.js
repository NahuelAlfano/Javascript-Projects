// APIS

const weatherApi = "6ffaca22cba7d7f80e932c7b260f260f"

// botones

const browserBtn = document.querySelector('browserButton')

let cityInput = document.querySelector('input').innerHTML;

// const callWeatherApi = `api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${weatherApi}`
const callWeatherApi = `api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherApi}`
fetch(callWeatherApi)
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
