import { Offer } from "./Offer";
import { User } from "./User";

export class Payment {
    private _Offer: Offer
    private _User: User

    get Offer(): Offer {
        return this._Offer
    }

    set Offer(Offer: Offer) {
        this._Offer = Offer
    }

    get User(): User {
        return this._User
    }

    set User(User: User) {
        this._User = User
    }
}