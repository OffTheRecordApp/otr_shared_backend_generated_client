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
 * @interface ConvertPdfToImageModel
 */
export interface ConvertPdfToImageModel {
    /**
     * 
     * @type {string}
     * @memberof ConvertPdfToImageModel
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertPdfToImageModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertPdfToImageModel
     */
    type?: ConvertPdfToImageModelTypeEnum;
}

export function ConvertPdfToImageModelFromJSON(json: any): ConvertPdfToImageModel {
    return ConvertPdfToImageModelFromJSONTyped(json, false);
}

export function ConvertPdfToImageModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConvertPdfToImageModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ConvertPdfToImageModelToJSON(value?: ConvertPdfToImageModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'fileName': value.fileName,
        'type': value.type,
    };
}

/**
* @export
* @enum {string}
*/
export enum ConvertPdfToImageModelTypeEnum {
    IMAGE = 'IMAGE',
    PDF = 'PDF'
}


