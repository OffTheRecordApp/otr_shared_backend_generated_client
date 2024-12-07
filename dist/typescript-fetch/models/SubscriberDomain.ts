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
 * @interface SubscriberDomain
 */
export interface SubscriberDomain {
    /**
     * 
     * @type {string}
     * @memberof SubscriberDomain
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberDomain
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberDomain
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberDomain
     */
    roleType?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberDomain
     */
    subscriptionType?: SubscriberDomainSubscriptionTypeEnum;
}

export function SubscriberDomainFromJSON(json: any): SubscriberDomain {
    return SubscriberDomainFromJSONTyped(json, false);
}

export function SubscriberDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'roleType': !exists(json, 'roleType') ? undefined : json['roleType'],
        'subscriptionType': !exists(json, 'subscriptionType') ? undefined : json['subscriptionType'],
    };
}

export function SubscriberDomainToJSON(value?: SubscriberDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'fullName': value.fullName,
        'postalCode': value.postalCode,
        'roleType': value.roleType,
        'subscriptionType': value.subscriptionType,
    };
}

/**
* @export
* @enum {string}
*/
export enum SubscriberDomainSubscriptionTypeEnum {
    WEBBROCHURELAUNCHNOTIFICATION = 'WEB_BROCHURE_LAUNCH_NOTIFICATION'
}


