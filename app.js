const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b7660020ffeb0dd6c15dcbc412048749&query=37.8267,-122.4233'

request({ url: url}, (error, response)=> {
    // console.log(response)  then run node app.js  in terminal will give you all the data 
    //we parse our data with JSON.parse and it lives on response.body
    const data = JSON.parse(response.body)
})

