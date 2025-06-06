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
export var GetLawfirmSummaryCaseRequest;
(function (GetLawfirmSummaryCaseRequest) {
    let CaseStatusCategoriesEnum;
    (function (CaseStatusCategoriesEnum) {
        CaseStatusCategoriesEnum[CaseStatusCategoriesEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        CaseStatusCategoriesEnum[CaseStatusCategoriesEnum["CANCELLED"] = 'CANCELLED'] = "CANCELLED";
        CaseStatusCategoriesEnum[CaseStatusCategoriesEnum["RESOLVED"] = 'RESOLVED'] = "RESOLVED";
        CaseStatusCategoriesEnum[CaseStatusCategoriesEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(CaseStatusCategoriesEnum = GetLawfirmSummaryCaseRequest.CaseStatusCategoriesEnum || (GetLawfirmSummaryCaseRequest.CaseStatusCategoriesEnum = {}));
    let CaseStatusesEnum;
    (function (CaseStatusesEnum) {
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        CaseStatusesEnum[CaseStatusesEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        CaseStatusesEnum[CaseStatusesEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        CaseStatusesEnum[CaseStatusesEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        CaseStatusesEnum[CaseStatusesEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        CaseStatusesEnum[CaseStatusesEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        CaseStatusesEnum[CaseStatusesEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        CaseStatusesEnum[CaseStatusesEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        CaseStatusesEnum[CaseStatusesEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        CaseStatusesEnum[CaseStatusesEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        CaseStatusesEnum[CaseStatusesEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        CaseStatusesEnum[CaseStatusesEnum["LOST"] = 'LOST'] = "LOST";
        CaseStatusesEnum[CaseStatusesEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        CaseStatusesEnum[CaseStatusesEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        CaseStatusesEnum[CaseStatusesEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        CaseStatusesEnum[CaseStatusesEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        CaseStatusesEnum[CaseStatusesEnum["STALE"] = 'STALE'] = "STALE";
        CaseStatusesEnum[CaseStatusesEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        CaseStatusesEnum[CaseStatusesEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(CaseStatusesEnum = GetLawfirmSummaryCaseRequest.CaseStatusesEnum || (GetLawfirmSummaryCaseRequest.CaseStatusesEnum = {}));
    let ExcludedCaseStatusesEnum;
    (function (ExcludedCaseStatusesEnum) {
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDDUPLICATE"] = 'CANCELLED_DUPLICATE'] = "CANCELLEDDUPLICATE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDNONPAYMENT"] = 'CANCELLED_NON_PAYMENT'] = "CANCELLEDNONPAYMENT";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTFIREDLAWFIRM"] = 'CLIENT_FIRED_LAWFIRM'] = "CLIENTFIREDLAWFIRM";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTFORCEDLOSS"] = 'CLIENT_FORCED_LOSS'] = "CLIENTFORCEDLOSS";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTPAIDFINE"] = 'CLIENT_PAID_FINE'] = "CLIENTPAIDFINE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["CLIENTUNRESPONSIVE"] = 'CLIENT_UNRESPONSIVE'] = "CLIENTUNRESPONSIVE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["FEESDISPUTED"] = 'FEES_DISPUTED'] = "FEESDISPUTED";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["FINEREDUCTIONONLY"] = 'FINE_REDUCTION_ONLY'] = "FINEREDUCTIONONLY";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["LAWFIRMWITHDRAWN"] = 'LAWFIRM_WITHDRAWN'] = "LAWFIRMWITHDRAWN";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["LOST"] = 'LOST'] = "LOST";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["RESOLVEDNONPAYMENT"] = 'RESOLVED_NON_PAYMENT'] = "RESOLVEDNONPAYMENT";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["STALE"] = 'STALE'] = "STALE";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        ExcludedCaseStatusesEnum[ExcludedCaseStatusesEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
    })(ExcludedCaseStatusesEnum = GetLawfirmSummaryCaseRequest.ExcludedCaseStatusesEnum || (GetLawfirmSummaryCaseRequest.ExcludedCaseStatusesEnum = {}));
})(GetLawfirmSummaryCaseRequest || (GetLawfirmSummaryCaseRequest = {}));
