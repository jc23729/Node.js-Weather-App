const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=b7660020ffeb0dd6c15dcbc412048749&query=37.8267,-122.4233&units=f'
// //info that we took out to break the app 37.8267,-122.4233
// request({ url: url, json: true}, (error, response)=> {
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + "It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "Chance of rain")
//     }
// })



// response.body.current
//Goal: Print a small forecast to the user
//Print : "It is currently 58.55 degrees out. There is a chance of 0% chance of rain"
//Test your work

//Previous code-------->
// console.log(response)  then run node app.js  in terminal will give you all the data 
    //we parse our data with JSON.parse and it lives on response.body
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    //console.console.log( m,mmmresponse.body.current)is doing the same as on top
// request({ url: url, json: true}, (error, response)=> {
//     console.log(response.body.current.weather_descriptions[0] + "It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "Chance of rain")
// })

//GeoCoding Service 
// Address => Lat/Long  => Weather
//Goal Print out lat/long for Los Angeles
// 1 Fire off request to the URL explored in the browser
// 2 Have the request module parse it as JSON
// 3 Print both the latitude and longitude to the terminal
// 4 Test your work

//Challenge 2 setting up Error Handling
// 1. Setup an error handler for low level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching Results
// 4. Test by altering the search term and running the app

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamMyMzcyOSIsImEiOiJja204NHk3d3UxNGxnMnZvam5yNmY1ejU5In0.Fgrk60-BTlJGsXqeEzrsbw'

request({url: geocodeURL, json: true}, (error, response) => {
    
})


const latitude = response.body.features[0].center[1]
const longitude = response.body.features[0].center[0]
console.log(latitude, longitude)