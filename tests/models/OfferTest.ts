import "mocha"
import "should"

import { Contribution } from "../../src/models/Contribution";
import { User } from "../../src/models/User";
import { Offer } from "../../src/models/Offer";

const CONTRIBUTION: Contribution = new Contribution()
const USER: User = new User()
const AMOUNT: number = 1000

describe("Offer", () => {
    let tested: Offer

    beforeEach(() => tested = new Offer())

    describe("Test Contribution", () => {
        it("should set/get Contribution", () => {
            tested.Contribution = CONTRIBUTION
            tested.Contribution.should.be.equal(CONTRIBUTION)
        });
    });

    describe("Test User", () => {
        it("should set/get User", () => {
            tested.User = USER
            tested.User.should.be.equal(USER)
        });
    });

    describe("Test amount", () => {
        it("should set/get amount", () => {
            tested.amount = AMOUNT
            tested.amount.should.be.equal(AMOUNT)
        });
    });
});