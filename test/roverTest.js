const Rover = require('../src/domain/Rover.js')

describe('the rover', () => {
  let coordinate
  let direction
  let rover

  beforeEach( () => {
    coordinate = { x: 0, y: 0 }
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
})
