export class FeedBack{
    constructor(
        public customerID?: string,
        public eventSerialNumber?: string,
        public rating?: number,
        public comment?: string,
        public file?: FormData,
      ) {
      }

}