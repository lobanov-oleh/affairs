import { Contribution } from "./Contribution"
import { User } from "./User"

export class Offer {
    private _Contribution: Contribution
    private _User: User
    private _amount: number

    get Contribution(): Contribution {
        return this._Contribution
    }

    set Contribution(Contribution: Contribution) {
        this._Contribution = Contribution
    }

    get User(): User {
        return this._User
    }

    set User(User: User) {
        this._User = User
    }

    get amount(): number {
        return this._amount
    }

    set amount(amount: number) {
        this._amount = amount
    }
}