import 'mocha'
import 'should'

import Rejection from '@domain/entities/Rejection'
import Obligation from '@domain/entities/Obligation'

const OBLIGATION: Obligation = new Obligation()

describe('Rejection', () => {
  let tested: Rejection

  beforeEach(() => { tested = new Rejection() })

  describe('Test Obligation', () => {
    it('should set/get Obligation', () => {
      tested.Obligation = OBLIGATION
      tested.Obligation.should.be.equal(OBLIGATION)
    })
  })
})
