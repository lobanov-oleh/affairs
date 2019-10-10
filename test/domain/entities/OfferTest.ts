import 'mocha'
import 'should'

import Contribution from '@domain/entities/Contribution'
import User from '@domain/entities/User'
import Offer from '@domain/entities/Offer'

const CONTRIBUTION: Contribution = new Contribution()
const USER: User = new User()
const PRICE = 1000

describe('Offer', () => {
  let tested: Offer

  beforeEach(() => { tested = new Offer() })

  describe('Test Contribution', () => {
    it('should set/get Contribution', () => {
      tested.Contribution = CONTRIBUTION
      tested.Contribution.should.be.equal(CONTRIBUTION)
    })
  })

  describe('Test User', () => {
    it('should set/get User', () => {
      tested.User = USER
      tested.User.should.be.equal(USER)
    })
  })

  describe('Test price', () => {
    it('should set/get price', () => {
      tested.price = PRICE
      tested.price.should.be.equal(PRICE)
    })
  })
})
