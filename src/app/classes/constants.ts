export const backendBaseUrl = "http://localhost:8080/";
export const backendEventUrl = "event/";
export const backendPaymentUrl = "payment/"

export const backendRewardShopMicroServiceUrl = "http://localhost:8180/"

export const DATETIME_FORMAT = "YYYY/MM/DD HH:mm:ss.SSS";
export const DATETIME_FORMAT_TO_BACKEND = "yyyy/MM/dd HH:mm:ss.SSS";

export enum registrationStatus {
    NEW = "new",
    REGISTERED = "registered",
    PAID = "paid",
    EVENT_FINISHED = "eventFinished",
    FEEDBACK_FINISHED = "feedbackComplete",
}