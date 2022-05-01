export const backendBaseUrl = "http://localhost:8080/";
export const backendEventUrl = "event/";
export const backendPaymentUrl = "payment/"

export const DATETIME_FORMAT = "YYYY/MM/DD HH:mm:ss.SSS";

export enum registrationStatus {
    NEW = "new",
    REGISTERED = "registered",
    PAID = "paid",
    EVENT_FINISHED = "eventFinished",
    FEEDBACK_FINISHED = "feedbackComplete",
}