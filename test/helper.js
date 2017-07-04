var chai = require('chai')
var sinonChai = require('sinon-chai')
var chaiAsPromised = require('chai-as-promised')

global.sinon = require('sinon')
chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.config.includeStack = true

global.expect = chai.expect
