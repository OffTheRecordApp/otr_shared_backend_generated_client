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
export function LawfirmFromJSON(json) {
    return LawfirmFromJSONTyped(json, false);
}
export function LawfirmFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseCount': !exists(json, 'caseCount') ? undefined : json['caseCount'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'otrPercent': !exists(json, 'otrPercent') ? undefined : json['otrPercent'],
        'otrRevenue': !exists(json, 'otrRevenue') ? undefined : json['otrRevenue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'transactionVolume': !exists(json, 'transactionVolume') ? undefined : json['transactionVolume'],
    };
}
export function LawfirmToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseCount': value.caseCount,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'otrPercent': value.otrPercent,
        'otrRevenue': value.otrRevenue,
        'state': value.state,
        'transactionVolume': value.transactionVolume,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmStateEnum;
(function (LawfirmStateEnum) {
    LawfirmStateEnum["AK"] = "AK";
    LawfirmStateEnum["AL"] = "AL";
    LawfirmStateEnum["AR"] = "AR";
    LawfirmStateEnum["AZ"] = "AZ";
    LawfirmStateEnum["CA"] = "CA";
    LawfirmStateEnum["CO"] = "CO";
    LawfirmStateEnum["CT"] = "CT";
    LawfirmStateEnum["DC"] = "DC";
    LawfirmStateEnum["DE"] = "DE";
    LawfirmStateEnum["FL"] = "FL";
    LawfirmStateEnum["GA"] = "GA";
    LawfirmStateEnum["HI"] = "HI";
    LawfirmStateEnum["IA"] = "IA";
    LawfirmStateEnum["ID"] = "ID";
    LawfirmStateEnum["IL"] = "IL";
    LawfirmStateEnum["IN"] = "IN";
    LawfirmStateEnum["KS"] = "KS";
    LawfirmStateEnum["KY"] = "KY";
    LawfirmStateEnum["LA"] = "LA";
    LawfirmStateEnum["MA"] = "MA";
    LawfirmStateEnum["MD"] = "MD";
    LawfirmStateEnum["ME"] = "ME";
    LawfirmStateEnum["MI"] = "MI";
    LawfirmStateEnum["MN"] = "MN";
    LawfirmStateEnum["MO"] = "MO";
    LawfirmStateEnum["MS"] = "MS";
    LawfirmStateEnum["MT"] = "MT";
    LawfirmStateEnum["NC"] = "NC";
    LawfirmStateEnum["ND"] = "ND";
    LawfirmStateEnum["NE"] = "NE";
    LawfirmStateEnum["NH"] = "NH";
    LawfirmStateEnum["NJ"] = "NJ";
    LawfirmStateEnum["NM"] = "NM";
    LawfirmStateEnum["NV"] = "NV";
    LawfirmStateEnum["NY"] = "NY";
    LawfirmStateEnum["OH"] = "OH";
    LawfirmStateEnum["OK"] = "OK";
    LawfirmStateEnum["OR"] = "OR";
    LawfirmStateEnum["PA"] = "PA";
    LawfirmStateEnum["RI"] = "RI";
    LawfirmStateEnum["SC"] = "SC";
    LawfirmStateEnum["SD"] = "SD";
    LawfirmStateEnum["TN"] = "TN";
    LawfirmStateEnum["TX"] = "TX";
    LawfirmStateEnum["UT"] = "UT";
    LawfirmStateEnum["VA"] = "VA";
    LawfirmStateEnum["VT"] = "VT";
    LawfirmStateEnum["WA"] = "WA";
    LawfirmStateEnum["WI"] = "WI";
    LawfirmStateEnum["WV"] = "WV";
    LawfirmStateEnum["WY"] = "WY";
})(LawfirmStateEnum || (LawfirmStateEnum = {}));