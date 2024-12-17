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
 * @interface SubscriptionGuardianModel
 */
export interface SubscriptionGuardianModel {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGuardianModel
     */
    emailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGuardianModel
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGuardianModel
     */
    lastName: string;
}

export function SubscriptionGuardianModelFromJSON(json: any): SubscriptionGuardianModel {
    return SubscriptionGuardianModelFromJSONTyped(json, false);
}

export function SubscriptionGuardianModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGuardianModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': json['emailAddress'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
    };
}

export function SubscriptionGuardianModelToJSON(value?: SubscriptionGuardianModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}

