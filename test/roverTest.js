const Rover = require('../src/domain/Rover.js')
const Coordinate = require('../src/domain/Coordinate.js')

describe('the rover', () => {
  let coordinate
  let direction
  let rover

  beforeEach( () => {
    coordinate = new Coordinate(0, 0)
    direction = 'N'
    rover = new Rover(coordinate, direction)
  })

  describe('turns', () => {
    it('left', () => {
      rover.perform(['l'])

      expect(rover.direction).to.equal('W')
    })

    it('right', () => {
      rover.perform(['r'])

      expect(rover.direction).to.equal('E')
    })
  })

  describe('moves', () => {
    it('forwards', () => {
      rover.perform(['f'])

      expect(rover.coordinate.y).to.equal(1)
    })

    it('backwards', () => {
      rover.perform(['b'])

      expect(rover.coordinate.y).to.equal(-1)
    })
  })

  it('Stops if it finds an obstacle', () => {
    rover = new Rover(coordinate, direction, [new Coordinate(0, 1)])

    expect(rover.perform.bind(rover, ['f'])).to.throw(Error)
  })
})
