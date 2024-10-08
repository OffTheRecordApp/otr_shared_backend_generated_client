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
export function ViolationPenaltyModelFromJSON(json) {
    return ViolationPenaltyModelFromJSONTyped(json, false);
}
export function ViolationPenaltyModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalTip': !exists(json, 'additionalTip') ? undefined : json['additionalTip'],
        'penaltyFriendlyDescription': !exists(json, 'penaltyFriendlyDescription') ? undefined : json['penaltyFriendlyDescription'],
        'penaltyMerged': !exists(json, 'penaltyMerged') ? undefined : json['penaltyMerged'],
        'penaltyType': !exists(json, 'penaltyType') ? undefined : json['penaltyType'],
        'penaltyTypeId': !exists(json, 'penaltyTypeId') ? undefined : json['penaltyTypeId'],
        'penaltyValue': !exists(json, 'penaltyValue') ? undefined : json['penaltyValue'],
        'vectorImageUrl': !exists(json, 'vectorImageUrl') ? undefined : json['vectorImageUrl'],
    };
}
export function ViolationPenaltyModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalTip': value.additionalTip,
        'penaltyFriendlyDescription': value.penaltyFriendlyDescription,
        'penaltyMerged': value.penaltyMerged,
        'penaltyType': value.penaltyType,
        'penaltyTypeId': value.penaltyTypeId,
        'penaltyValue': value.penaltyValue,
        'vectorImageUrl': value.vectorImageUrl,
    };
}
/**
* @export
* @enum {string}
*/
export var ViolationPenaltyModelPenaltyTypeEnum;
(function (ViolationPenaltyModelPenaltyTypeEnum) {
    ViolationPenaltyModelPenaltyTypeEnum["DEMERITPOINTS"] = "DEMERIT_POINTS";
    ViolationPenaltyModelPenaltyTypeEnum["INCARCERATIONMAXDAYS"] = "INCARCERATION_MAX_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["INCARCERATIONMINDAYS"] = "INCARCERATION_MIN_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["INSURANCEPOINTS"] = "INSURANCE_POINTS";
    ViolationPenaltyModelPenaltyTypeEnum["INSURANCERATEINCREASE"] = "INSURANCE_RATE_INCREASE";
    ViolationPenaltyModelPenaltyTypeEnum["LICENSEREVOCATIONMAXDAYS"] = "LICENSE_REVOCATION_MAX_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["LICENSEREVOCATIONMINDAYS"] = "LICENSE_REVOCATION_MIN_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["LICENSESUSPENSIONMAXDAYS"] = "LICENSE_SUSPENSION_MAX_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["LICENSESUSPENSIONMINDAYS"] = "LICENSE_SUSPENSION_MIN_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["MANDATORYCOURTAPPEARANCE"] = "MANDATORY_COURT_APPEARANCE";
    ViolationPenaltyModelPenaltyTypeEnum["MANDATORYCOURTAPPEARANCEWITHATTORNEY"] = "MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY";
    ViolationPenaltyModelPenaltyTypeEnum["MAXBAILAMOUNT"] = "MAX_BAIL_AMOUNT";
    ViolationPenaltyModelPenaltyTypeEnum["MINBAILAMOUNT"] = "MIN_BAIL_AMOUNT";
    ViolationPenaltyModelPenaltyTypeEnum["PROBATIONINDAYS"] = "PROBATION_IN_DAYS";
    ViolationPenaltyModelPenaltyTypeEnum["TOTALBAILAMOUNT"] = "TOTAL_BAIL_AMOUNT";
})(ViolationPenaltyModelPenaltyTypeEnum || (ViolationPenaltyModelPenaltyTypeEnum = {}));
