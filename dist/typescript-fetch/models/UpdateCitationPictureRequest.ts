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
 * @interface UpdateCitationPictureRequest
 */
export interface UpdateCitationPictureRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateCitationPictureRequest
     */
    base64ImageData?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCitationPictureRequest
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCitationPictureRequest
     */
    imageContentType?: string;
}

export function UpdateCitationPictureRequestFromJSON(json: any): UpdateCitationPictureRequest {
    return UpdateCitationPictureRequestFromJSONTyped(json, false);
}

export function UpdateCitationPictureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCitationPictureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'base64ImageData': !exists(json, 'base64ImageData') ? undefined : json['base64ImageData'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'imageContentType': !exists(json, 'imageContentType') ? undefined : json['imageContentType'],
    };
}

export function UpdateCitationPictureRequestToJSON(value?: UpdateCitationPictureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base64ImageData': value.base64ImageData,
        'clientEmailAddress': value.clientEmailAddress,
        'imageContentType': value.imageContentType,
    };
}


