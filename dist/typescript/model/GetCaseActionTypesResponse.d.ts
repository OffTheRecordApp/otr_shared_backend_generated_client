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
export interface GetCaseActionTypesResponse {
    "caseActionTypes"?: Array<GetCaseActionTypesResponse.CaseActionTypesEnum>;
}
export declare namespace GetCaseActionTypesResponse {
    enum CaseActionTypesEnum {
        CASEACCEPT,
        CASECOUNTERACCEPTED,
        CASECOUNTERDECLINED,
        CASECOUNTERINITIATED,
        CASECOUNTERWITHDRAWN,
        CASEDECLINE,
        CITATIONDATAEXTRACTED,
        COURTDATEREMOVED,
        COURTDATESCHEDULED,
        DISCOVERYRECEIVED,
        DISCOVERYREQUESTED,
        DISPUTEFILED,
        DRIVERLICENSEREQUESTED,
        FAILEDPAYMENTATTEMPT,
        NOTICEOFAPPEARANCEFILED,
        OTHER,
        OVERDUEBALANCEPAID,
        REVIEWEDBYLAWFIRM,
        SOCIALMEDIAASK,
        TICKETMAILEDTOCOURT
    }
}
