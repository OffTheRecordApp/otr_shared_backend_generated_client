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
import { ResetFeeForLawfirmModelFromJSON, ResetFeeForLawfirmModelToJSON, } from './';
export function ResetFeesForLawfirmResponseFromJSON(json) {
    return ResetFeesForLawfirmResponseFromJSONTyped(json, false);
}
export function ResetFeesForLawfirmResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'models': !exists(json, 'models') ? undefined : (json['models'].map(ResetFeeForLawfirmModelFromJSON)),
    };
}
export function ResetFeesForLawfirmResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'models': value.models === undefined ? undefined : (value.models.map(ResetFeeForLawfirmModelToJSON)),
    };
}
