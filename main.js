// generateMessage(): main function that runs through the rest of the program
function messageGenerator() {
    let forecast = weatherForecast();
}

// weatherForecast(): generates the weather forecast
function weatherForecast() {
    // variables
    let temperature;
    let weather;
    let windspeed;
    const possibleConditions = ['Thunderstorms', 'Rain', 'Cloudy', 'Partly Cloudy', 'Sunny'];

    // get a temperature 10-100 F
    temperature = Math.round(Math.random() * (100 - 10) + 10);
    console.log(temperature);
    // select a weather condition
    // get a windspeed 0-25 mph
    // return message
}

