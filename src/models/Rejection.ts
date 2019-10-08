import { Obligation } from "./Obligation";

export class Rejection {
    private _Obligation: Obligation

    get Obligation(): Obligation
    {
        return this._Obligation
    }

    set Obligation(Obligation: Obligation)
    {
        this._Obligation = Obligation
    }
}