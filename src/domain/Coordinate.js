class Coordinate {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  equals(coordinate) { return coordinate.x === this.x && coordinate.y === this.y }
}

module.exports = Coordinate
