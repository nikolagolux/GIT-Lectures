function Circle(radius) {
  this.radius = radius

  this.move = function() {
    this.examine()
    this.draw()
    console.log(`moving nb: ${this.radius}`)
    this.finish()
  }
  
}

Circle.prototype.draw = function() {
  console.log('drawing')
}

Circle.prototype.examine = function() {
  console.log('examining it')
}

Circle.prototype.finish = function() {
  console.log('finished drawing')
}

const c1 = new Circle(1)

console.log(c1.move())

