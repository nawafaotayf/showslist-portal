import { Users } from "./Users.model";
import { Shows } from "./shows.model";

export class Ratings{
    constructor(
        private _id: number,
        private _comment: string,
        private _rate: string,
        private _user: Users,
        private _shows: Shows

    ){}
}