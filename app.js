console.log('Starting')

//node can continue to run things down below while its waiting for 2 secs to pass
setTimeout(() => {
    console.log('2 second timer')
} , 2000)

setTimeout(() => {
    console.log('O sec timer')
}, 0)

console.log('Stoping')