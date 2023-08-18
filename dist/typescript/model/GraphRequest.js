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
exports.GraphRequest = void 0;
var GraphRequest;
(function (GraphRequest) {
    var CaseStatuesEnum;
    (function (CaseStatuesEnum) {
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        CaseStatuesEnum[CaseStatuesEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        CaseStatuesEnum[CaseStatuesEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        CaseStatuesEnum[CaseStatuesEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        CaseStatuesEnum[CaseStatuesEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        CaseStatuesEnum[CaseStatuesEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        CaseStatuesEnum[CaseStatuesEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        CaseStatuesEnum[CaseStatuesEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        CaseStatuesEnum[CaseStatuesEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        CaseStatuesEnum[CaseStatuesEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        CaseStatuesEnum[CaseStatuesEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        CaseStatuesEnum[CaseStatuesEnum["LOST"] = 'LOST'] = "LOST";
        CaseStatuesEnum[CaseStatuesEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        CaseStatuesEnum[CaseStatuesEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        CaseStatuesEnum[CaseStatuesEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        CaseStatuesEnum[CaseStatuesEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        CaseStatuesEnum[CaseStatuesEnum["STALE"] = 'STALE'] = "STALE";
        CaseStatuesEnum[CaseStatuesEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        CaseStatuesEnum[CaseStatuesEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(CaseStatuesEnum = GraphRequest.CaseStatuesEnum || (GraphRequest.CaseStatuesEnum = {}));
})(GraphRequest = exports.GraphRequest || (exports.GraphRequest = {}));