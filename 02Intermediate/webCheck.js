
let userEmail = 'abc12346'
let password = '12345asdca'

let userChecker = function (myString) {
  if ((myString.includes(123)) && (myString.length > 6)) {
    return true
  }
  return false
}

let passChecker = function (pass) {
  if ((pass.includes('1234')) && (pass.length > 6)) {
    return true
  }
  return false
}

// console.log(userChecker(userEmail))
console.log(passChecker(password))