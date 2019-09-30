import "mocha"
import "should"

import { Project } from "../src/models/Project";

const AMOUNT = 1000
const DEADLINE = 100

describe("Project", () => {
    let tested: Project

    beforeEach(() => tested = new Project())

    describe("Test amount", () => {
        it("should set/get amount", () => {
            tested.amount = AMOUNT
            tested.amount.should.be.equal(AMOUNT)
        });
    });

    describe("Test deadline", () => {
        it("should set/get deadline", () => {
            tested.deadline = DEADLINE
            tested.deadline.should.be.equal(DEADLINE)
        });
    });
});