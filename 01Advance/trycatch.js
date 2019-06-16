const cameras = {
  price: 600,
  weight: 2000,
  myDes: function() {
    return `This canon camera is $${price}`
  }
}
console.log(`Learning JavaScript`)

try {
  console.log(cameras.myDes())
} catch (error) {
  // console.log(error)
}

console.log(`cameras.myDes()`)