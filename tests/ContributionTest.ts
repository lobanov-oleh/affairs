import "mocha"
import "should"

import { Project } from "../src/models/Project";
import { User } from "../src/models/User";
import { Contribution } from "../src/models/Contribution";

const PROJECT: Project = new Project()
const USER: User = new User()
const DESCRIPTION: string = 'Contribution description'

describe("Contribution", () => {
    let tested: Contribution

    beforeEach(() => tested = new Contribution())

    describe("Test Project", () => {
        it("should set/get Project", () => {
            tested.Project = PROJECT
            tested.Project.should.be.equal(PROJECT)
        });
    });

    describe("Test User", () => {
        it("should set/get User", () => {
            tested.User = USER
            tested.User.should.be.equal(USER)
        });
    });

    describe("Test description", () => {
        it("should set/get description", () => {
            tested.description = DESCRIPTION
            tested.description.should.be.equal(DESCRIPTION)
        });
    });
});