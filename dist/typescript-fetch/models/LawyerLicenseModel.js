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
export function LawyerLicenseModelFromJSON(json) {
    return LawyerLicenseModelFromJSONTyped(json, false);
}
export function LawyerLicenseModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'barLicenseIssueDate': !exists(json, 'barLicenseIssueDate') ? undefined : (new Date(json['barLicenseIssueDate'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'licenseType': !exists(json, 'licenseType') ? undefined : json['licenseType'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
    };
}
export function LawyerLicenseModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'barLicenseIssueDate': value.barLicenseIssueDate === undefined ? undefined : (value.barLicenseIssueDate.toISOString()),
        'id': value.id,
        'licenseType': value.licenseType,
        'regionCode': value.regionCode,
    };
}
/**
* @export
* @enum {string}
*/
export var LawyerLicenseModelLicenseTypeEnum;
(function (LawyerLicenseModelLicenseTypeEnum) {
    LawyerLicenseModelLicenseTypeEnum["BAR"] = "BAR";
})(LawyerLicenseModelLicenseTypeEnum || (LawyerLicenseModelLicenseTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawyerLicenseModelRegionCodeEnum;
(function (LawyerLicenseModelRegionCodeEnum) {
    LawyerLicenseModelRegionCodeEnum["AK"] = "AK";
    LawyerLicenseModelRegionCodeEnum["AL"] = "AL";
    LawyerLicenseModelRegionCodeEnum["AR"] = "AR";
    LawyerLicenseModelRegionCodeEnum["AZ"] = "AZ";
    LawyerLicenseModelRegionCodeEnum["CA"] = "CA";
    LawyerLicenseModelRegionCodeEnum["CO"] = "CO";
    LawyerLicenseModelRegionCodeEnum["CT"] = "CT";
    LawyerLicenseModelRegionCodeEnum["DC"] = "DC";
    LawyerLicenseModelRegionCodeEnum["DE"] = "DE";
    LawyerLicenseModelRegionCodeEnum["FL"] = "FL";
    LawyerLicenseModelRegionCodeEnum["GA"] = "GA";
    LawyerLicenseModelRegionCodeEnum["HI"] = "HI";
    LawyerLicenseModelRegionCodeEnum["IA"] = "IA";
    LawyerLicenseModelRegionCodeEnum["ID"] = "ID";
    LawyerLicenseModelRegionCodeEnum["IL"] = "IL";
    LawyerLicenseModelRegionCodeEnum["IN"] = "IN";
    LawyerLicenseModelRegionCodeEnum["KS"] = "KS";
    LawyerLicenseModelRegionCodeEnum["KY"] = "KY";
    LawyerLicenseModelRegionCodeEnum["LA"] = "LA";
    LawyerLicenseModelRegionCodeEnum["MA"] = "MA";
    LawyerLicenseModelRegionCodeEnum["MD"] = "MD";
    LawyerLicenseModelRegionCodeEnum["ME"] = "ME";
    LawyerLicenseModelRegionCodeEnum["MI"] = "MI";
    LawyerLicenseModelRegionCodeEnum["MN"] = "MN";
    LawyerLicenseModelRegionCodeEnum["MO"] = "MO";
    LawyerLicenseModelRegionCodeEnum["MS"] = "MS";
    LawyerLicenseModelRegionCodeEnum["MT"] = "MT";
    LawyerLicenseModelRegionCodeEnum["NC"] = "NC";
    LawyerLicenseModelRegionCodeEnum["ND"] = "ND";
    LawyerLicenseModelRegionCodeEnum["NE"] = "NE";
    LawyerLicenseModelRegionCodeEnum["NH"] = "NH";
    LawyerLicenseModelRegionCodeEnum["NJ"] = "NJ";
    LawyerLicenseModelRegionCodeEnum["NM"] = "NM";
    LawyerLicenseModelRegionCodeEnum["NV"] = "NV";
    LawyerLicenseModelRegionCodeEnum["NY"] = "NY";
    LawyerLicenseModelRegionCodeEnum["OH"] = "OH";
    LawyerLicenseModelRegionCodeEnum["OK"] = "OK";
    LawyerLicenseModelRegionCodeEnum["OR"] = "OR";
    LawyerLicenseModelRegionCodeEnum["PA"] = "PA";
    LawyerLicenseModelRegionCodeEnum["RI"] = "RI";
    LawyerLicenseModelRegionCodeEnum["SC"] = "SC";
    LawyerLicenseModelRegionCodeEnum["SD"] = "SD";
    LawyerLicenseModelRegionCodeEnum["TN"] = "TN";
    LawyerLicenseModelRegionCodeEnum["TX"] = "TX";
    LawyerLicenseModelRegionCodeEnum["UT"] = "UT";
    LawyerLicenseModelRegionCodeEnum["VA"] = "VA";
    LawyerLicenseModelRegionCodeEnum["VT"] = "VT";
    LawyerLicenseModelRegionCodeEnum["WA"] = "WA";
    LawyerLicenseModelRegionCodeEnum["WI"] = "WI";
    LawyerLicenseModelRegionCodeEnum["WV"] = "WV";
    LawyerLicenseModelRegionCodeEnum["WY"] = "WY";
})(LawyerLicenseModelRegionCodeEnum || (LawyerLicenseModelRegionCodeEnum = {}));