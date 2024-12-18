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
 * @interface UserSubscriptionPlanModel
 */
export interface UserSubscriptionPlanModel {
    /**
     * 
     * @type {Date}
     * @memberof UserSubscriptionPlanModel
     */
    expirationDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSubscriptionPlanModel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSubscriptionPlanModel
     */
    productName?: UserSubscriptionPlanModelProductNameEnum;
    /**
     * 
     * @type {Date}
     * @memberof UserSubscriptionPlanModel
     */
    startDateUtc?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UserSubscriptionPlanModel
     */
    subscriptionCovered?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSubscriptionPlanModel
     */
    subscriptionStatus?: UserSubscriptionPlanModelSubscriptionStatusEnum;
}

export function UserSubscriptionPlanModelFromJSON(json: any): UserSubscriptionPlanModel {
    return UserSubscriptionPlanModelFromJSONTyped(json, false);
}

export function UserSubscriptionPlanModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSubscriptionPlanModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expirationDateUtc': !exists(json, 'expirationDateUtc') ? undefined : (new Date(json['expirationDateUtc'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'startDateUtc': !exists(json, 'startDateUtc') ? undefined : (new Date(json['startDateUtc'])),
        'subscriptionCovered': !exists(json, 'subscriptionCovered') ? undefined : json['subscriptionCovered'],
        'subscriptionStatus': !exists(json, 'subscriptionStatus') ? undefined : json['subscriptionStatus'],
    };
}

export function UserSubscriptionPlanModelToJSON(value?: UserSubscriptionPlanModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expirationDateUtc': value.expirationDateUtc === undefined ? undefined : (value.expirationDateUtc.toISOString()),
        'id': value.id,
        'productName': value.productName,
        'startDateUtc': value.startDateUtc === undefined ? undefined : (value.startDateUtc.toISOString()),
        'subscriptionCovered': value.subscriptionCovered,
        'subscriptionStatus': value.subscriptionStatus,
    };
}

/**
* @export
* @enum {string}
*/
export enum UserSubscriptionPlanModelProductNameEnum {
    CONVOYPRO = 'CONVOY_PRO',
    OTRFASTLANE = 'OTR_FASTLANE',
    OTRFASTLANETEEN = 'OTR_FASTLANE_TEEN'
}
/**
* @export
* @enum {string}
*/
export enum UserSubscriptionPlanModelSubscriptionStatusEnum {
    ACTIVE = 'ACTIVE',
    CANCELED = 'CANCELED',
    INCOMPLETE = 'INCOMPLETE',
    INCOMPLETEEXPIRED = 'INCOMPLETE_EXPIRED',
    INTRIALPERIOD = 'IN_TRIAL_PERIOD',
    PASTDUE = 'PAST_DUE',
    UNKNOWN = 'UNKNOWN',
    UNPAID = 'UNPAID'
}


