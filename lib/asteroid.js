const Util = require('./lib/utils.js');
const MovingObject = require('./lib/moving_object.js');


function Asteroid() {
Util.inherits(Asteroid,MovingObject)
  this.color = "grey";
  this.radius = 20;

  constructor(pos) {
    new MovingObject({vel: [this.randVelocity(),this.randVelocity()], pos: pos, color: this.color, radius: this.radius})
  }

}

  Asteroid.prototype.randVelocity = function () {
    return (
      Math.floor(
        Math.random * (299 - 1) + 1
      )
    )
  };

module.exports = Asteroid;
