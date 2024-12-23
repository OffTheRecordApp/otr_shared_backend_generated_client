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
export function SetReferralSourceRequestFromJSON(json) {
    return SetReferralSourceRequestFromJSONTyped(json, false);
}
export function SetReferralSourceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'isFromAdvertisement': !exists(json, 'isFromAdvertisement') ? undefined : json['isFromAdvertisement'],
        'otherNote': !exists(json, 'otherNote') ? undefined : json['otherNote'],
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'referralSourceData': !exists(json, 'referralSourceData') ? undefined : json['referralSourceData'],
        'referrerEmail': !exists(json, 'referrerEmail') ? undefined : json['referrerEmail'],
        'referrerName': !exists(json, 'referrerName') ? undefined : json['referrerName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userReferralSourceTypeId': !exists(json, 'userReferralSourceTypeId') ? undefined : json['userReferralSourceTypeId'],
    };
}
export function SetReferralSourceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientType': value.clientType,
        'isFromAdvertisement': value.isFromAdvertisement,
        'otherNote': value.otherNote,
        'referralCode': value.referralCode,
        'referralSourceData': value.referralSourceData,
        'referrerEmail': value.referrerEmail,
        'referrerName': value.referrerName,
        'userId': value.userId,
        'userReferralSourceTypeId': value.userReferralSourceTypeId,
    };
}
/**
* @export
* @enum {string}
*/
export var SetReferralSourceRequestClientTypeEnum;
(function (SetReferralSourceRequestClientTypeEnum) {
    SetReferralSourceRequestClientTypeEnum["ANDROID"] = "ANDROID";
    SetReferralSourceRequestClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    SetReferralSourceRequestClientTypeEnum["DMVGO"] = "DMV_GO";
    SetReferralSourceRequestClientTypeEnum["DMVORG"] = "DMV_ORG";
    SetReferralSourceRequestClientTypeEnum["EMAIL"] = "EMAIL";
    SetReferralSourceRequestClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    SetReferralSourceRequestClientTypeEnum["IOS"] = "IOS";
    SetReferralSourceRequestClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    SetReferralSourceRequestClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    SetReferralSourceRequestClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    SetReferralSourceRequestClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    SetReferralSourceRequestClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    SetReferralSourceRequestClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    SetReferralSourceRequestClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    SetReferralSourceRequestClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    SetReferralSourceRequestClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    SetReferralSourceRequestClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    SetReferralSourceRequestClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    SetReferralSourceRequestClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    SetReferralSourceRequestClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    SetReferralSourceRequestClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    SetReferralSourceRequestClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(SetReferralSourceRequestClientTypeEnum || (SetReferralSourceRequestClientTypeEnum = {}));
