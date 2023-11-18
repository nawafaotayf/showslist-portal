import { Movies } from "./Movies.model";
import { Series } from "./Series.model";
import { Users } from "./Users.model";
import { Shows } from "./shows.model";

export class Favorite{
    constructor(
        private _id: number,
        private _rating: string,
        private _shows: Shows,
        private _users: Users,
        
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
    public get rating(): string {
        return this._rating;
    }
    public set rating(value: string) {
        this._rating = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


}