let iAmGlobal = 'someValue'

if (true) {
  let iAmLocal = 'someMoreValue'
  iAmGlobal = 'superman'
  console.log(iAmGlobal)
  console.log(iAmLocal)
}

// console.log(iAmLocal)
console.log(iAmGlobal)