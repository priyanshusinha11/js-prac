const sayDate = function(str) {
    console.log(str, Date.now())
}
let intervalId;
document.querySelector('#start').addEventListener('click', () => {
    intervalId =  setInterval(sayDate, 2000, "Hey!")
})

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId)
    console.log("stopped")
})
