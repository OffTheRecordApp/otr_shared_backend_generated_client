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
export function PushNotificationRegistrationRequestFromJSON(json) {
    return PushNotificationRegistrationRequestFromJSONTyped(json, false);
}
export function PushNotificationRegistrationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deviceToken': !exists(json, 'deviceToken') ? undefined : json['deviceToken'],
        'platformType': !exists(json, 'platformType') ? undefined : json['platformType'],
    };
}
export function PushNotificationRegistrationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deviceToken': value.deviceToken,
        'platformType': value.platformType,
    };
}
/**
* @export
* @enum {string}
*/
export var PushNotificationRegistrationRequestPlatformTypeEnum;
(function (PushNotificationRegistrationRequestPlatformTypeEnum) {
    PushNotificationRegistrationRequestPlatformTypeEnum["ANDROID"] = "ANDROID";
    PushNotificationRegistrationRequestPlatformTypeEnum["IOS"] = "IOS";
    PushNotificationRegistrationRequestPlatformTypeEnum["WEBAPP"] = "WEBAPP";
})(PushNotificationRegistrationRequestPlatformTypeEnum || (PushNotificationRegistrationRequestPlatformTypeEnum = {}));