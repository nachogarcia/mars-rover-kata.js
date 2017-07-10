const Coordinate = require('./Coordinate.js')

class Rover {
  constructor (coordinate, direction, obstacles) {
    this.coordinate = coordinate
    this.direction = direction
    this.obstacles = obstacles || []
  }

  static get OBSTACLE_FOUND_ERROR() { return new Error('Found an obstacle') }

  perform (actions) {
    const EXECUTE = {
      'N': {
        'r': ([coordinate, direction]) => [coordinate, 'E'],
        'l': ([coordinate, direction]) => [coordinate, 'W'],
        'f': ([coordinate, direction]) => [new Coordinate( coordinate.x, coordinate.y + 1 ), direction],
        'b': ([coordinate, direction]) => [new Coordinate( coordinate.x, coordinate.y - 1 ), direction]
      },
      'E': {
        'r': ([coordinate, direction]) => [coordinate, 'S'],
        'l': ([coordinate, direction]) => [coordinate, 'N'],
        'f': ([coordinate, direction]) => [new Coordinate( coordinate.x + 1, coordinate.y ), direction],
        'b': ([coordinate, direction]) => [new Coordinate( coordinate.x - 1, coordinate.y ), direction]
      },
      'S': {
        'r': ([coordinate, direction]) => [coordinate, 'W'],
        'l': ([coordinate, direction]) => [coordinate, 'E'],
        'f': ([coordinate, direction]) => [new Coordinate( coordinate.x, coordinate.y - 1 ), direction],
        'b': ([coordinate, direction]) => [new Coordinate( coordinate.x, coordinate.y + 1 ), direction]
      },
      'W': {
        'r': ([coordinate, direction]) => [coordinate, 'N'],
        'l': ([coordinate, direction]) => [coordinate, 'S'],
        'f': ([coordinate, direction]) => [new Coordinate( coordinate.x - 1, coordinate.y ), direction],
        'b': ([coordinate, direction]) => [new Coordinate( coordinate.x + 1, coordinate.y ), direction]
      },
    }

    actions.forEach(action => {
      let nextState = EXECUTE[this.direction][action]([this.coordinate, this.direction])

      if (this.obstacles.some(coordinate => coordinate.equals(nextState[0]))) throw Rover.OBSTACLE_FOUND_ERROR

      this.coordinate = nextState[0]
      this.direction = nextState[1]
    })
  }
}

module.exports = Rover
