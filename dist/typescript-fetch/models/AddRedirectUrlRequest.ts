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
 * @interface AddRedirectUrlRequest
 */
export interface AddRedirectUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof AddRedirectUrlRequest
     */
    landingPageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AddRedirectUrlRequest
     */
    pageType?: AddRedirectUrlRequestPageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddRedirectUrlRequest
     */
    redirectType?: AddRedirectUrlRequestRedirectTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddRedirectUrlRequest
     */
    redirectUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof AddRedirectUrlRequest
     */
    startDate?: Date;
}

export function AddRedirectUrlRequestFromJSON(json: any): AddRedirectUrlRequest {
    return AddRedirectUrlRequestFromJSONTyped(json, false);
}

export function AddRedirectUrlRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRedirectUrlRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'landingPageUrl': !exists(json, 'landingPageUrl') ? undefined : json['landingPageUrl'],
        'pageType': !exists(json, 'pageType') ? undefined : json['pageType'],
        'redirectType': !exists(json, 'redirectType') ? undefined : json['redirectType'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function AddRedirectUrlRequestToJSON(value?: AddRedirectUrlRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'landingPageUrl': value.landingPageUrl,
        'pageType': value.pageType,
        'redirectType': value.redirectType,
        'redirectUrl': value.redirectUrl,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum AddRedirectUrlRequestPageTypeEnum {
    DEBUG = 'DEBUG',
    SEO = 'SEO',
    VANITY = 'VANITY'
}
/**
* @export
* @enum {string}
*/
export enum AddRedirectUrlRequestRedirectTypeEnum {
    PERMANENT = 'PERMANENT',
    TEMPORARY = 'TEMPORARY'
}

