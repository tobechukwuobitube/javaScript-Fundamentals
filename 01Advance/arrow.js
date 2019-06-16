// const sayHello = function(name) {
//   return "Hey hello " + name + "!"
// }

// console.log(sayHello('Jake'))

const sayHello = (name) => `Hey hello ${name}!`

// console.log(sayHello('Jake'))

const newTodos = [{
  title: 'Cook food',
  isDone: false,
}, 
{
  title: 'write a book',
  isDone: true,
},{
  title: 'bring in clothes',
  isDone: false,
}, {
  title: 'learn code',
  isDone: true,
}, {
  title: 'sleep',
  isDone: false
},{
  title: 'learn to piano',
  isDone: true,
},]

// const itemsDone = newTodos.filter((todo) => todo.isDone === false)
const itemsTitle = newTodos.filter((todo) => todo.isDone === false).map(todo => todo.title)

// const todos = {}
// const itemsDone = Object.keys(todos)
// // console.log(itemsDone, itemsTitle)

// const doneItems = itemsDone.filter((title) => {
//   return todos.title
// }).

// console.log(itemsTitle)

const cameras = {
  price: 600,
  weight: 2000,
  myDes: function() {
    return `This canon camera is $${this.price}`
  }
}

console.log(cameras.myDes())