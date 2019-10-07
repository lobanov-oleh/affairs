export class User {
    private _facebookUserID: string
    private _role: string

    get facebookUserID(): string {
        return this._facebookUserID
    }

    set facebookUserID(facebookUserID: string) {
        this._facebookUserID = facebookUserID
    }

    get role(): string {
        return this._role
    }

    set role(role: string) {
        this._role = role
    }
}