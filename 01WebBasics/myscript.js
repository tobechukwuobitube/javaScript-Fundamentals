
const pElements = document.querySelectorAll('p')
pElements.forEach((p) => p.textContent = 'All Ps are changed to this text')

const newP = document.createElement('p')
newP.textContent = 'Just added a div with text'
document.querySelector('body').appendChild(newP)

document.querySelector('button').addEventListener('click', (event) => {
  event.target.textContent = 'I was clicked'
  // event.target.textContent = 'I was clicked again'
})

document.querySelector('#myform').addEventListener('input', (event) => {
  console.log(event.target.value)
  pElements[1].textContent = event.target.value
})