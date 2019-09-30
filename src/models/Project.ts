export class Project {
    private _amount: number
    private _deadline: number | null

    get amount(): number {
        return this._amount
    }

    set amount(amount: number) {
        this._amount = amount
    }

    get deadline(): number | null {
        return this._deadline
    }

    set deadline(deadline: number | null) {
        this._deadline = deadline
    }
}