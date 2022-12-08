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
export interface CaseActionRequestModel {
    "actionDate"?: string;
    "actionNote"?: string;
    "actionType"?: CaseActionRequestModel.ActionTypeEnum;
}
export declare namespace CaseActionRequestModel {
    enum ActionTypeEnum {
        CASEACCEPT,
        CASEDECLINE,
        CITATIONDATAEXTRACTED,
        COURTDATEREMOVED,
        COURTDATESCHEDULED,
        DISCOVERYRECEIVED,
        DISCOVERYREQUESTED,
        FAILEDPAYMENTATTEMPT,
        NOTICEOFAPPEARANCEFILED,
        OTHER,
        REVIEWEDBYLAWFIRM,
        SOCIALMEDIAASK,
        TICKETMAILEDTOCOURT
    }
}
