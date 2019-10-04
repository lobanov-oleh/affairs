import { Project } from "./Project";
import { User } from "./User";

export class Contribution {
    private _Project: Project
    private _User: User
    private _description: string

    get Project(): Project {
        return this._Project
    }

    set Project(Project: Project) {
        this._Project = Project
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