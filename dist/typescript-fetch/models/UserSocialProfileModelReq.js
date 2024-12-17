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
import { exists } from '../runtime';
export function UserSocialProfileModelReqFromJSON(json) {
    return UserSocialProfileModelReqFromJSONTyped(json, false);
}
export function UserSocialProfileModelReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'platform': !exists(json, 'platform') ? undefined : json['platform'],
        'userHandle': !exists(json, 'userHandle') ? undefined : json['userHandle'],
    };
}
export function UserSocialProfileModelReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'platform': value.platform,
        'userHandle': value.userHandle,
    };
}
/**
* @export
* @enum {string}
*/
export var UserSocialProfileModelReqPlatformEnum;
(function (UserSocialProfileModelReqPlatformEnum) {
    UserSocialProfileModelReqPlatformEnum["INSTAGRAM"] = "INSTAGRAM";
    UserSocialProfileModelReqPlatformEnum["SNAPCHAT"] = "SNAPCHAT";
    UserSocialProfileModelReqPlatformEnum["TIKTOK"] = "TIKTOK";
    UserSocialProfileModelReqPlatformEnum["TWITCH"] = "TWITCH";
    UserSocialProfileModelReqPlatformEnum["X"] = "X";
    UserSocialProfileModelReqPlatformEnum["YOUTUBE"] = "YOUTUBE";
})(UserSocialProfileModelReqPlatformEnum || (UserSocialProfileModelReqPlatformEnum = {}));