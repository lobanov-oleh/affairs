import Offer from '@domain/entities/Offer'
import User from '@domain/entities/User'

class Payment {
  private _Offer: Offer
  private _User: User

  get Offer (): Offer {
    return this._Offer
  }

  set Offer (Offer: Offer) {
    this._Offer = Offer
  }

  get User (): User {
    return this._User
  }

  set User (User: User) {
    this._User = User
  }
}

export default Payment
