import Hare from "./hare.js";
import Turtle from "./turtle.js";
import Race from "./race.js";

class Main {
    constructor() {
        this.makeRace();
    }

    makeRace() {
        let hare = new Hare(),
            turtle = new Turtle(),
            race = new Race();

        console.log(race.startRace(hare, turtle));
    }
}

let m = new Main(); 