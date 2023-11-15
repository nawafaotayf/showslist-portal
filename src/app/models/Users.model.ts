export class Users{
    constructor(
        private _id: number,
        private _username: string,
        private _password: number,
        private _email: number,
        private _dob: Date
        )
        {}
    public get dob(): Date {
        return this._dob;
    }
    public set dob(value: Date) {
        this._dob = value;
    }
    public get email(): number {
        return this._email;
    }
    public set email(value: number) {
        this._email = value;
    }
    public get password(): number {
        return this._password;
    }
    public set password(value: number) {
        this._password = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}