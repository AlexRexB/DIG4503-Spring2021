class Cat {
    constructor(color, legs, tail, name) {
        this.color = color;
        this.legs = legs;
        this.hasTail = tail;
        this.name = name;
    }
    speak() {
        console.log("Meow!")
    }
}

class Whiskey extends Cat {
    constructor() {
        super("orange", 4, true, "Whiskey");
    }
}

const c = new Cat("orange", 4, true, "Garfield");
const c2 = new Whiskey();

console.log(c2.name);