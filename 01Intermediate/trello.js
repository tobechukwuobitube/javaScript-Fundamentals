
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// // const position = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']

// // console.log(days[0])

// // days.forEach(function (day, index ) {
// //   console.log(`this week starts with ${index + 1} -- ${day}`)
// // })

// // const monthPosition = function () {
// //   return position.forEach(function (theMonth) {
// //     return theMonth
// //   })
// // }

// // const monthPosition = position.forEach(function (theMonth) {
// //   return theMonth
// // })

// // console.log(monthPosition)

// // months.forEach(function (month, index, /* monthPosition */) {
// //   console.log(`This is the ${monthPosition} month of the year: ${index + 1} -- ${month}`)
// // })

// // months.forEach( (month, index, /* monthPosition */) => {
// //   console.log(`This is the ${monthPosition} month of the year: ${index + 1} -- ${month}`)
// // })


// for (let index = days.length - 1; index >= 0; index--) {
//   console.log(days[index])
// }

const myTodos = []

// myTodos.push('Buy bread')
// myTodos.push('Record vides for youtube')
// myTodos.push('Go to the gym')

// myTodos.forEach(function(todo, index){
//   console.log(`Your tasks no. ${index + 1} is ${todo}`)
// })

myTodos.unshift('Get up and pray')
myTodos.unshift('Take your bath')
myTodos.unshift('Commute to work')
myTodos.unshift('Have breakfast at the office')

for (let index = 0; index < myTodos.length; index++) {
  const element = myTodos[index];
  console.log(element)
}