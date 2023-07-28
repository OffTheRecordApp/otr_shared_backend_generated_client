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
exports.MarkCaseAsResolvedRequest = void 0;
var MarkCaseAsResolvedRequest;
(function (MarkCaseAsResolvedRequest) {
    var ResolutionStatusEnum;
    (function (ResolutionStatusEnum) {
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        ResolutionStatusEnum[ResolutionStatusEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        ResolutionStatusEnum[ResolutionStatusEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        ResolutionStatusEnum[ResolutionStatusEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        ResolutionStatusEnum[ResolutionStatusEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        ResolutionStatusEnum[ResolutionStatusEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        ResolutionStatusEnum[ResolutionStatusEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        ResolutionStatusEnum[ResolutionStatusEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        ResolutionStatusEnum[ResolutionStatusEnum["LOST"] = 'LOST'] = "LOST";
        ResolutionStatusEnum[ResolutionStatusEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        ResolutionStatusEnum[ResolutionStatusEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        ResolutionStatusEnum[ResolutionStatusEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        ResolutionStatusEnum[ResolutionStatusEnum["STALE"] = 'STALE'] = "STALE";
        ResolutionStatusEnum[ResolutionStatusEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        ResolutionStatusEnum[ResolutionStatusEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(ResolutionStatusEnum = MarkCaseAsResolvedRequest.ResolutionStatusEnum || (MarkCaseAsResolvedRequest.ResolutionStatusEnum = {}));
})(MarkCaseAsResolvedRequest = exports.MarkCaseAsResolvedRequest || (exports.MarkCaseAsResolvedRequest = {}));
