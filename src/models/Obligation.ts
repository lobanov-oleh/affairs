import { Payment } from "./Payment";

export class Obligation {
    private _Payment: Payment
    private _code: string

    get Payment(): Payment {
        return this._Payment
    }

    set Payment(Payment: Payment) {
        this._Payment = Payment
    }

    get code(): string {
        return this._code
    }

    set code(code: string) {
        this._code = code
    }
}