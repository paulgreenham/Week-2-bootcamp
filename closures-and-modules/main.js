//Closures & Modules Lesson spot-checks

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!


// const Family = function(){
//     let members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = Family()


// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }


// const changeString = function(){
//     const removeCommas = function(str){
//         let newStr = ""
//         for (let i = 0; i < str.length; i++){
//             if(str[i] != ","){
//                 newStr += str[i]
//             }
//         }
//         return newStr
//     }
    
//     const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

//     return {
//         noComma: removeCommas,
//         cap: capitalize
//     }
// }


// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Shiran')
// usersModule.addUser('Paul')
// usersModule.listUsers()




//Exercises

//1.

// const StringFormatter = function(){
//     const capitalizeFirst = function(str){
//         return str[0].toUpperCase() + str.slice(1).toLowerCase()
//     }
//     const skewerCase = function(str){
//         let newStr = ""
//         for (let i = 0; i < str.length; i++){
//             if(str[i] == " "){
//                 newStr += "-"
//             }
//             else{
//                 newStr += str[i]
//             }
//         }
//         return newStr
//     }

//     return {
//         cap: capitalizeFirst,
//         skewer: skewerCase
//     }
// }

// const formatter = StringFormatter()

// console.log(formatter.cap("dorothy")) //should print Dorothy
// console.log(formatter.skewer("blue box")) //should print blue-box


//2.

// const Bank = function(){
//     let money = 500

//     const depositCash = function(cash){
//         money += cash
//     }

//     const checkBalance = function(){
//         return money
//     }

//     return {
//         deposit: depositCash,
//         showBalance: checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// console.log(bank.showBalance()) //should print 950


//3.

const SongsManager = function(){
    const songs = {}
    
    const addSong = function(name, url){
        songs[name] = url.slice(32)
        console.log(songs)
    }

    const getSong = function(name){
        return "https://www.youtube.com/watch?v=" + songs[name]
    }

    return {
        addSong,
        getSong
    }
}
