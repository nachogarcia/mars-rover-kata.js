const PerformActions = require('../src/actions/performActions.js')

describe('when the rover is going to perform actions', () => {
  let rover
  let performActions

  beforeEach( () => {
    rover = { perform : () => Promise.resolve() }
    sinon.spy(rover, 'perform')

    performActions = PerformActions(rover)
  })

  it('the rover executes the actions', () => {
    let actions = [ 'l', 'r', 'f', 'b' ]

    let result = performActions.run(actions)

    expect(rover.perform).to.have.been.calledWith(actions)
  })

  it('returns an error if it does not receive an array', () => {
    let actions = {}

    let result = performActions.run(actions)

    expect(result).to.eventually.be.rejectedWith(performActions.INVALID_INPUT)
  })

  it('returns an error if it does not receive valid commands', () => {
    let actions = [ 'a', 'b' ]

    let result = performActions.run(actions)

    expect(result).to.eventually.be.rejectedWith(performActions.INVALID_INPUT)
  })
})
