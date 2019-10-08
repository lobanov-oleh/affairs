import Obligation from "@domain/entities/Obligation";

class Acceptance {
    private _Obligation: Obligation
    private _buyerReview: string
    private _workerReview: string

    get Obligation(): Obligation {
        return this._Obligation
    }

    set Obligation(Obligation: Obligation) {
        this._Obligation = Obligation
    }

    get buyerReview() {
        return this._buyerReview
    }

    set buyerReview(buyerReview: string) {
        this._buyerReview = buyerReview
    }

    get workerReview(): string {
        return this._workerReview
    }

    set workerReview(workerReview: string) {
        this._workerReview = workerReview
    }
}

export default Acceptance