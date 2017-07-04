class Rover {
  constructor (coordinate, direction) {
    this.coordinate = coordinate
    this.direction = direction
  }

  perform (actions) {
    const EXECUTE = {
      'N': {
        'r': () => this.direction = 'E',
        'l': () => this.direction = 'W',
        'f': () => this.coordinate.y++,
        'b': () => this.coordinate.y--
      },
      'E': {
        'r': () => this.direction = 'S',
        'l': () => this.direction = 'N',
        'f': () => this.coordinate.x--,
        'b': () => this.coordinate.x++
      },
      'S': {
        'r': () => this.direction = 'W',
        'l': () => this.direction = 'E',
        'f': () => this.coordinate.y--,
        'b': () => this.coordinate.y++
      },
      'W': {
        'r': () => this.direction = 'S',
        'l': () => this.direction = 'N',
        'f': () => this.coordinate.x--,
        'b': () => this.coordinate.x++
      },
    }

    actions.forEach(action => EXECUTE[this.direction][action]() )
  }
}

module.exports = Rover
