import Obligation from "@models/Obligation";

class Rejection {
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

export default Rejection