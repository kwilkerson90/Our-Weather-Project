fetch("http://api.weatherapi.com/v1/current.json?key=8ebeb6464976415cbb6145203221204&q=Chicago").then(function(response) {
    return response.json();
}).then(function(data) {        //method chaining 
    // console.log(data);
})

fetch("http://api.weatherapi.com/v1/forecast.json?key=8ebeb6464976415cbb6145203221204&q=30318&days=7&aqi=yes").then(function(response) {
    return response.json();
}).then(function(data) {
    // console.log(data);
})
 
const button = document.getElementById("#search");
//grabbing the HTML elements and setting them as variables
//via the DOM
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const condition = document.getElementById("condition");



const getData = function() {
    
    const searchText = document.getElementById("text").value;
        //grab the HTML input element; decleare it as a variable
        //basically setting the value of the text as a variable
    fetch(`http://api.weatherapi.com/v1/current.json?key=8ebeb6464976415cbb6145203221204&q=${searchText}`).then(function(response) {
        //making a fetch request to the weather API; passing the searchText 
        //as a dynamic query parameter
        //THEN run the function which is to return the response 
        //(the parsed JSON data) 
        return response.json();
        //return the data
        }).then(function(data) {
        //THEN interpret the data from the API
        //previously declared variables
        //telling the DOM to take the following IDs and replace those 
        //HTML elements with the corresponding data from the API
            temp.innerHTML = data.current.temp_f;
            city.innerHTML = data.location.name;
            condition.innerHTML = data.current.condition.text;

            getNewPic();
        
    })
}

document.getElementById("search").addEventListener("click", getData);
//setting an event listener on the search button; listening for the click
//when the click happens, run the getData function


document.getElementById("search").addEventListener("click", function(event) {
    event.preventDefault();
    getData();
});
//adding another event listener to the search button 
//when the click event happens, 


////////////////////////////////////////////////////////

fetch("https://api.unsplash.com/search/photos/?query=Paris&client_id=qBCZJ2e6qOHcxopVPOEeDYSuhp7gilPHfAIJRbpUS5g").then(function(response) {
    return response.json();
}).then(function(data) {        //method chaining  
    console.log(data);
})


const imageToDisplay = document.getElementById('imageToDisplay');


async function getNewPic() {
    searchText = document.getElementById("text").value;
    gimmeUrl = 
    `https://api.unsplash.com/search/photos/?query=${searchText}&client_id=qBCZJ2e6qOHcxopVPOEeDYSuhp7gilPHfAIJRbpUS5g`;
    let randomNumber = Math.floor(Math.random() *10);
    //math.random() returns a random number b/t 0 and 1
    //returns x rounded down to its nearest integer
    fetch(gimmeUrl)
    //fetch request from the Unsplash API
    .then((response) => response.json())
    .then((data) => {
        let allPics = data.results[randomNumber];
        document.body.style.backgroundImage = `url("${allPics.urls.regular}")`;
        //this replaces the body of the webpage with the 
        //random pic from the API
        console.log(allPics.urls.regular);
        console.log(document.body)
    });
}


// document.getElementById("search").addEventListener("click", myFunction);
// function myFunction() {
//     document.body.style.backgroundColor = "#f3f3f3";
//     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? + name + ')";
// }