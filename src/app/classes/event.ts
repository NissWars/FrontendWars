import { Organizer } from "./organizer";
import { Tag } from "./tag";
import { EventImage } from "./eventImage";

export class Event {
    public eventID : string;
    public eventSerialNumber : string;
    public eventName : string;
    public location : string;
    public startTime : Date;
    public endTime : Date;
    public pointCompletion : number;
    public price : number;
    public maximumPax : number;

    public organizer : Organizer;
    public tags : Tag[];
    public eventImages : EventImage[];
}