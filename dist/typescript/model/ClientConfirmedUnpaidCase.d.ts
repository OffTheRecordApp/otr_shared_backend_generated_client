/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export interface ClientConfirmedUnpaidCase {
    "amountDisputed"?: number;
    "amountDueLater"?: number;
    "amountOverdue"?: number;
    "amountPaid"?: number;
    "bookingConfirmedDateUtc"?: string;
    "caseId"?: string;
    "caseSubtotal"?: number;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "userId"?: number;
    "userName"?: string;
}
