// const myTodos = ['Cook food', 'bring in clothes', 'learn code', 'sleep']

// console.log(myTodos.indexOf('bring in clothes'))

const newTodos = [{
  title: 'Cook food',
  isDone: false,
}, {
  title: 'bring in clothes',
  isDone: false,
}, {
  title: 'learn code',
  isDone: true,
}, {
  title: 'sleep',
  isDone: false
}]

// const index = newTodos.findIndex(function(todo, index){
//   console.log(todo)
//   return todo.title === 'learn code'
// }) 

// console.log(index)

// Method 1
// const findTodos = function(myTodos, title) {
//   const index = myTodos.findIndex(function(todo, index) {
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodos[index]
// }

// let printFound = findTodos(newTodos, 'Learn Code')

// console.log(printFound)

// Method 2
const findTodos = function(myTodos, title) {
  const foundTodo = myTodos.find(function(todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return foundTodo
}

let printFound = findTodos(newTodos, 'SLEEP')

console.log(printFound)