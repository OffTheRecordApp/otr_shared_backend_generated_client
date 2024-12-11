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
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    UserBookingsDomain,
    UserBookingsDomainFromJSON,
    UserBookingsDomainFromJSONTyped,
    UserBookingsDomainToJSON,
    UserRoleDomain,
    UserRoleDomainFromJSON,
    UserRoleDomainFromJSONTyped,
    UserRoleDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface FindMatchingUser
 */
export interface FindMatchingUser {
    /**
     * 
     * @type {UserBookingsDomain}
     * @memberof FindMatchingUser
     */
    bookings?: UserBookingsDomain;
    /**
     * 
     * @type {Timestamp}
     * @memberof FindMatchingUser
     */
    creationDateUtc?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof FindMatchingUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof FindMatchingUser
     */
    firstname?: string;
    /**
     * 
     * @type {Date}
     * @memberof FindMatchingUser
     */
    ghostAccountCreationDateUtc?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FindMatchingUser
     */
    isEmailConfirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FindMatchingUser
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FindMatchingUser
     */
    isTestUser?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FindMatchingUser
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof FindMatchingUser
     */
    loginProvider?: FindMatchingUserLoginProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof FindMatchingUser
     */
    profilePictureUrl?: string;
    /**
     * 
     * @type {Array<UserRoleDomain>}
     * @memberof FindMatchingUser
     */
    roles?: Array<UserRoleDomain>;
    /**
     * 
     * @type {boolean}
     * @memberof FindMatchingUser
     */
    unsubscribed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FindMatchingUser
     */
    userId?: number;
    /**
     * 
     * @type {Date}
     * @memberof FindMatchingUser
     */
    userRegistrationDateUtc?: Date;
}

export function FindMatchingUserFromJSON(json: any): FindMatchingUser {
    return FindMatchingUserFromJSONTyped(json, false);
}

export function FindMatchingUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindMatchingUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookings': !exists(json, 'bookings') ? undefined : UserBookingsDomainFromJSON(json['bookings']),
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampFromJSON(json['creationDateUtc']),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'ghostAccountCreationDateUtc': !exists(json, 'ghostAccountCreationDateUtc') ? undefined : (new Date(json['ghostAccountCreationDateUtc'])),
        'isEmailConfirmed': !exists(json, 'isEmailConfirmed') ? undefined : json['isEmailConfirmed'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isTestUser': !exists(json, 'isTestUser') ? undefined : json['isTestUser'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(UserRoleDomainFromJSON)),
        'unsubscribed': !exists(json, 'unsubscribed') ? undefined : json['unsubscribed'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRegistrationDateUtc': !exists(json, 'userRegistrationDateUtc') ? undefined : (new Date(json['userRegistrationDateUtc'])),
    };
}

export function FindMatchingUserToJSON(value?: FindMatchingUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookings': UserBookingsDomainToJSON(value.bookings),
        'creationDateUtc': TimestampToJSON(value.creationDateUtc),
        'emailAddress': value.emailAddress,
        'firstname': value.firstname,
        'ghostAccountCreationDateUtc': value.ghostAccountCreationDateUtc === undefined ? undefined : (value.ghostAccountCreationDateUtc.toISOString()),
        'isEmailConfirmed': value.isEmailConfirmed,
        'isEnabled': value.isEnabled,
        'isTestUser': value.isTestUser,
        'lastname': value.lastname,
        'loginProvider': value.loginProvider,
        'profilePictureUrl': value.profilePictureUrl,
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(UserRoleDomainToJSON)),
        'unsubscribed': value.unsubscribed,
        'userId': value.userId,
        'userRegistrationDateUtc': value.userRegistrationDateUtc === undefined ? undefined : (value.userRegistrationDateUtc.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum FindMatchingUserLoginProviderEnum {
    APPLE = 'APPLE',
    EMAIL = 'EMAIL',
    FACEBOOK = 'FACEBOOK',
    GOOGLE = 'GOOGLE',
    PHONE = 'PHONE',
    TWITTER = 'TWITTER',
    UNKNOWN = 'UNKNOWN'
}


