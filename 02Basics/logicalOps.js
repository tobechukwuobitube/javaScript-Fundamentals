let isVerfied = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = false

if (!isVerfied && isLoggedIn && hasPaymentToken) {
  console.log('Greeting message to user')
  console.log('Grant access to paid courses')
} else if (isVerfied || isGuest) {
  console.log('Allow free previews')
} else {
  console.log('MESSAGE: please contact Admin')
}