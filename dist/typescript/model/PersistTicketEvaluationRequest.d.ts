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
import * as models from './models';
export interface PersistTicketEvaluationRequest {
    "citationId"?: number;
    "citationState"?: string;
    "emailAddress"?: string;
    "isOptIntoAutomatedNotifications"?: boolean;
    "phoneNumber"?: string;
    "source"?: PersistTicketEvaluationRequest.SourceEnum;
    "submissionDateUtc"?: models.TimestampReq;
    "visitorName"?: string;
}
export declare namespace PersistTicketEvaluationRequest {
    enum SourceEnum {
        OTREXITPOPUP,
        QUARANTINELANDINGPAGE,
        TICKETREVIEWPAGE
    }
}
