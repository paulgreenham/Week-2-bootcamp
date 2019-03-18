//Callback spot-checks

// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


// setInterval(function(){console.log(new Date())}, 1000)


//Arrow Functions spot-checks

// const square = num => console.log(num*num)

// const getFormalTitle = (title, name) => title + " " + name




//Exercises

//1.

// const pushPull = function(callback){
//     callback()
// }

// const push = function () {
//     console.log("pushing it!")
// }

// const pull = function () {
//     console.log("pulling it!")
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"


//2.

// const getTime = function(callback){
//     const time = new Date()
//     callback(time)
// }

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
// }

// getTime(returnTime)


//3.

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data)
//     logDataFunc(data)
// }

// const dataList = []

// const logData = function(data){
//     dataList.push(data)
// }

// displayData(alert, logData, "I like to party")


//4.

// const add1 = (a, b, c) => a + b + c


//5.

// const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

// console.log(capitalize("anYstriNg"))


//6. 

// const determineWeather = temp => {
//     if(temp > 25){
//         return "hot"
//     }
//     return "cold"
// }

// const commentOnWeather = temp => "It's " + determineWeather(temp)

// console.log(commentOnWeather(30)) //returns "It's hot"
// console.log(commentOnWeather(22)) //returns "It's cold"


//7.

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)

explode(shineLight, makeSound, "BOOM")