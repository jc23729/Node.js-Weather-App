const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b7660020ffeb0dd6c15dcbc412048749&query=37.8267,-122.4233'

request({ url: url, json: true}, (error, response)=> {
    // console.log(response)  then run node app.js  in terminal will give you all the data 
    //we parse our data with JSON.parse and it lives on response.body
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    //console.console.log( m,mmmresponse.body.current)is doing the same as on top
    console.log(response.body.current.weather_descriptions[0] + "It is currently" + response.body.current.temperature + "degrees out")
})
// response.body.current
//Goal: Print a small forecast to the user
//Print : "It is currently 58.55 degrees out. There is a chance of 0% chance of rain"
//Test your work

