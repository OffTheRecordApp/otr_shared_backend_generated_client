"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLawfirmCaseDecisionRequest = void 0;
var SetLawfirmCaseDecisionRequest;
(function (SetLawfirmCaseDecisionRequest) {
    var CaseDecisionStatusEnum;
    (function (CaseDecisionStatusEnum) {
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["ACCEPTED"] = 'ACCEPTED'] = "ACCEPTED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["CREATED"] = 'CREATED'] = "CREATED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["DECLINED"] = 'DECLINED'] = "DECLINED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["EXPIRED"] = 'EXPIRED'] = "EXPIRED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHED"] = 'REMATCHED'] = "REMATCHED";
        CaseDecisionStatusEnum[CaseDecisionStatusEnum["REMATCHEDREFERRAL"] = 'REMATCHED_REFERRAL'] = "REMATCHEDREFERRAL";
    })(CaseDecisionStatusEnum = SetLawfirmCaseDecisionRequest.CaseDecisionStatusEnum || (SetLawfirmCaseDecisionRequest.CaseDecisionStatusEnum = {}));
})(SetLawfirmCaseDecisionRequest = exports.SetLawfirmCaseDecisionRequest || (exports.SetLawfirmCaseDecisionRequest = {}));
