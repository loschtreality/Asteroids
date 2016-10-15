function MovingObject(options = { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}) {
  this.pos = options.pos;
  this.radius = options.radius;
  this.color = options.color;
  this.velocity = options.vel;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillstyle = this.color
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  )
  ctx.fill();

};

MovingObject.prototype.move = function () {
  this.pos[0] += this.velocity[0];
  this.pos[1] += this.velocity[1];
};

module.exports = MovingObject;
