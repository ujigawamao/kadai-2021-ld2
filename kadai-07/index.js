class Animal {
    constructor() {
        this.energy = 100 
    }
    eat() {
        this.energy = this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log("neow")
    }
}

class Tiger extends Animal {
    constructor() {
        super()
        this.energy = 500
    }
    speak() {
        console.log("roar")
    }
    eat() {
        this.energy = this.energy + 20
    }
}

class Snake extends Animal {
    constructor() {
        super()
        this.energy = 150
    }
    speak() {
        console.log("hiss")
    }
}
const cat = new Cat()
const tiger = new Tiger()
const snake = new Snake()

cat.speak()
tiger.speak()
snake.speak()

cat.eat()
tiger.eat()
tiger.eat()
tiger.eat()
snake.eat()

console.log("cat", cat.energy)
console.log("tiger", tiger.energy)
console.log("snake", snake.energy)
