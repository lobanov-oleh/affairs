import "mocha"
import "should"

import { Rejection } from "@models/Rejection"
import { Obligation } from "@models/Obligation"

const OBLIGATION: Obligation = new Obligation()

describe("Rejection", () => {
    let tested: Rejection 

    beforeEach(() => tested = new Rejection())

    describe("Test Obligation", () => {
        it("should set/get Obligation", () => {
            tested.Obligation = OBLIGATION
            tested.Obligation.should.be.equal(OBLIGATION)
        })
    })
})