// generateMessage(): main function that runs through the rest of the program
function messageGenerator() {
    let forecast = weatherForecast();
    console.log(forecast);
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
 
    // select a weather condition
    let rand = Math.round(Math.random() * 4);
    weather = possibleConditions[rand];
    
    // get a windspeed 0-25 mph
    windspeed = Math.round(Math.random() * 25);
    
    // return message
    return ('Forecast for tomorrow: ' + weather + ' with a high of ' + temperature + 
        ' degrees Fahrenheit and winds at ' + windspeed + ' miles per hour');
}

