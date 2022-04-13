fetch("http://api.weatherapi.com/v1/current.json?key=8ebeb6464976415cbb6145203221204&q=London").then(function(response) {
    return response.json();
}).then(function(data) {        //method chaining 
    console.log(data.location);
})

fetch("http://api.weatherapi.com/v1/forecast.json?key=8ebeb6464976415cbb6145203221204&q=30318&days=7&aqi=yes").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
})