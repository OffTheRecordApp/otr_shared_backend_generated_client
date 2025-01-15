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
export function ListCaseBookingsRequestFromJSON(json) {
    return ListCaseBookingsRequestFromJSONTyped(json, false);
}
export function ListCaseBookingsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseStatusFilter': !exists(json, 'caseStatusFilter') ? undefined : json['caseStatusFilter'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'genderFilterList': !exists(json, 'genderFilterList') ? undefined : json['genderFilterList'],
        'hasSubscriptionPlanFilter': !exists(json, 'hasSubscriptionPlanFilter') ? undefined : json['hasSubscriptionPlanFilter'],
        'includeDataRecords': !exists(json, 'includeDataRecords') ? undefined : json['includeDataRecords'],
        'lawfirmStringFilter': !exists(json, 'lawfirmStringFilter') ? undefined : json['lawfirmStringFilter'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'page': !exists(json, 'page') ? undefined : json['page'],
        'raceFilterList': !exists(json, 'raceFilterList') ? undefined : json['raceFilterList'],
        'sortMap': !exists(json, 'sortMap') ? undefined : json['sortMap'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'stateFilterList': !exists(json, 'stateFilterList') ? undefined : json['stateFilterList'],
        'statusCategoryFilter': !exists(json, 'statusCategoryFilter') ? undefined : json['statusCategoryFilter'],
        'timeZoneId': !exists(json, 'timeZoneId') ? undefined : json['timeZoneId'],
    };
}
export function ListCaseBookingsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseStatusFilter': value.caseStatusFilter,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'genderFilterList': value.genderFilterList,
        'hasSubscriptionPlanFilter': value.hasSubscriptionPlanFilter,
        'includeDataRecords': value.includeDataRecords,
        'lawfirmStringFilter': value.lawfirmStringFilter,
        'length': value.length,
        'page': value.page,
        'raceFilterList': value.raceFilterList,
        'sortMap': value.sortMap,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'stateFilterList': value.stateFilterList,
        'statusCategoryFilter': value.statusCategoryFilter,
        'timeZoneId': value.timeZoneId,
    };
}
/**
* @export
* @enum {string}
*/
export var ListCaseBookingsRequestCaseStatusFilterEnum;
(function (ListCaseBookingsRequestCaseStatusFilterEnum) {
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    ListCaseBookingsRequestCaseStatusFilterEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    ListCaseBookingsRequestCaseStatusFilterEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    ListCaseBookingsRequestCaseStatusFilterEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    ListCaseBookingsRequestCaseStatusFilterEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    ListCaseBookingsRequestCaseStatusFilterEnum["DEFERRED"] = "DEFERRED";
    ListCaseBookingsRequestCaseStatusFilterEnum["DISMISSED"] = "DISMISSED";
    ListCaseBookingsRequestCaseStatusFilterEnum["DIVERSION"] = "DIVERSION";
    ListCaseBookingsRequestCaseStatusFilterEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    ListCaseBookingsRequestCaseStatusFilterEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    ListCaseBookingsRequestCaseStatusFilterEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    ListCaseBookingsRequestCaseStatusFilterEnum["LOST"] = "LOST";
    ListCaseBookingsRequestCaseStatusFilterEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    ListCaseBookingsRequestCaseStatusFilterEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    ListCaseBookingsRequestCaseStatusFilterEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    ListCaseBookingsRequestCaseStatusFilterEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    ListCaseBookingsRequestCaseStatusFilterEnum["STALE"] = "STALE";
    ListCaseBookingsRequestCaseStatusFilterEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    ListCaseBookingsRequestCaseStatusFilterEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(ListCaseBookingsRequestCaseStatusFilterEnum || (ListCaseBookingsRequestCaseStatusFilterEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCaseBookingsRequestGenderFilterListEnum;
(function (ListCaseBookingsRequestGenderFilterListEnum) {
    ListCaseBookingsRequestGenderFilterListEnum["FEMALE"] = "FEMALE";
    ListCaseBookingsRequestGenderFilterListEnum["MALE"] = "MALE";
    ListCaseBookingsRequestGenderFilterListEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    ListCaseBookingsRequestGenderFilterListEnum["NOTLISTED"] = "NOT_LISTED";
    ListCaseBookingsRequestGenderFilterListEnum["UNVERIFIED"] = "UNVERIFIED";
    ListCaseBookingsRequestGenderFilterListEnum["X"] = "X";
})(ListCaseBookingsRequestGenderFilterListEnum || (ListCaseBookingsRequestGenderFilterListEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCaseBookingsRequestRaceFilterListEnum;
(function (ListCaseBookingsRequestRaceFilterListEnum) {
    ListCaseBookingsRequestRaceFilterListEnum["ASIAN"] = "ASIAN";
    ListCaseBookingsRequestRaceFilterListEnum["BLACK"] = "BLACK";
    ListCaseBookingsRequestRaceFilterListEnum["HISPANIC"] = "HISPANIC";
    ListCaseBookingsRequestRaceFilterListEnum["MIDDLEEASTERN"] = "MIDDLE_EASTERN";
    ListCaseBookingsRequestRaceFilterListEnum["NATIVE"] = "NATIVE";
    ListCaseBookingsRequestRaceFilterListEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    ListCaseBookingsRequestRaceFilterListEnum["PACIFICISLANDER"] = "PACIFIC_ISLANDER";
    ListCaseBookingsRequestRaceFilterListEnum["TWOORMORE"] = "TWO_OR_MORE";
    ListCaseBookingsRequestRaceFilterListEnum["UNKNOWN"] = "UNKNOWN";
    ListCaseBookingsRequestRaceFilterListEnum["UNVERIFIED"] = "UNVERIFIED";
    ListCaseBookingsRequestRaceFilterListEnum["WHITE"] = "WHITE";
})(ListCaseBookingsRequestRaceFilterListEnum || (ListCaseBookingsRequestRaceFilterListEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCaseBookingsRequestStateFilterListEnum;
(function (ListCaseBookingsRequestStateFilterListEnum) {
    ListCaseBookingsRequestStateFilterListEnum["AK"] = "AK";
    ListCaseBookingsRequestStateFilterListEnum["AL"] = "AL";
    ListCaseBookingsRequestStateFilterListEnum["AR"] = "AR";
    ListCaseBookingsRequestStateFilterListEnum["AZ"] = "AZ";
    ListCaseBookingsRequestStateFilterListEnum["CA"] = "CA";
    ListCaseBookingsRequestStateFilterListEnum["CO"] = "CO";
    ListCaseBookingsRequestStateFilterListEnum["CT"] = "CT";
    ListCaseBookingsRequestStateFilterListEnum["DC"] = "DC";
    ListCaseBookingsRequestStateFilterListEnum["DE"] = "DE";
    ListCaseBookingsRequestStateFilterListEnum["FL"] = "FL";
    ListCaseBookingsRequestStateFilterListEnum["GA"] = "GA";
    ListCaseBookingsRequestStateFilterListEnum["HI"] = "HI";
    ListCaseBookingsRequestStateFilterListEnum["IA"] = "IA";
    ListCaseBookingsRequestStateFilterListEnum["ID"] = "ID";
    ListCaseBookingsRequestStateFilterListEnum["IL"] = "IL";
    ListCaseBookingsRequestStateFilterListEnum["IN"] = "IN";
    ListCaseBookingsRequestStateFilterListEnum["KS"] = "KS";
    ListCaseBookingsRequestStateFilterListEnum["KY"] = "KY";
    ListCaseBookingsRequestStateFilterListEnum["LA"] = "LA";
    ListCaseBookingsRequestStateFilterListEnum["MA"] = "MA";
    ListCaseBookingsRequestStateFilterListEnum["MD"] = "MD";
    ListCaseBookingsRequestStateFilterListEnum["ME"] = "ME";
    ListCaseBookingsRequestStateFilterListEnum["MI"] = "MI";
    ListCaseBookingsRequestStateFilterListEnum["MN"] = "MN";
    ListCaseBookingsRequestStateFilterListEnum["MO"] = "MO";
    ListCaseBookingsRequestStateFilterListEnum["MS"] = "MS";
    ListCaseBookingsRequestStateFilterListEnum["MT"] = "MT";
    ListCaseBookingsRequestStateFilterListEnum["NC"] = "NC";
    ListCaseBookingsRequestStateFilterListEnum["ND"] = "ND";
    ListCaseBookingsRequestStateFilterListEnum["NE"] = "NE";
    ListCaseBookingsRequestStateFilterListEnum["NH"] = "NH";
    ListCaseBookingsRequestStateFilterListEnum["NJ"] = "NJ";
    ListCaseBookingsRequestStateFilterListEnum["NM"] = "NM";
    ListCaseBookingsRequestStateFilterListEnum["NV"] = "NV";
    ListCaseBookingsRequestStateFilterListEnum["NY"] = "NY";
    ListCaseBookingsRequestStateFilterListEnum["OH"] = "OH";
    ListCaseBookingsRequestStateFilterListEnum["OK"] = "OK";
    ListCaseBookingsRequestStateFilterListEnum["OR"] = "OR";
    ListCaseBookingsRequestStateFilterListEnum["PA"] = "PA";
    ListCaseBookingsRequestStateFilterListEnum["RI"] = "RI";
    ListCaseBookingsRequestStateFilterListEnum["SC"] = "SC";
    ListCaseBookingsRequestStateFilterListEnum["SD"] = "SD";
    ListCaseBookingsRequestStateFilterListEnum["TN"] = "TN";
    ListCaseBookingsRequestStateFilterListEnum["TX"] = "TX";
    ListCaseBookingsRequestStateFilterListEnum["UT"] = "UT";
    ListCaseBookingsRequestStateFilterListEnum["VA"] = "VA";
    ListCaseBookingsRequestStateFilterListEnum["VT"] = "VT";
    ListCaseBookingsRequestStateFilterListEnum["WA"] = "WA";
    ListCaseBookingsRequestStateFilterListEnum["WI"] = "WI";
    ListCaseBookingsRequestStateFilterListEnum["WV"] = "WV";
    ListCaseBookingsRequestStateFilterListEnum["WY"] = "WY";
})(ListCaseBookingsRequestStateFilterListEnum || (ListCaseBookingsRequestStateFilterListEnum = {}));
/**
* @export
* @enum {string}
*/
export var ListCaseBookingsRequestStatusCategoryFilterEnum;
(function (ListCaseBookingsRequestStatusCategoryFilterEnum) {
    ListCaseBookingsRequestStatusCategoryFilterEnum["ACTIVE"] = "ACTIVE";
    ListCaseBookingsRequestStatusCategoryFilterEnum["CANCELLED"] = "CANCELLED";
    ListCaseBookingsRequestStatusCategoryFilterEnum["RESOLVED"] = "RESOLVED";
    ListCaseBookingsRequestStatusCategoryFilterEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(ListCaseBookingsRequestStatusCategoryFilterEnum || (ListCaseBookingsRequestStatusCategoryFilterEnum = {}));
