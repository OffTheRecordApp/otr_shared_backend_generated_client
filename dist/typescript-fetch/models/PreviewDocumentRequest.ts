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
 * @interface PreviewDocumentRequest
 */
export interface PreviewDocumentRequest {
    /**
     * 
     * @type {string}
     * @memberof PreviewDocumentRequest
     */
    clientName?: string;
    /**
     * 
     * @type {string}
     * @memberof PreviewDocumentRequest
     */
    legalFee?: string;
    /**
     * 
     * @type {string}
     * @memberof PreviewDocumentRequest
     */
    textProvidedByLawfirm?: string;
}

export function PreviewDocumentRequestFromJSON(json: any): PreviewDocumentRequest {
    return PreviewDocumentRequestFromJSONTyped(json, false);
}

export function PreviewDocumentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviewDocumentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientName': !exists(json, 'clientName') ? undefined : json['clientName'],
        'legalFee': !exists(json, 'legalFee') ? undefined : json['legalFee'],
        'textProvidedByLawfirm': !exists(json, 'textProvidedByLawfirm') ? undefined : json['textProvidedByLawfirm'],
    };
}

export function PreviewDocumentRequestToJSON(value?: PreviewDocumentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientName': value.clientName,
        'legalFee': value.legalFee,
        'textProvidedByLawfirm': value.textProvidedByLawfirm,
    };
}


