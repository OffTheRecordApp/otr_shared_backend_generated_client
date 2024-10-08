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
import { CountryRegionFromJSON, CountryRegionToJSON, } from './';
export function AddressDomainFromJSON(json) {
    return AddressDomainFromJSONTyped(json, false);
}
export function AddressDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressId': !exists(json, 'addressId') ? undefined : json['addressId'],
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'addressedTo': !exists(json, 'addressedTo') ? undefined : json['addressedTo'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'fullAddress': !exists(json, 'fullAddress') ? undefined : json['fullAddress'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'timeZoneName': !exists(json, 'timeZoneName') ? undefined : json['timeZoneName'],
    };
}
export function AddressDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressId': value.addressId,
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'addressedTo': value.addressedTo,
        'city': value.city,
        'countryCode': value.countryCode,
        'entityType': value.entityType,
        'fullAddress': value.fullAddress,
        'phoneNumber': value.phoneNumber,
        'postalCode': value.postalCode,
        'referenceId': value.referenceId,
        'region': CountryRegionToJSON(value.region),
        'state': value.state,
        'timeZoneName': value.timeZoneName,
    };
}
/**
* @export
* @enum {string}
*/
export var AddressDomainEntityTypeEnum;
(function (AddressDomainEntityTypeEnum) {
    AddressDomainEntityTypeEnum["CASE"] = "CASE";
    AddressDomainEntityTypeEnum["CASEPAYMENT"] = "CASE_PAYMENT";
    AddressDomainEntityTypeEnum["CITATION"] = "CITATION";
    AddressDomainEntityTypeEnum["COURT"] = "COURT";
    AddressDomainEntityTypeEnum["LAWFIRM"] = "LAWFIRM";
    AddressDomainEntityTypeEnum["LAWFIRMCASE"] = "LAWFIRM_CASE";
    AddressDomainEntityTypeEnum["LAWYER"] = "LAWYER";
    AddressDomainEntityTypeEnum["LINEITEM"] = "LINE_ITEM";
    AddressDomainEntityTypeEnum["STRIPECHARGE"] = "STRIPE_CHARGE";
    AddressDomainEntityTypeEnum["USER"] = "USER";
})(AddressDomainEntityTypeEnum || (AddressDomainEntityTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var AddressDomainStateEnum;
(function (AddressDomainStateEnum) {
    AddressDomainStateEnum["AK"] = "AK";
    AddressDomainStateEnum["AL"] = "AL";
    AddressDomainStateEnum["AR"] = "AR";
    AddressDomainStateEnum["AZ"] = "AZ";
    AddressDomainStateEnum["CA"] = "CA";
    AddressDomainStateEnum["CO"] = "CO";
    AddressDomainStateEnum["CT"] = "CT";
    AddressDomainStateEnum["DC"] = "DC";
    AddressDomainStateEnum["DE"] = "DE";
    AddressDomainStateEnum["FL"] = "FL";
    AddressDomainStateEnum["GA"] = "GA";
    AddressDomainStateEnum["HI"] = "HI";
    AddressDomainStateEnum["IA"] = "IA";
    AddressDomainStateEnum["ID"] = "ID";
    AddressDomainStateEnum["IL"] = "IL";
    AddressDomainStateEnum["IN"] = "IN";
    AddressDomainStateEnum["KS"] = "KS";
    AddressDomainStateEnum["KY"] = "KY";
    AddressDomainStateEnum["LA"] = "LA";
    AddressDomainStateEnum["MA"] = "MA";
    AddressDomainStateEnum["MD"] = "MD";
    AddressDomainStateEnum["ME"] = "ME";
    AddressDomainStateEnum["MI"] = "MI";
    AddressDomainStateEnum["MN"] = "MN";
    AddressDomainStateEnum["MO"] = "MO";
    AddressDomainStateEnum["MS"] = "MS";
    AddressDomainStateEnum["MT"] = "MT";
    AddressDomainStateEnum["NC"] = "NC";
    AddressDomainStateEnum["ND"] = "ND";
    AddressDomainStateEnum["NE"] = "NE";
    AddressDomainStateEnum["NH"] = "NH";
    AddressDomainStateEnum["NJ"] = "NJ";
    AddressDomainStateEnum["NM"] = "NM";
    AddressDomainStateEnum["NV"] = "NV";
    AddressDomainStateEnum["NY"] = "NY";
    AddressDomainStateEnum["OH"] = "OH";
    AddressDomainStateEnum["OK"] = "OK";
    AddressDomainStateEnum["OR"] = "OR";
    AddressDomainStateEnum["PA"] = "PA";
    AddressDomainStateEnum["RI"] = "RI";
    AddressDomainStateEnum["SC"] = "SC";
    AddressDomainStateEnum["SD"] = "SD";
    AddressDomainStateEnum["TN"] = "TN";
    AddressDomainStateEnum["TX"] = "TX";
    AddressDomainStateEnum["UT"] = "UT";
    AddressDomainStateEnum["VA"] = "VA";
    AddressDomainStateEnum["VT"] = "VT";
    AddressDomainStateEnum["WA"] = "WA";
    AddressDomainStateEnum["WI"] = "WI";
    AddressDomainStateEnum["WV"] = "WV";
    AddressDomainStateEnum["WY"] = "WY";
})(AddressDomainStateEnum || (AddressDomainStateEnum = {}));
