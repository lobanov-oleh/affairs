import 'mocha'
import 'should'

import Payment from '@domain/entities/Payment'
import Offer from '@domain/entities/Offer'
import User from '@domain/entities/User'

const OFFER: Offer = new Offer()
const USER: User = new User()

describe('Payment', () => {
  let tested: Payment

  beforeEach(() => { tested = new Payment() })

  describe('Test Offer', () => {
    it('should set/get Offer', () => {
      tested.Offer = OFFER
      tested.Offer.should.be.equal(OFFER)
    })
  })

  describe('Test User', () => {
    it('should set/get User', () => {
      tested.User = USER
      tested.User.should.be.equal(USER)
    })
  })
})
