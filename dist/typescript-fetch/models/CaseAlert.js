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
export function CaseAlertFromJSON(json) {
    return CaseAlertFromJSONTyped(json, false);
}
export function CaseAlertFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'alertType': !exists(json, 'alertType') ? undefined : json['alertType'],
        'bannerMessage': !exists(json, 'bannerMessage') ? undefined : json['bannerMessage'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'clickThruUrl': !exists(json, 'clickThruUrl') ? undefined : json['clickThruUrl'],
        'hexColor': !exists(json, 'hexColor') ? undefined : json['hexColor'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
    };
}
export function CaseAlertToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionType': value.actionType,
        'alertType': value.alertType,
        'bannerMessage': value.bannerMessage,
        'caseId': value.caseId,
        'clickThruUrl': value.clickThruUrl,
        'hexColor': value.hexColor,
        'lawfirmId': value.lawfirmId,
    };
}
/**
* @export
* @enum {string}
*/
export var CaseAlertActionTypeEnum;
(function (CaseAlertActionTypeEnum) {
    CaseAlertActionTypeEnum["ANNOUNCEMENT"] = "ANNOUNCEMENT";
    CaseAlertActionTypeEnum["ENGAGEMENTLETTER"] = "ENGAGEMENT_LETTER";
})(CaseAlertActionTypeEnum || (CaseAlertActionTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var CaseAlertAlertTypeEnum;
(function (CaseAlertAlertTypeEnum) {
    CaseAlertAlertTypeEnum["ERROR"] = "ERROR";
    CaseAlertAlertTypeEnum["INFO"] = "INFO";
    CaseAlertAlertTypeEnum["SUCCESS"] = "SUCCESS";
    CaseAlertAlertTypeEnum["WARNING"] = "WARNING";
})(CaseAlertAlertTypeEnum || (CaseAlertAlertTypeEnum = {}));
