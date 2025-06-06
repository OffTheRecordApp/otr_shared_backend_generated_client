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
export function LastLoginItemFromJSON(json) {
    return LastLoginItemFromJSONTyped(json, false);
}
export function LastLoginItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'lastLoginDateUtc': !exists(json, 'lastLoginDateUtc') ? undefined : (new Date(json['lastLoginDateUtc'])),
    };
}
export function LastLoginItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientType': value.clientType,
        'lastLoginDateUtc': value.lastLoginDateUtc === undefined ? undefined : (value.lastLoginDateUtc.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var LastLoginItemClientTypeEnum;
(function (LastLoginItemClientTypeEnum) {
    LastLoginItemClientTypeEnum["ANDROID"] = "ANDROID";
    LastLoginItemClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    LastLoginItemClientTypeEnum["DMVGO"] = "DMV_GO";
    LastLoginItemClientTypeEnum["DMVORG"] = "DMV_ORG";
    LastLoginItemClientTypeEnum["EMAIL"] = "EMAIL";
    LastLoginItemClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    LastLoginItemClientTypeEnum["IOS"] = "IOS";
    LastLoginItemClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    LastLoginItemClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    LastLoginItemClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    LastLoginItemClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    LastLoginItemClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    LastLoginItemClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    LastLoginItemClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    LastLoginItemClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    LastLoginItemClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    LastLoginItemClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    LastLoginItemClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    LastLoginItemClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    LastLoginItemClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    LastLoginItemClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    LastLoginItemClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(LastLoginItemClientTypeEnum || (LastLoginItemClientTypeEnum = {}));
