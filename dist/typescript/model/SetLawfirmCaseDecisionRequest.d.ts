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
export interface SetLawfirmCaseDecisionRequest {
    "caseDecisionStatus"?: SetLawfirmCaseDecisionRequest.CaseDecisionStatusEnum;
    "reason"?: string;
}
export declare namespace SetLawfirmCaseDecisionRequest {
    enum CaseDecisionStatusEnum {
        ACCEPTED,
        CREATED,
        DECLINED,
        EXPIRED,
        PENDING,
        REMATCHED,
        REMATCHEDREFERRAL
    }
}