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
import { CoachingCardCategoriesModelFromJSON, CoachingCardCategoriesModelToJSON, } from './';
export function GetCoachingCardCategoriesResponseFromJSON(json) {
    return GetCoachingCardCategoriesResponseFromJSONTyped(json, false);
}
export function GetCoachingCardCategoriesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'coachingCardCategoriesModel': !exists(json, 'coachingCardCategoriesModel') ? undefined : (json['coachingCardCategoriesModel'].map(CoachingCardCategoriesModelFromJSON)),
    };
}
export function GetCoachingCardCategoriesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'coachingCardCategoriesModel': value.coachingCardCategoriesModel === undefined ? undefined : (value.coachingCardCategoriesModel.map(CoachingCardCategoriesModelToJSON)),
    };
}
