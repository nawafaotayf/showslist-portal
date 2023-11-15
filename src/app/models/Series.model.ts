import { Users } from "./Users.model";
import { Shows } from "./shows.model";

export class Series extends Shows{
    constructor(
         _id: number,
         _name: string,
         _story: string,
         _duration: number,
         _studios: string,
         _seasons: number,
         _image: string,
         _user: Users,
        private _episodes: number,
        private _start: Date,
        private _end: Date,
    ){
        super(_id, _name, _story, _duration, _studios, _seasons, _image, _user);
    }

    public get end(): Date {
        return this._end;
    }
    public set end(value: Date) {
        this._end = value;
    }
    public get start(): Date {
        return this._start;
    }
    public set start(value: Date) {
        this._start = value;
    }
    public get episodes(): number {
        return this._episodes;
    }
    public set episodes(value: number) {
        this._episodes = value;
    }
    
}