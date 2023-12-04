// const express = require("express"); 
// const path = require("path"); 
// const app = express(); 


// app.use(express.static(path.join(__dirname, "/public"))) //telling the server that we have some client side code that we want it to display

// const weather = [
//     {
//     city: "Louisville",
//     temp: "63",
//     condition: "Sunny",
//     precipitation: "0%"
//     },
//     {
//     city: "Chicago",
//     temp: "43",
//     condition: "Cloudy",
//     precipitation: "20%"
//     },
//     {
//     city: "New York",
//     temp: "32",
//     condition: "Snowy",
//     precipitation: "100%"
//     },
//     {
//     city: "Miami",
//     temp: "79",
//     condition: "Sunny",
//     precipitation: "0%"
//     },
//     {
//     city: "Mexico City",
//     temp: "65",
//     condition: "Cloudy",
//     precipitation: "40%"
//     }
//     ]; 

// app.get('/', (req, res) => { 
//     res.sendFile("path.join"(__dirname, "/public/index.html"))
// })

// app.get('/weather', (req, res) => { 
//     res.send(weather)
// })

// app.listen(3000)

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public"))); //telling the server that we have some client side code that we want it to display

const weather = [
    {
        city: "Louisville",
        temp: "63",
        condition: "Sunny",
        precipitation: "0%"
    },
    {
        city: "Chicago",
        temp: "43",
        condition: "Cloudy",
        precipitation: "20%"
    },
    {
        city: "New York",
        temp: "32",
        condition: "Snowy",
        precipitation: "100%"
    },
    {
        city: "Miami",
        temp: "79",
        condition: "Sunny",
        precipitation: "0%"
    },
    {
        city: "Mexico City",
        temp: "65",
        condition: "Cloudy",
        precipitation: "40%"
    }
];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/weather", (req, res) => {
    res.send(weather);
});

app.get("/weather/:city", (req, res) => {
    const cityName = req.params.city;
    const cityWeather = weather.find(city => city.city.toLowerCase() === cityName.toLowerCase());

    if (cityWeather) {
        res.send(cityWeather);
    } else {
        res.status(404).send("City not found");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
