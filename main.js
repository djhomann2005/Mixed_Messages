// generateMessage(): main function that runs through the rest of the program
function messageGenerator() {
    let forecast = weatherForecast();
    let inspiration = inspirationalMessage();
    let lotteryNumber = generatePowerball();
    
    console.log(forecast);
    console.log(inspiration);    
    console.log(lotteryNumber);
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

// inspirationalMessage(): chooses a message from a list of created messages
function inspirationalMessage() {
    const inspirations = [
        "Be yourself; everyone else is already taken",
        "You must be te change you wish to see in the world",
        "You have to believe in yourself when no one else does",
        "It takes courage to grow up and become who you really are",
        "Positive thinking will let you do everything better than negative thinking will",
        "Failure will never overtake me if my determination to succeed is strong enough",
        "If you don't like the road you're walking, start paving another one",
        "We must accept finite disappointment, but never lose infinite hope",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier",
        "We are not what we know but what we are willing to learn"
    ];

    let rand = Math.floor(Math.random() * inspirations.length);
    return inspirations[rand];
}

function generatePowerball() {
    let whiteBalls = [];
    const whiteNumbers = 69;
    const numWhiteBalls = 5;
    const powerNumbers = 26;

    for (let i = 0; i < numWhiteBalls; i++) {
        let ball = Math.round(Math.random() * whiteNumbers);
        while (whiteBalls.includes(ball)) {
            ball = Math.round(Math.random() * whiteNumbers);
        }
        whiteBalls.push(ball);
    }

    whiteBalls.sort((a, b) => a - b);
    
    let powerBall = Math.round(Math.random() * powerNumbers);
    
    return ("Powerball Numbers: " + whiteBalls + " PB: " + powerBall);
}