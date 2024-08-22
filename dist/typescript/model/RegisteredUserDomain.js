"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredUserDomain = void 0;
var RegisteredUserDomain;
(function (RegisteredUserDomain) {
    var ClientTypeEnum;
    (function (ClientTypeEnum) {
        ClientTypeEnum[ClientTypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        ClientTypeEnum[ClientTypeEnum["DESKTOPWEBAPP"] = 'DESKTOP_WEBAPP'] = "DESKTOPWEBAPP";
        ClientTypeEnum[ClientTypeEnum["DMVGO"] = 'DMV_GO'] = "DMVGO";
        ClientTypeEnum[ClientTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
        ClientTypeEnum[ClientTypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        ClientTypeEnum[ClientTypeEnum["FRESHDESK"] = 'FRESH_DESK'] = "FRESHDESK";
        ClientTypeEnum[ClientTypeEnum["IOS"] = 'IOS'] = "IOS";
        ClientTypeEnum[ClientTypeEnum["LOCALHOST"] = 'LOCALHOST'] = "LOCALHOST";
        ClientTypeEnum[ClientTypeEnum["MOBILEWEBAPP"] = 'MOBILE_WEBAPP'] = "MOBILEWEBAPP";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLE"] = 'OTR_ADMIN_CONSOLE'] = "OTRADMINCONSOLE";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLEDEVO"] = 'OTR_ADMIN_CONSOLE_DEVO'] = "OTRADMINCONSOLEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = 'OTR_ADMIN_CONSOLE_LOCALHOST'] = "OTRADMINCONSOLELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTREXPLORER"] = 'OTR_EXPLORER'] = "OTREXPLORER";
        ClientTypeEnum[ClientTypeEnum["OTRJOBSCHEDULER"] = 'OTR_JOB_SCHEDULER'] = "OTRJOBSCHEDULER";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTAL"] = 'OTR_LAWFIRM_PORTAL'] = "OTRLAWFIRMPORTAL";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = 'OTR_LAWFIRM_PORTAL_DEVO'] = "OTRLAWFIRMPORTALDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = 'OTR_LAWFIRM_PORTAL_LOCALHOST'] = "OTRLAWFIRMPORTALLOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITE"] = 'OTR_WEBSITE'] = "OTRWEBSITE";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITEDEVO"] = 'OTR_WEBSITE_DEVO'] = "OTRWEBSITEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITELOCALHOST"] = 'OTR_WEBSITE_LOCALHOST'] = "OTRWEBSITELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWIDGET"] = 'OTR_WIDGET'] = "OTRWIDGET";
        ClientTypeEnum[ClientTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(ClientTypeEnum = RegisteredUserDomain.ClientTypeEnum || (RegisteredUserDomain.ClientTypeEnum = {}));
    var GenderTypeEnum;
    (function (GenderTypeEnum) {
        GenderTypeEnum[GenderTypeEnum["FEMALE"] = 'FEMALE'] = "FEMALE";
        GenderTypeEnum[GenderTypeEnum["MALE"] = 'MALE'] = "MALE";
        GenderTypeEnum[GenderTypeEnum["NOTAVAILABLE"] = 'NOT_AVAILABLE'] = "NOTAVAILABLE";
        GenderTypeEnum[GenderTypeEnum["NOTLISTED"] = 'NOT_LISTED'] = "NOTLISTED";
        GenderTypeEnum[GenderTypeEnum["UNVERIFIED"] = 'UNVERIFIED'] = "UNVERIFIED";
    })(GenderTypeEnum = RegisteredUserDomain.GenderTypeEnum || (RegisteredUserDomain.GenderTypeEnum = {}));
    var LoginProviderEnum;
    (function (LoginProviderEnum) {
        LoginProviderEnum[LoginProviderEnum["APPLE"] = 'APPLE'] = "APPLE";
        LoginProviderEnum[LoginProviderEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        LoginProviderEnum[LoginProviderEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        LoginProviderEnum[LoginProviderEnum["GOOGLE"] = 'GOOGLE'] = "GOOGLE";
        LoginProviderEnum[LoginProviderEnum["PHONE"] = 'PHONE'] = "PHONE";
        LoginProviderEnum[LoginProviderEnum["TWITTER"] = 'TWITTER'] = "TWITTER";
        LoginProviderEnum[LoginProviderEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(LoginProviderEnum = RegisteredUserDomain.LoginProviderEnum || (RegisteredUserDomain.LoginProviderEnum = {}));
    var RaceEnum;
    (function (RaceEnum) {
        RaceEnum[RaceEnum["ASIAN"] = 'ASIAN'] = "ASIAN";
        RaceEnum[RaceEnum["BLACK"] = 'BLACK'] = "BLACK";
        RaceEnum[RaceEnum["HISPANIC"] = 'HISPANIC'] = "HISPANIC";
        RaceEnum[RaceEnum["MIDDLEEASTERN"] = 'MIDDLE_EASTERN'] = "MIDDLEEASTERN";
        RaceEnum[RaceEnum["NATIVE"] = 'NATIVE'] = "NATIVE";
        RaceEnum[RaceEnum["NOTAVAILABLE"] = 'NOT_AVAILABLE'] = "NOTAVAILABLE";
        RaceEnum[RaceEnum["PACIFICISLANDER"] = 'PACIFIC_ISLANDER'] = "PACIFICISLANDER";
        RaceEnum[RaceEnum["TWOORMORE"] = 'TWO_OR_MORE'] = "TWOORMORE";
        RaceEnum[RaceEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        RaceEnum[RaceEnum["UNVERIFIED"] = 'UNVERIFIED'] = "UNVERIFIED";
        RaceEnum[RaceEnum["WHITE"] = 'WHITE'] = "WHITE";
    })(RaceEnum = RegisteredUserDomain.RaceEnum || (RegisteredUserDomain.RaceEnum = {}));
})(RegisteredUserDomain = exports.RegisteredUserDomain || (exports.RegisteredUserDomain = {}));
