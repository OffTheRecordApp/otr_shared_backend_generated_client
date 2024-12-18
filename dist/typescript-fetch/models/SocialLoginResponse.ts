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
    SocialLoginUser,
    SocialLoginUserFromJSON,
    SocialLoginUserFromJSONTyped,
    SocialLoginUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface SocialLoginResponse
 */
export interface SocialLoginResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SocialLoginResponse
     */
    newAccount?: boolean;
    /**
     * 
     * @type {SocialLoginUser}
     * @memberof SocialLoginResponse
     */
    user?: SocialLoginUser;
    /**
     * 
     * @type {boolean}
     * @memberof SocialLoginResponse
     */
    userLoggedIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SocialLoginResponse
     */
    userRememberMeAuthenticated?: boolean;
}

export function SocialLoginResponseFromJSON(json: any): SocialLoginResponse {
    return SocialLoginResponseFromJSONTyped(json, false);
}

export function SocialLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialLoginResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newAccount': !exists(json, 'newAccount') ? undefined : json['newAccount'],
        'user': !exists(json, 'user') ? undefined : SocialLoginUserFromJSON(json['user']),
        'userLoggedIn': !exists(json, 'userLoggedIn') ? undefined : json['userLoggedIn'],
        'userRememberMeAuthenticated': !exists(json, 'userRememberMeAuthenticated') ? undefined : json['userRememberMeAuthenticated'],
    };
}

export function SocialLoginResponseToJSON(value?: SocialLoginResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'newAccount': value.newAccount,
        'user': SocialLoginUserToJSON(value.user),
        'userLoggedIn': value.userLoggedIn,
        'userRememberMeAuthenticated': value.userRememberMeAuthenticated,
    };
}


