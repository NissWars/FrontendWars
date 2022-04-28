import { Organizer } from "./organizer";
import { Tag } from "./tag";
import { EventImage } from "./eventImage";
import { registrationStatus } from "./constants";

export class Event {
    public eventID? : string;
    public eventSerialNumber? : string;
    public eventName? : string;
    public location? : string;
    public startTime? : Date;
    public endTime? : Date;
    public pointCompletion? : number;
    public price? : number;
    public maximumPax? : number;
    public organizer? : String;
    
    public organizerObj? : Organizer;
    public eventTags? : Tag[];
    public eventImages? : EventImage[];

    public currentUserRegistrationStatus? : registrationStatus;
    public currentPax?: number;
}