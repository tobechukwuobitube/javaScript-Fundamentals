const newP = document.createElement('p')
newP.textContent = 'Just added a div with text'
document.querySelector('body').appendChild(newP)

function myValidator() {
  const myValues = document.getElementById('myform').value

  if (isNaN(myValues) || myValues < 1 || myValues > 20) {
    newP.textContent = 'Not a valid number'
  } else {
    newP.textContent = 'You\'re good to go'
  }
}


// form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(event.target.username.value)
  console.log(event.target.realname.value)
  event.target.username.value = ''
  event.target.realname.value = ''
})