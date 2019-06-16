const john = {
  name: 'I am john',
  age: '24',
  isActive: true
}

const mary = {
  name: 'I am mary',
  age: '17',
  isActive: true
}

const duke = {
  name: 'I am duke',
  age: '19',
  isActive: false
}

let users = new Map()

users.set('member1', john)
users.set('member2', mary)
users.set('member3', duke)

// console.log(users)
// console.table(users)

// console.log(users.size)
// console.log(users.get('member1'))
// console.log(users.keys())
// console.log(users.values())

// for (const value of users.values()) {
//   console.log(value.age)
// }

// for (const [key, value] of users.entries()) {
//   // console.log(key + ' = ' + value.name)
//   console.log(`${key} = ${value.name}`)
// }

// users.forEach((value, key) => console.log(`${key} = ${value.name}`))

// console.log(memberNames)

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrofArr)
// console.log(newMap)

newMap.forEach((value, key) => console.log(`${key} = ${value}`))