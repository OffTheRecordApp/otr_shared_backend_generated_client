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
export function AlertFromJSON(json) {
    return AlertFromJSONTyped(json, false);
}
export function AlertFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'alertId': !exists(json, 'alertId') ? undefined : json['alertId'],
        'alertType': !exists(json, 'alertType') ? undefined : json['alertType'],
        'bannerMessage': !exists(json, 'bannerMessage') ? undefined : json['bannerMessage'],
        'clickThruUrl': !exists(json, 'clickThruUrl') ? undefined : json['clickThruUrl'],
        'hexColor': !exists(json, 'hexColor') ? undefined : json['hexColor'],
    };
}
export function AlertToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionType': value.actionType,
        'alertId': value.alertId,
        'alertType': value.alertType,
        'bannerMessage': value.bannerMessage,
        'clickThruUrl': value.clickThruUrl,
        'hexColor': value.hexColor,
    };
}
/**
* @export
* @enum {string}
*/
export var AlertActionTypeEnum;
(function (AlertActionTypeEnum) {
    AlertActionTypeEnum["ANNOUNCEMENT"] = "ANNOUNCEMENT";
    AlertActionTypeEnum["ENGAGEMENTLETTER"] = "ENGAGEMENT_LETTER";
})(AlertActionTypeEnum || (AlertActionTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var AlertAlertTypeEnum;
(function (AlertAlertTypeEnum) {
    AlertAlertTypeEnum["ERROR"] = "ERROR";
    AlertAlertTypeEnum["INFO"] = "INFO";
    AlertAlertTypeEnum["SUCCESS"] = "SUCCESS";
    AlertAlertTypeEnum["WARNING"] = "WARNING";
})(AlertAlertTypeEnum || (AlertAlertTypeEnum = {}));