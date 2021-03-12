console.log('Starting')

//node can continue to run things down below while its waiting for 2 secs to pass
setTimeout(() => {
    console.log('2 second timer')
} , 2000)

setTimeout(() => {
    console.log('O sec timer')
}, 0)

console.log('Stoping')

//this is the basic structure that we can put in the browser to fetch an API
// http://api.weatherstack.com/current?key=value&name=andrew