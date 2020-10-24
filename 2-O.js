// Open Close Principle

/* WRONG */
// class Square {
//   constructor(size) {
//     this.type = 'square'
//     this.size = size
//   }
// }

// class Circle {
//   constructor(radius) {
//     this.type = 'circle'
//     this.radius = radius
//   }
// }

// class Rect {
//   constructor(width, height) {
//     this.type = 'rect'
//     this.height = height
//     this.width = width
//   }
// }

// class AreaCalculator {
//   constructor(shapes = []) {
//     this.shapes = shapes
//   }

//   sum() {
//     return this.shapes.reduce((acc, shape) => {
//       if (shape.type === 'circle') {
//         acc += shape.radius ** 2 * Math.PI
//       } else if (shape.type === 'square') {
//         acc += shape.size ** 2
//       } else if (shape.type === 'rect') {
//         acc += shape.width * shape.height
//       }

//       return acc
//     }, 0)
//   }
// }

/* CORRECT */

class Shape {
  area() {
    throw new Error(
      `Method area must be implemented in ${this.type || 'shape'}!`
    )
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.type = 'square'
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.type = 'circle'
    this.radius = radius
  }

  area() {
    return this.radius ** 2 * Math.PI
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super()
    this.type = 'rect'
    this.height = height
    this.width = width
  }

  area() {
    return this.width * this.height
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area()
      return acc
    }, 0)
  }
}

const calc = new AreaCalculator([new Circle(1), new Square(5), new Rect(2, 3)])

console.log(calc.sum())
