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
 * @interface GetRedirectUrlResponse
 */
export interface GetRedirectUrlResponse {
    /**
     * 
     * @type {number}
     * @memberof GetRedirectUrlResponse
     */
    httpCode?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRedirectUrlResponse
     */
    landingPageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRedirectUrlResponse
     */
    redirectUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof GetRedirectUrlResponse
     */
    startDateUtc?: Date;
}

export function GetRedirectUrlResponseFromJSON(json: any): GetRedirectUrlResponse {
    return GetRedirectUrlResponseFromJSONTyped(json, false);
}

export function GetRedirectUrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRedirectUrlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'httpCode': !exists(json, 'httpCode') ? undefined : json['httpCode'],
        'landingPageUrl': !exists(json, 'landingPageUrl') ? undefined : json['landingPageUrl'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'startDateUtc': !exists(json, 'startDateUtc') ? undefined : (new Date(json['startDateUtc'])),
    };
}

export function GetRedirectUrlResponseToJSON(value?: GetRedirectUrlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'httpCode': value.httpCode,
        'landingPageUrl': value.landingPageUrl,
        'redirectUrl': value.redirectUrl,
        'startDateUtc': value.startDateUtc === undefined ? undefined : (value.startDateUtc.toISOString()),
    };
}

