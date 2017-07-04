function PerformActions () {
  const INVALID_INPUT = new Error('INVALID INPUT')

  const VALID_INPUTS = [ 'l', 'r', 'f', 'b' ]

  function isValidAction (element, index, array) {
    return VALID_INPUTS.includes(element)
  }

  function run (actions) {
    if(!Array.isArray(actions)) return Promise.reject(INVALID_INPUT)
    if(!actions.every(isValidAction)) return Promise.reject(INVALID_INPUT)

    return Promise.resolve('')
  }

  return { run, INVALID_INPUT }
}

describe('when the rover is going to perform actions', () => {
  let performActions

  beforeEach( () => {
    performActions = PerformActions()
  })

  it('receives a character array of commands', () => {
    let actions = [ 'l', 'r', 'f', 'b' ]

    return performActions.run(actions)
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
