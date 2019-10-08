import User from "@models/User"

class Project {
    private _amount: number
    private _deadline: number | null
    private _User: User
    private _description: string

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

    get User(): User {
        return this._User
    }

    set User(User: User) {
        this._User = User
    }

    get description(): string {
        return this._description
    }

    set description(description: string) {
        this._description = description
    }
}

export default Project