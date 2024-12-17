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
/**
 * 
 * @export
 * @interface SignImageUrlResponse
 */
export interface SignImageUrlResponse {
    /**
     * 
     * @type {string}
     * @memberof SignImageUrlResponse
     */
    signedImageUrl?: string;
}

export function SignImageUrlResponseFromJSON(json: any): SignImageUrlResponse {
    return SignImageUrlResponseFromJSONTyped(json, false);
}

export function SignImageUrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignImageUrlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signedImageUrl': !exists(json, 'signedImageUrl') ? undefined : json['signedImageUrl'],
    };
}

export function SignImageUrlResponseToJSON(value?: SignImageUrlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signedImageUrl': value.signedImageUrl,
    };
}

