// Interface Segregation Principle

// WRONG
// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   fly() {
//     console.log(`${this.name} умеет летать`)
//   }

//   walk() {
//     console.log(`${this.name} умеет ходить`)
//   }

//   swim() {
//     console.log(`${this.name} умеет плавать`)
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return false
//   }
// }

// class Bird extends Animal {
//   swim() {
//     return false
//   }
// }

// class Fish extends Animal {
//   fly() {
//     return false
//   }
//   walk() {
//     return false
//   }
// }

// const dog = new Dog('Джек')
// console.log(dog.fly())
// console.log(dog.walk())
// console.log(dog.swim())

// const fish = new Fish('Руби')
// console.log(fish.fly())
// console.log(fish.walk())
// console.log(fish.swim())

// const bird = new Bird('Чирик')
// console.log(bird.fly())
// console.log(bird.walk())
// console.log(bird.swim())

// CORRECT

class Animal {
  constructor(name) {
    this.name = name
  }
}

const flyer = {
  fly() {
    console.log(`${this.name} умеет летать`)
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  }
}

class Dog extends Animal {}
class Bird extends Animal {}
class Fish extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Bird.prototype, flyer, walker)
Object.assign(Fish.prototype, swimmer)

const dog = new Dog('Собака')
console.log(dog.walk())
console.log(dog.swim())

const bird = new Bird('Птица')
console.log(bird.walk())
console.log(bird.fly())

const fish = new Fish('Рыба')
console.log(fish.swim())
console.log(fish.walk())
