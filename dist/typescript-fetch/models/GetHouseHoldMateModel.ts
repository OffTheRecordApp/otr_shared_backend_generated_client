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
 * @interface GetHouseHoldMateModel
 */
export interface GetHouseHoldMateModel {
    /**
     * 
     * @type {boolean}
     * @memberof GetHouseHoldMateModel
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetHouseHoldMateModel
     */
    email?: string;
    /**
     * 
     * @type {Date}
     * @memberof GetHouseHoldMateModel
     */
    expiryDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetHouseHoldMateModel
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHouseHoldMateModel
     */
    inviteStatus?: GetHouseHoldMateModelInviteStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GetHouseHoldMateModel
     */
    profilePictureUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHouseHoldMateModel
     */
    relationshipType?: GetHouseHoldMateModelRelationshipTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof GetHouseHoldMateModel
     */
    userId?: number;
}

export function GetHouseHoldMateModelFromJSON(json: any): GetHouseHoldMateModel {
    return GetHouseHoldMateModelFromJSONTyped(json, false);
}

export function GetHouseHoldMateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetHouseHoldMateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'expiryDateUtc': !exists(json, 'expiryDateUtc') ? undefined : (new Date(json['expiryDateUtc'])),
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'inviteStatus': !exists(json, 'inviteStatus') ? undefined : json['inviteStatus'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'relationshipType': !exists(json, 'relationshipType') ? undefined : json['relationshipType'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function GetHouseHoldMateModelToJSON(value?: GetHouseHoldMateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
        'email': value.email,
        'expiryDateUtc': value.expiryDateUtc === undefined ? undefined : (value.expiryDateUtc.toISOString()),
        'fullName': value.fullName,
        'inviteStatus': value.inviteStatus,
        'profilePictureUrl': value.profilePictureUrl,
        'relationshipType': value.relationshipType,
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetHouseHoldMateModelInviteStatusEnum {
    CANCELLED = 'CANCELLED',
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED'
}
/**
* @export
* @enum {string}
*/
export enum GetHouseHoldMateModelRelationshipTypeEnum {
    OWNER = 'OWNER',
    SIBLING = 'SIBLING',
    SPOUSE = 'SPOUSE',
    TEENAGER = 'TEENAGER',
    UNKNOWN = 'UNKNOWN'
}


