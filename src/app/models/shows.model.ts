import { Users } from "./Users.model";

export class Shows{

    constructor(
        private _id: number,
        private _name: string,
        private _story: string,
        private _duration: number,
        private _studios: string,
        private _seasons: number,
        private _image: string,
        private _user: Users
    ){}
    
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get user(): Users {
        return this._user;
    }
    public set user(value: Users) {
        this._user = value;
    }
    public get seasons(): number {
        return this._seasons;
    }
    public set seasons(value: number) {
        this._seasons = value;
    }
    public get studios(): string {
        return this._studios;
    }
    public set studios(value: string) {
        this._studios = value;
    }
    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public get story(): string {
        return this._story;
    }
    public set story(value: string) {
        this._story = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}