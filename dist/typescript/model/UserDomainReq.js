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
exports.UserDomainReq = void 0;
var UserDomainReq;
(function (UserDomainReq) {
    var GenderTypeEnum;
    (function (GenderTypeEnum) {
        GenderTypeEnum[GenderTypeEnum["FEMALE"] = 'FEMALE'] = "FEMALE";
        GenderTypeEnum[GenderTypeEnum["MALE"] = 'MALE'] = "MALE";
        GenderTypeEnum[GenderTypeEnum["NOTLISTED"] = 'NOT_LISTED'] = "NOTLISTED";
    })(GenderTypeEnum = UserDomainReq.GenderTypeEnum || (UserDomainReq.GenderTypeEnum = {}));
    var LawyerJobTitleEnum;
    (function (LawyerJobTitleEnum) {
        LawyerJobTitleEnum[LawyerJobTitleEnum["ACCOUNTANT"] = 'ACCOUNTANT'] = "ACCOUNTANT";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEY"] = 'ATTORNEY'] = "ATTORNEY";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEYASSOCIATE"] = 'ATTORNEY_ASSOCIATE'] = "ATTORNEYASSOCIATE";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEYCOUNSEL"] = 'ATTORNEY_COUNSEL'] = "ATTORNEYCOUNSEL";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEYMANAGINGPARTNER"] = 'ATTORNEY_MANAGING_PARTNER'] = "ATTORNEYMANAGINGPARTNER";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEYPARTNER"] = 'ATTORNEY_PARTNER'] = "ATTORNEYPARTNER";
        LawyerJobTitleEnum[LawyerJobTitleEnum["ATTORNEYSTAFF"] = 'ATTORNEY_STAFF'] = "ATTORNEYSTAFF";
        LawyerJobTitleEnum[LawyerJobTitleEnum["CUSTOMERSERVICEREP"] = 'CUSTOMER_SERVICE_REP'] = "CUSTOMERSERVICEREP";
        LawyerJobTitleEnum[LawyerJobTitleEnum["LEGALASSISTANT"] = 'LEGAL_ASSISTANT'] = "LEGALASSISTANT";
        LawyerJobTitleEnum[LawyerJobTitleEnum["LEGALINTERN"] = 'LEGAL_INTERN'] = "LEGALINTERN";
        LawyerJobTitleEnum[LawyerJobTitleEnum["LEGALSECRETARY"] = 'LEGAL_SECRETARY'] = "LEGALSECRETARY";
        LawyerJobTitleEnum[LawyerJobTitleEnum["OTHER"] = 'OTHER'] = "OTHER";
        LawyerJobTitleEnum[LawyerJobTitleEnum["PARALEGAL"] = 'PARALEGAL'] = "PARALEGAL";
    })(LawyerJobTitleEnum = UserDomainReq.LawyerJobTitleEnum || (UserDomainReq.LawyerJobTitleEnum = {}));
    var LoginProviderEnum;
    (function (LoginProviderEnum) {
        LoginProviderEnum[LoginProviderEnum["APPLE"] = 'APPLE'] = "APPLE";
        LoginProviderEnum[LoginProviderEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        LoginProviderEnum[LoginProviderEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        LoginProviderEnum[LoginProviderEnum["GOOGLE"] = 'GOOGLE'] = "GOOGLE";
        LoginProviderEnum[LoginProviderEnum["PHONE"] = 'PHONE'] = "PHONE";
        LoginProviderEnum[LoginProviderEnum["TWITTER"] = 'TWITTER'] = "TWITTER";
        LoginProviderEnum[LoginProviderEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(LoginProviderEnum = UserDomainReq.LoginProviderEnum || (UserDomainReq.LoginProviderEnum = {}));
    var PrivacyModeEnum;
    (function (PrivacyModeEnum) {
        PrivacyModeEnum[PrivacyModeEnum["FRIENDS"] = 'FRIENDS'] = "FRIENDS";
        PrivacyModeEnum[PrivacyModeEnum["PRIVATE"] = 'PRIVATE'] = "PRIVATE";
        PrivacyModeEnum[PrivacyModeEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        PrivacyModeEnum[PrivacyModeEnum["SEMIPUBLIC"] = 'SEMI_PUBLIC'] = "SEMIPUBLIC";
    })(PrivacyModeEnum = UserDomainReq.PrivacyModeEnum || (UserDomainReq.PrivacyModeEnum = {}));
    var RaceEnum;
    (function (RaceEnum) {
        RaceEnum[RaceEnum["ASIAN"] = 'ASIAN'] = "ASIAN";
        RaceEnum[RaceEnum["BLACK"] = 'BLACK'] = "BLACK";
        RaceEnum[RaceEnum["HISPANIC"] = 'HISPANIC'] = "HISPANIC";
        RaceEnum[RaceEnum["MIDDLEEASTERN"] = 'MIDDLE_EASTERN'] = "MIDDLEEASTERN";
        RaceEnum[RaceEnum["NATIVE"] = 'NATIVE'] = "NATIVE";
        RaceEnum[RaceEnum["PACIFICISLANDER"] = 'PACIFIC_ISLANDER'] = "PACIFICISLANDER";
        RaceEnum[RaceEnum["TWOORMORE"] = 'TWO_OR_MORE'] = "TWOORMORE";
        RaceEnum[RaceEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        RaceEnum[RaceEnum["WHITE"] = 'WHITE'] = "WHITE";
    })(RaceEnum = UserDomainReq.RaceEnum || (UserDomainReq.RaceEnum = {}));
})(UserDomainReq = exports.UserDomainReq || (exports.UserDomainReq = {}));
