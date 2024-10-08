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
export function CountyDomainFromJSON(json) {
    return CountyDomainFromJSONTyped(json, false);
}
export function CountyDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyName': !exists(json, 'countyName') ? undefined : json['countyName'],
        'stateCode': !exists(json, 'stateCode') ? undefined : json['stateCode'],
    };
}
export function CountyDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'countyId': value.countyId,
        'countyName': value.countyName,
        'stateCode': value.stateCode,
    };
}
/**
* @export
* @enum {string}
*/
export var CountyDomainStateCodeEnum;
(function (CountyDomainStateCodeEnum) {
    CountyDomainStateCodeEnum["AK"] = "AK";
    CountyDomainStateCodeEnum["AL"] = "AL";
    CountyDomainStateCodeEnum["AR"] = "AR";
    CountyDomainStateCodeEnum["AZ"] = "AZ";
    CountyDomainStateCodeEnum["CA"] = "CA";
    CountyDomainStateCodeEnum["CO"] = "CO";
    CountyDomainStateCodeEnum["CT"] = "CT";
    CountyDomainStateCodeEnum["DC"] = "DC";
    CountyDomainStateCodeEnum["DE"] = "DE";
    CountyDomainStateCodeEnum["FL"] = "FL";
    CountyDomainStateCodeEnum["GA"] = "GA";
    CountyDomainStateCodeEnum["HI"] = "HI";
    CountyDomainStateCodeEnum["IA"] = "IA";
    CountyDomainStateCodeEnum["ID"] = "ID";
    CountyDomainStateCodeEnum["IL"] = "IL";
    CountyDomainStateCodeEnum["IN"] = "IN";
    CountyDomainStateCodeEnum["KS"] = "KS";
    CountyDomainStateCodeEnum["KY"] = "KY";
    CountyDomainStateCodeEnum["LA"] = "LA";
    CountyDomainStateCodeEnum["MA"] = "MA";
    CountyDomainStateCodeEnum["MD"] = "MD";
    CountyDomainStateCodeEnum["ME"] = "ME";
    CountyDomainStateCodeEnum["MI"] = "MI";
    CountyDomainStateCodeEnum["MN"] = "MN";
    CountyDomainStateCodeEnum["MO"] = "MO";
    CountyDomainStateCodeEnum["MS"] = "MS";
    CountyDomainStateCodeEnum["MT"] = "MT";
    CountyDomainStateCodeEnum["NC"] = "NC";
    CountyDomainStateCodeEnum["ND"] = "ND";
    CountyDomainStateCodeEnum["NE"] = "NE";
    CountyDomainStateCodeEnum["NH"] = "NH";
    CountyDomainStateCodeEnum["NJ"] = "NJ";
    CountyDomainStateCodeEnum["NM"] = "NM";
    CountyDomainStateCodeEnum["NV"] = "NV";
    CountyDomainStateCodeEnum["NY"] = "NY";
    CountyDomainStateCodeEnum["OH"] = "OH";
    CountyDomainStateCodeEnum["OK"] = "OK";
    CountyDomainStateCodeEnum["OR"] = "OR";
    CountyDomainStateCodeEnum["PA"] = "PA";
    CountyDomainStateCodeEnum["RI"] = "RI";
    CountyDomainStateCodeEnum["SC"] = "SC";
    CountyDomainStateCodeEnum["SD"] = "SD";
    CountyDomainStateCodeEnum["TN"] = "TN";
    CountyDomainStateCodeEnum["TX"] = "TX";
    CountyDomainStateCodeEnum["UT"] = "UT";
    CountyDomainStateCodeEnum["VA"] = "VA";
    CountyDomainStateCodeEnum["VT"] = "VT";
    CountyDomainStateCodeEnum["WA"] = "WA";
    CountyDomainStateCodeEnum["WI"] = "WI";
    CountyDomainStateCodeEnum["WV"] = "WV";
    CountyDomainStateCodeEnum["WY"] = "WY";
})(CountyDomainStateCodeEnum || (CountyDomainStateCodeEnum = {}));
