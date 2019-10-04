export class User {
    private _facebookUserID: string
    get facebookUserID(): string {
        return this._facebookUserID
    }
    set facebookUserID(facebookUserID: string) {
        this._facebookUserID = facebookUserID
    }
}