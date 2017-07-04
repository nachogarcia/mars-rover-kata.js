function PerformActions (rover) {
  const INVALID_INPUT = new Error('INVALID INPUT')

  const VALID_INPUTS = [ 'l', 'r', 'f', 'b' ]

  function isValidAction (element, index, array) {
    return VALID_INPUTS.includes(element)
  }

  function run (actions) {
    if(!Array.isArray(actions)) return Promise.reject(INVALID_INPUT)
    if(!actions.every(isValidAction)) return Promise.reject(INVALID_INPUT)

    return rover.perform(actions)
  }

  return { run, INVALID_INPUT }
}

module.exports = PerformActions
