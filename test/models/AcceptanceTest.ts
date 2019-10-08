import "mocha"
import "should"

import Acceptance from "@models/Acceptance"
import Obligation from "@models/Obligation"

const OBLIGATION: Obligation = new Obligation()
const BUYER_REVIEW: string = 'Buyer review for the worker'
const WORKER_REVIEW: string = 'Worker review for the buyer'

describe("Acceptance", () => {
    let tested: Acceptance 

    beforeEach(() => tested = new Acceptance())

    describe("Test Obligation", () => {
        it("should set/get Obligation", () => {
            tested.Obligation = OBLIGATION
            tested.Obligation.should.be.equal(OBLIGATION)
        })
    })

    describe("Test reviews", () => {
        it("should set/get buyer review", () => {
            tested.buyerReview = BUYER_REVIEW
            tested.buyerReview.should.be.equal(BUYER_REVIEW)
        })

        it("should set/get worker review", () => {
            tested.workerReview = WORKER_REVIEW 
            tested.workerReview.should.be.equal(WORKER_REVIEW)
        })
    })
})