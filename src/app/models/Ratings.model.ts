import { Users } from "./Users.model";
import { Shows } from "./shows.model";

export class Ratings{
    constructor(
        private _id: number,
        private _comment: string,
        private _rate: string,
        private _users: Users,
        private _shows: Shows
        ){}
        
        public get users(): Users {
            return this._users;
        }
        public set users(value: Users) {
            this._users = value;
        }
    public get shows(): Shows {
        return this._shows;
    }
    public set shows(value: Shows) {
        this._shows = value;
    }
    public get rate(): string {
        return this._rate;
    }
    public set rate(value: string) {
        this._rate = value;
    }
    public get comment(): string {
        return this._comment;
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}