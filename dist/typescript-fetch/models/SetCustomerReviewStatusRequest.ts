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
 * @interface SetCustomerReviewStatusRequest
 */
export interface SetCustomerReviewStatusRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SetCustomerReviewStatusRequest
     */
    isHardDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetCustomerReviewStatusRequest
     */
    status?: SetCustomerReviewStatusRequestStatusEnum;
}

export function SetCustomerReviewStatusRequestFromJSON(json: any): SetCustomerReviewStatusRequest {
    return SetCustomerReviewStatusRequestFromJSONTyped(json, false);
}

export function SetCustomerReviewStatusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCustomerReviewStatusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isHardDeleted': !exists(json, 'isHardDeleted') ? undefined : json['isHardDeleted'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function SetCustomerReviewStatusRequestToJSON(value?: SetCustomerReviewStatusRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isHardDeleted': value.isHardDeleted,
        'status': value.status,
    };
}

/**
* @export
* @enum {string}
*/
export enum SetCustomerReviewStatusRequestStatusEnum {
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

