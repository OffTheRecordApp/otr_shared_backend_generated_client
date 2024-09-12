/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
import { TimestampFromJSON, TimestampToJSON, } from './';
export function BookingCancelationFromJSON(json) {
    return BookingCancelationFromJSONTyped(json, false);
}
export function BookingCancelationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingDate': !exists(json, 'bookingDate') ? undefined : json['bookingDate'],
        'bookingDateUtc': !exists(json, 'bookingDateUtc') ? undefined : TimestampFromJSON(json['bookingDateUtc']),
        'cancelationDate': !exists(json, 'cancelationDate') ? undefined : json['cancelationDate'],
        'cancelationDateUtc': !exists(json, 'cancelationDateUtc') ? undefined : TimestampFromJSON(json['cancelationDateUtc']),
        'cancelationReason': !exists(json, 'cancelationReason') ? undefined : json['cancelationReason'],
        'canceledBy': !exists(json, 'canceledBy') ? undefined : json['canceledBy'],
        'canceledByUserId': !exists(json, 'canceledByUserId') ? undefined : json['canceledByUserId'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'clientTotalCost': !exists(json, 'clientTotalCost') ? undefined : json['clientTotalCost'],
        'declineReason': !exists(json, 'declineReason') ? undefined : json['declineReason'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'otrRevenue': !exists(json, 'otrRevenue') ? undefined : json['otrRevenue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}
export function BookingCancelationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingDate': value.bookingDate,
        'bookingDateUtc': TimestampToJSON(value.bookingDateUtc),
        'cancelationDate': value.cancelationDate,
        'cancelationDateUtc': TimestampToJSON(value.cancelationDateUtc),
        'cancelationReason': value.cancelationReason,
        'canceledBy': value.canceledBy,
        'canceledByUserId': value.canceledByUserId,
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'city': value.city,
        'clientTotalCost': value.clientTotalCost,
        'declineReason': value.declineReason,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'otrRevenue': value.otrRevenue,
        'state': value.state,
    };
}
/**
* @export
* @enum {string}
*/
export var BookingCancelationCaseStatusEnum;
(function (BookingCancelationCaseStatusEnum) {
    BookingCancelationCaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    BookingCancelationCaseStatusEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    BookingCancelationCaseStatusEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    BookingCancelationCaseStatusEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    BookingCancelationCaseStatusEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    BookingCancelationCaseStatusEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    BookingCancelationCaseStatusEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    BookingCancelationCaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    BookingCancelationCaseStatusEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    BookingCancelationCaseStatusEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    BookingCancelationCaseStatusEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    BookingCancelationCaseStatusEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    BookingCancelationCaseStatusEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    BookingCancelationCaseStatusEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    BookingCancelationCaseStatusEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    BookingCancelationCaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    BookingCancelationCaseStatusEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    BookingCancelationCaseStatusEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    BookingCancelationCaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    BookingCancelationCaseStatusEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    BookingCancelationCaseStatusEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    BookingCancelationCaseStatusEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    BookingCancelationCaseStatusEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    BookingCancelationCaseStatusEnum["DEFERRED"] = "DEFERRED";
    BookingCancelationCaseStatusEnum["DISMISSED"] = "DISMISSED";
    BookingCancelationCaseStatusEnum["DIVERSION"] = "DIVERSION";
    BookingCancelationCaseStatusEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    BookingCancelationCaseStatusEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    BookingCancelationCaseStatusEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    BookingCancelationCaseStatusEnum["LOST"] = "LOST";
    BookingCancelationCaseStatusEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    BookingCancelationCaseStatusEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    BookingCancelationCaseStatusEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    BookingCancelationCaseStatusEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    BookingCancelationCaseStatusEnum["STALE"] = "STALE";
    BookingCancelationCaseStatusEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    BookingCancelationCaseStatusEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(BookingCancelationCaseStatusEnum || (BookingCancelationCaseStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var BookingCancelationStateEnum;
(function (BookingCancelationStateEnum) {
    BookingCancelationStateEnum["AK"] = "AK";
    BookingCancelationStateEnum["AL"] = "AL";
    BookingCancelationStateEnum["AR"] = "AR";
    BookingCancelationStateEnum["AZ"] = "AZ";
    BookingCancelationStateEnum["CA"] = "CA";
    BookingCancelationStateEnum["CO"] = "CO";
    BookingCancelationStateEnum["CT"] = "CT";
    BookingCancelationStateEnum["DC"] = "DC";
    BookingCancelationStateEnum["DE"] = "DE";
    BookingCancelationStateEnum["FL"] = "FL";
    BookingCancelationStateEnum["GA"] = "GA";
    BookingCancelationStateEnum["HI"] = "HI";
    BookingCancelationStateEnum["IA"] = "IA";
    BookingCancelationStateEnum["ID"] = "ID";
    BookingCancelationStateEnum["IL"] = "IL";
    BookingCancelationStateEnum["IN"] = "IN";
    BookingCancelationStateEnum["KS"] = "KS";
    BookingCancelationStateEnum["KY"] = "KY";
    BookingCancelationStateEnum["LA"] = "LA";
    BookingCancelationStateEnum["MA"] = "MA";
    BookingCancelationStateEnum["MD"] = "MD";
    BookingCancelationStateEnum["ME"] = "ME";
    BookingCancelationStateEnum["MI"] = "MI";
    BookingCancelationStateEnum["MN"] = "MN";
    BookingCancelationStateEnum["MO"] = "MO";
    BookingCancelationStateEnum["MS"] = "MS";
    BookingCancelationStateEnum["MT"] = "MT";
    BookingCancelationStateEnum["NC"] = "NC";
    BookingCancelationStateEnum["ND"] = "ND";
    BookingCancelationStateEnum["NE"] = "NE";
    BookingCancelationStateEnum["NH"] = "NH";
    BookingCancelationStateEnum["NJ"] = "NJ";
    BookingCancelationStateEnum["NM"] = "NM";
    BookingCancelationStateEnum["NV"] = "NV";
    BookingCancelationStateEnum["NY"] = "NY";
    BookingCancelationStateEnum["OH"] = "OH";
    BookingCancelationStateEnum["OK"] = "OK";
    BookingCancelationStateEnum["OR"] = "OR";
    BookingCancelationStateEnum["PA"] = "PA";
    BookingCancelationStateEnum["RI"] = "RI";
    BookingCancelationStateEnum["SC"] = "SC";
    BookingCancelationStateEnum["SD"] = "SD";
    BookingCancelationStateEnum["TN"] = "TN";
    BookingCancelationStateEnum["TX"] = "TX";
    BookingCancelationStateEnum["UT"] = "UT";
    BookingCancelationStateEnum["VA"] = "VA";
    BookingCancelationStateEnum["VT"] = "VT";
    BookingCancelationStateEnum["WA"] = "WA";
    BookingCancelationStateEnum["WI"] = "WI";
    BookingCancelationStateEnum["WV"] = "WV";
    BookingCancelationStateEnum["WY"] = "WY";
})(BookingCancelationStateEnum || (BookingCancelationStateEnum = {}));