import Chalk from 'chalk';

class Person {

    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    speak() {
        console.log(Chalk.hex(this.favoriteColor)(this.name));
    }
}

export default Person;