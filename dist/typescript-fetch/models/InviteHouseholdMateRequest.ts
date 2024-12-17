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
 * @interface InviteHouseholdMateRequest
 */
export interface InviteHouseholdMateRequest {
    /**
     * 
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    relationshipType?: InviteHouseholdMateRequestRelationshipTypeEnum;
}

export function InviteHouseholdMateRequestFromJSON(json: any): InviteHouseholdMateRequest {
    return InviteHouseholdMateRequestFromJSONTyped(json, false);
}

export function InviteHouseholdMateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteHouseholdMateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'relationshipType': !exists(json, 'relationshipType') ? undefined : json['relationshipType'],
    };
}

export function InviteHouseholdMateRequestToJSON(value?: InviteHouseholdMateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'fullName': value.fullName,
        'relationshipType': value.relationshipType,
    };
}

/**
* @export
* @enum {string}
*/
export enum InviteHouseholdMateRequestRelationshipTypeEnum {
    OWNER = 'OWNER',
    SIBLING = 'SIBLING',
    SPOUSE = 'SPOUSE',
    TEENAGER = 'TEENAGER',
    UNKNOWN = 'UNKNOWN'
}

