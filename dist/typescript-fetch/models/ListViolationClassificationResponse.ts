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
    ViolationClassificationModel,
    ViolationClassificationModelFromJSON,
    ViolationClassificationModelFromJSONTyped,
    ViolationClassificationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListViolationClassificationResponse
 */
export interface ListViolationClassificationResponse {
    /**
     * 
     * @type {Array<ViolationClassificationModel>}
     * @memberof ListViolationClassificationResponse
     */
    models?: Array<ViolationClassificationModel>;
}

export function ListViolationClassificationResponseFromJSON(json: any): ListViolationClassificationResponse {
    return ListViolationClassificationResponseFromJSONTyped(json, false);
}

export function ListViolationClassificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListViolationClassificationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(ViolationClassificationModelFromJSON)),
    };
}

export function ListViolationClassificationResponseToJSON(value?: ListViolationClassificationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(ViolationClassificationModelToJSON)),
    };
}

