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
export function LastLoginDateModelFromJSON(json) {
    return LastLoginDateModelFromJSONTyped(json, false);
}
export function LastLoginDateModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'loginDateUtc': !exists(json, 'loginDateUtc') ? undefined : (new Date(json['loginDateUtc'])),
    };
}
export function LastLoginDateModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientType': value.clientType,
        'loginDateUtc': value.loginDateUtc === undefined ? undefined : (value.loginDateUtc.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var LastLoginDateModelClientTypeEnum;
(function (LastLoginDateModelClientTypeEnum) {
    LastLoginDateModelClientTypeEnum["ANDROID"] = "ANDROID";
    LastLoginDateModelClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    LastLoginDateModelClientTypeEnum["DMVGO"] = "DMV_GO";
    LastLoginDateModelClientTypeEnum["DMVORG"] = "DMV_ORG";
    LastLoginDateModelClientTypeEnum["EMAIL"] = "EMAIL";
    LastLoginDateModelClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    LastLoginDateModelClientTypeEnum["IOS"] = "IOS";
    LastLoginDateModelClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    LastLoginDateModelClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    LastLoginDateModelClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    LastLoginDateModelClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    LastLoginDateModelClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    LastLoginDateModelClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    LastLoginDateModelClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    LastLoginDateModelClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    LastLoginDateModelClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    LastLoginDateModelClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    LastLoginDateModelClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    LastLoginDateModelClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    LastLoginDateModelClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    LastLoginDateModelClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    LastLoginDateModelClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(LastLoginDateModelClientTypeEnum || (LastLoginDateModelClientTypeEnum = {}));
