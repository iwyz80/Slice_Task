// Javascript ES6
const args = process.argv;
let input = args[2];

const checkInputFormat = require('./utils').checkInputFormat;

class PizzaBot {
  constructor(name) {
    this.name = name || "Pizzabotti";
    this.grid = "";
    this.deliveries = "";
    this.route = "";
  }

  setDeliveries(input) {
    if (!checkInputFormat(input)) {
      console.log("Pizzabot Error! Check your input, please.");
      return;
    }

    this.grid = input[0];
    this.deliveries = this.parseDeliveries(input);
  }

  parseDeliveries(input) {
    return input
      .slice(input.indexOf("(") + 1, -1)
      .split(") (")
      .map(ele => {
        return ele.split(", ").map(ele => Number(ele));
      });
  }

  getDeliveries() {
    return this.deliveries;
  }

  setRoute() {
    const deliveries = this.deliveries;
    let origin = [0, 0];
    let route = "";

    for (let destination of deliveries) {
      //map coords
      let [origX, origY] = origin,
        [destX, destY] = destination;

      // compass direction
      let dirX = this.getDirection("x", origX, destX),
        dirY = this.getDirection("y", origY, destY);

      // write route
      while (origX !== destX) {
        route += dirX;
        if (origX < destX) origX++;
        else origX--;
      }

      while (origY !== destY) {
        route += dirY;
        if (origY < destY) origY++;
        else origY--;
      }

      route += "D";
      origin = destination.slice();
    }

    this.route = route;
  }

  getRoute() {
    return this.route;
  }

  getDirection(axis, start, end) {
    const compass = new Map([
      ["up", "N"],
      ["down", "S"],
      ["left", "W"],
      ["right", "E"],
      ["drop", "D"]
    ]);

    if (start === end) return compass.get("drop");
    if (axis === "x")
      return start < end ? compass.get("right") : compass.get("left");
    return start < end ? compass.get("up") : compass.get("down");
  }

}

const pizzabot = new PizzaBot();
pizzabot.setDeliveries(input);
pizzabot.setRoute();
console.log(pizzabot.getRoute());

module.exports = { PizzaBot };
