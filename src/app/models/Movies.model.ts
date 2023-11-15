import { Users } from "./Users.model";
import { Shows } from "./shows.model"

export class Movies extends Shows{
    constructor(
        _id: number,
        _name: string,
        _story: string,
        _duration: number,
        _studios: string,
        _seasons: number,
        _image: string,
        _user: Users,
        private _aired: Date,
    ){
        super(_id, _name, _story, _duration, _studios, _seasons, _image, _user);
    }

    public get aired(): Date {
        return this._aired;
    }
    public set aired(value: Date) {
        this._aired = value;
    }
   
}