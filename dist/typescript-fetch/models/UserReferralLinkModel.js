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
export function UserReferralLinkModelFromJSON(json) {
    return UserReferralLinkModelFromJSONTyped(json, false);
}
export function UserReferralLinkModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referralLink': !exists(json, 'referralLink') ? undefined : json['referralLink'],
        'referralLinkType': !exists(json, 'referralLinkType') ? undefined : json['referralLinkType'],
    };
}
export function UserReferralLinkModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'referralLink': value.referralLink,
        'referralLinkType': value.referralLinkType,
    };
}
/**
* @export
* @enum {string}
*/
export var UserReferralLinkModelReferralLinkTypeEnum;
(function (UserReferralLinkModelReferralLinkTypeEnum) {
    UserReferralLinkModelReferralLinkTypeEnum["FASTLANETEEN"] = "FASTLANE_TEEN";
    UserReferralLinkModelReferralLinkTypeEnum["PRIMARY"] = "PRIMARY";
})(UserReferralLinkModelReferralLinkTypeEnum || (UserReferralLinkModelReferralLinkTypeEnum = {}));
