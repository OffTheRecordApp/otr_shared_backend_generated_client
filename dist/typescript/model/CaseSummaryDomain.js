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
export var CaseSummaryDomain;
(function (CaseSummaryDomain) {
    let CaseDecisionStatusEnum;
    (function (CaseDecisionStatusEnum) {
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["ACCEPTED"] = 'ACCEPTED'] = "ACCEPTED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["CREATED"] = 'CREATED'] = "CREATED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["DECLINED"] = 'DECLINED'] = "DECLINED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["EXPIRED"] = 'EXPIRED'] = "EXPIRED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHED"] = 'REMATCHED'] = "REMATCHED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHEDREFERRAL"] = 'REMATCHED_REFERRAL'] = "REMATCHEDREFERRAL";
    })(CaseDecisionStatusEnum = CaseSummaryDomain.CaseDecisionStatusEnum || (CaseSummaryDomain.CaseDecisionStatusEnum = {}));
})(CaseSummaryDomain || (CaseSummaryDomain = {}));
