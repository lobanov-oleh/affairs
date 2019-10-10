import 'mocha'
import 'should'

import User from '@domain/entities/User'
import Project from '@domain/entities/Project'

const USER: User = new User()
const DESCRIPTION = 'Project description'
const AMOUNT = 1000
const DEADLINE = 100

describe('Project', () => {
  let tested: Project

  beforeEach(() => { tested = new Project() })

  describe('Test User', () => {
    it('should set/get User', () => {
      tested.User = USER
      tested.User.should.be.equal(USER)
    })
  })

  describe('Test description', () => {
    it('should set/get description', () => {
      tested.description = DESCRIPTION
      tested.description.should.be.equal(DESCRIPTION)
    })
  })

  describe('Test amount', () => {
    it('should set/get amount', () => {
      tested.amount = AMOUNT
      tested.amount.should.be.equal(AMOUNT)
    })
  })

  describe('Test deadline', () => {
    it('should set/get deadline', () => {
      tested.deadline = DEADLINE
      tested.deadline.should.be.equal(DEADLINE)
    })
  })
})
