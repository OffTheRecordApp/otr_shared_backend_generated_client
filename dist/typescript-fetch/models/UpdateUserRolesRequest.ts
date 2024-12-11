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
 * @interface UpdateUserRolesRequest
 */
export interface UpdateUserRolesRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateUserRolesRequest
     */
    roles?: Array<UpdateUserRolesRequestRolesEnum>;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRolesRequest
     */
    userId?: number;
}

export function UpdateUserRolesRequestFromJSON(json: any): UpdateUserRolesRequest {
    return UpdateUserRolesRequestFromJSONTyped(json, false);
}

export function UpdateUserRolesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserRolesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function UpdateUserRolesRequestToJSON(value?: UpdateUserRolesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roles': value.roles,
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum UpdateUserRolesRequestRolesEnum {
    ADMIN = 'ADMIN',
    DEFENDANT = 'DEFENDANT',
    LAWFIRMADMIN = 'LAWFIRM_ADMIN',
    LAWYER = 'LAWYER',
    PARTNER = 'PARTNER',
    UNKNOWN = 'UNKNOWN'
}


