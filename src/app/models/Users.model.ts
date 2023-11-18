export class Users{
    constructor(
        private _id: number,
        private _username: string,
        private _password: string,
        private _email: string,
        private _dob: Date
        )
        {}
    public get dob(): Date {
        return this._dob;
    }
    public set dob(value: Date) {
        this._dob = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
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
    public toJSON(): object{
        return{
            id: this.id,
            username: this.username,
            password: this.password,
            email: this.email,
            dob: this.dob
        }
    }
}