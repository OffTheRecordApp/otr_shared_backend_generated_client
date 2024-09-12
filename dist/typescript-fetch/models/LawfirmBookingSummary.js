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
export function LawfirmBookingSummaryFromJSON(json) {
    return LawfirmBookingSummaryFromJSONTyped(json, false);
}
export function LawfirmBookingSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingsCount': !exists(json, 'bookingsCount') ? undefined : json['bookingsCount'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmTransactions': !exists(json, 'lawfirmTransactions') ? undefined : json['lawfirmTransactions'],
        'otrPercent': !exists(json, 'otrPercent') ? undefined : json['otrPercent'],
        'otrRevenue': !exists(json, 'otrRevenue') ? undefined : json['otrRevenue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}
export function LawfirmBookingSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingsCount': value.bookingsCount,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmTransactions': value.lawfirmTransactions,
        'otrPercent': value.otrPercent,
        'otrRevenue': value.otrRevenue,
        'state': value.state,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmBookingSummaryStateEnum;
(function (LawfirmBookingSummaryStateEnum) {
    LawfirmBookingSummaryStateEnum["AK"] = "AK";
    LawfirmBookingSummaryStateEnum["AL"] = "AL";
    LawfirmBookingSummaryStateEnum["AR"] = "AR";
    LawfirmBookingSummaryStateEnum["AZ"] = "AZ";
    LawfirmBookingSummaryStateEnum["CA"] = "CA";
    LawfirmBookingSummaryStateEnum["CO"] = "CO";
    LawfirmBookingSummaryStateEnum["CT"] = "CT";
    LawfirmBookingSummaryStateEnum["DC"] = "DC";
    LawfirmBookingSummaryStateEnum["DE"] = "DE";
    LawfirmBookingSummaryStateEnum["FL"] = "FL";
    LawfirmBookingSummaryStateEnum["GA"] = "GA";
    LawfirmBookingSummaryStateEnum["HI"] = "HI";
    LawfirmBookingSummaryStateEnum["IA"] = "IA";
    LawfirmBookingSummaryStateEnum["ID"] = "ID";
    LawfirmBookingSummaryStateEnum["IL"] = "IL";
    LawfirmBookingSummaryStateEnum["IN"] = "IN";
    LawfirmBookingSummaryStateEnum["KS"] = "KS";
    LawfirmBookingSummaryStateEnum["KY"] = "KY";
    LawfirmBookingSummaryStateEnum["LA"] = "LA";
    LawfirmBookingSummaryStateEnum["MA"] = "MA";
    LawfirmBookingSummaryStateEnum["MD"] = "MD";
    LawfirmBookingSummaryStateEnum["ME"] = "ME";
    LawfirmBookingSummaryStateEnum["MI"] = "MI";
    LawfirmBookingSummaryStateEnum["MN"] = "MN";
    LawfirmBookingSummaryStateEnum["MO"] = "MO";
    LawfirmBookingSummaryStateEnum["MS"] = "MS";
    LawfirmBookingSummaryStateEnum["MT"] = "MT";
    LawfirmBookingSummaryStateEnum["NC"] = "NC";
    LawfirmBookingSummaryStateEnum["ND"] = "ND";
    LawfirmBookingSummaryStateEnum["NE"] = "NE";
    LawfirmBookingSummaryStateEnum["NH"] = "NH";
    LawfirmBookingSummaryStateEnum["NJ"] = "NJ";
    LawfirmBookingSummaryStateEnum["NM"] = "NM";
    LawfirmBookingSummaryStateEnum["NV"] = "NV";
    LawfirmBookingSummaryStateEnum["NY"] = "NY";
    LawfirmBookingSummaryStateEnum["OH"] = "OH";
    LawfirmBookingSummaryStateEnum["OK"] = "OK";
    LawfirmBookingSummaryStateEnum["OR"] = "OR";
    LawfirmBookingSummaryStateEnum["PA"] = "PA";
    LawfirmBookingSummaryStateEnum["RI"] = "RI";
    LawfirmBookingSummaryStateEnum["SC"] = "SC";
    LawfirmBookingSummaryStateEnum["SD"] = "SD";
    LawfirmBookingSummaryStateEnum["TN"] = "TN";
    LawfirmBookingSummaryStateEnum["TX"] = "TX";
    LawfirmBookingSummaryStateEnum["UT"] = "UT";
    LawfirmBookingSummaryStateEnum["VA"] = "VA";
    LawfirmBookingSummaryStateEnum["VT"] = "VT";
    LawfirmBookingSummaryStateEnum["WA"] = "WA";
    LawfirmBookingSummaryStateEnum["WI"] = "WI";
    LawfirmBookingSummaryStateEnum["WV"] = "WV";
    LawfirmBookingSummaryStateEnum["WY"] = "WY";
})(LawfirmBookingSummaryStateEnum || (LawfirmBookingSummaryStateEnum = {}));