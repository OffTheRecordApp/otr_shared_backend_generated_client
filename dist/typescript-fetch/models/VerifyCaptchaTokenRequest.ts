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
 * @interface VerifyCaptchaTokenRequest
 */
export interface VerifyCaptchaTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof VerifyCaptchaTokenRequest
     */
    ipAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCaptchaTokenRequest
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCaptchaTokenRequest
     */
    version?: VerifyCaptchaTokenRequestVersionEnum;
}

export function VerifyCaptchaTokenRequestFromJSON(json: any): VerifyCaptchaTokenRequest {
    return VerifyCaptchaTokenRequestFromJSONTyped(json, false);
}

export function VerifyCaptchaTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyCaptchaTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ipAddress': !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'token': json['token'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function VerifyCaptchaTokenRequestToJSON(value?: VerifyCaptchaTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ipAddress': value.ipAddress,
        'token': value.token,
        'version': value.version,
    };
}

/**
* @export
* @enum {string}
*/
export enum VerifyCaptchaTokenRequestVersionEnum {
    V2GOOGLE = 'V2_GOOGLE',
    V3GOOGLE = 'V3_GOOGLE'
}


