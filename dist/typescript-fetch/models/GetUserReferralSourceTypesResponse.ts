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

import { exists, mapValues } from '../runtime';
import {
    UserReferralSourceTypeModel,
    UserReferralSourceTypeModelFromJSON,
    UserReferralSourceTypeModelFromJSONTyped,
    UserReferralSourceTypeModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetUserReferralSourceTypesResponse
 */
export interface GetUserReferralSourceTypesResponse {
    /**
     * 
     * @type {Array<UserReferralSourceTypeModel>}
     * @memberof GetUserReferralSourceTypesResponse
     */
    sources?: Array<UserReferralSourceTypeModel>;
}

export function GetUserReferralSourceTypesResponseFromJSON(json: any): GetUserReferralSourceTypesResponse {
    return GetUserReferralSourceTypesResponseFromJSONTyped(json, false);
}

export function GetUserReferralSourceTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserReferralSourceTypesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sources': !exists(json, 'sources') ? undefined : ((json['sources'] as Array<any>).map(UserReferralSourceTypeModelFromJSON)),
    };
}

export function GetUserReferralSourceTypesResponseToJSON(value?: GetUserReferralSourceTypesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sources': value.sources === undefined ? undefined : ((value.sources as Array<any>).map(UserReferralSourceTypeModelToJSON)),
    };
}

