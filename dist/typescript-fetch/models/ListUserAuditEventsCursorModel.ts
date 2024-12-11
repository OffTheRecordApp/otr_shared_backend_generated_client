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
 * @interface ListUserAuditEventsCursorModel
 */
export interface ListUserAuditEventsCursorModel {
    /**
     * 
     * @type {string}
     * @memberof ListUserAuditEventsCursorModel
     */
    nextPageToken?: string;
}

export function ListUserAuditEventsCursorModelFromJSON(json: any): ListUserAuditEventsCursorModel {
    return ListUserAuditEventsCursorModelFromJSONTyped(json, false);
}

export function ListUserAuditEventsCursorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserAuditEventsCursorModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextPageToken': !exists(json, 'nextPageToken') ? undefined : json['nextPageToken'],
    };
}

export function ListUserAuditEventsCursorModelToJSON(value?: ListUserAuditEventsCursorModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextPageToken': value.nextPageToken,
    };
}


