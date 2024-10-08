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
export function LawfirmCourtCoverageDomainFromJSON(json) {
    return LawfirmCourtCoverageDomainFromJSONTyped(json, false);
}
export function LawfirmCourtCoverageDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'city': !exists(json, 'city') ? undefined : json['city'],
        'competitiveFeeMax': !exists(json, 'competitiveFeeMax') ? undefined : json['competitiveFeeMax'],
        'competitiveFeeMin': !exists(json, 'competitiveFeeMin') ? undefined : json['competitiveFeeMin'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'isCompetitive': !exists(json, 'isCompetitive') ? undefined : json['isCompetitive'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'isRefundOffered': !exists(json, 'isRefundOffered') ? undefined : json['isRefundOffered'],
        'lawfirmFee': !exists(json, 'lawfirmFee') ? undefined : json['lawfirmFee'],
        'lowestFee': !exists(json, 'lowestFee') ? undefined : json['lowestFee'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'xtCompetitiveFee': !exists(json, 'xtCompetitiveFee') ? undefined : json['xtCompetitiveFee'],
        'xtCompetitiveFeeMax': !exists(json, 'xtCompetitiveFeeMax') ? undefined : json['xtCompetitiveFeeMax'],
        'xtCompetitiveFeeMin': !exists(json, 'xtCompetitiveFeeMin') ? undefined : json['xtCompetitiveFeeMin'],
    };
}
export function LawfirmCourtCoverageDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'city': value.city,
        'competitiveFeeMax': value.competitiveFeeMax,
        'competitiveFeeMin': value.competitiveFeeMin,
        'county': value.county,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'isCompetitive': value.isCompetitive,
        'isDeleted': value.isDeleted,
        'isRefundOffered': value.isRefundOffered,
        'lawfirmFee': value.lawfirmFee,
        'lowestFee': value.lowestFee,
        'region': CountryRegionToJSON(value.region),
        'state': value.state,
        'xtCompetitiveFee': value.xtCompetitiveFee,
        'xtCompetitiveFeeMax': value.xtCompetitiveFeeMax,
        'xtCompetitiveFeeMin': value.xtCompetitiveFeeMin,
    };
}
