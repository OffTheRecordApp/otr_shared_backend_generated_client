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
import * as models from './models';
export interface GhostUser {
    "clientType"?: GhostUser.ClientTypeEnum;
    "dob"?: string;
    "driverLicenseNumber"?: string;
    "emailAddress"?: string;
    "firstname"?: string;
    "gender"?: GhostUser.GenderEnum;
    "lastname"?: string;
    "password"?: string;
    "phoneNumbers"?: Array<models.PhoneNumberDomain>;
    "race"?: GhostUser.RaceEnum;
}
export declare namespace GhostUser {
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
        EMAIL,
        FRESHDESK,
        IOS,
        LOCALHOST,
        MOBILEWEBAPP,
        OTRADMINCONSOLE,
        OTRADMINCONSOLEDEVO,
        OTRADMINCONSOLELOCALHOST,
        OTREXPLORER,
        OTRJOBSCHEDULER,
        OTRLAWFIRMPORTAL,
        OTRLAWFIRMPORTALDEVO,
        OTRLAWFIRMPORTALLOCALHOST,
        OTRWEBSITE,
        OTRWEBSITEDEVO,
        OTRWEBSITELOCALHOST,
        OTRWIDGET,
        UNKNOWN
    }
    enum GenderEnum {
        FEMALE,
        MALE,
        NOTAVAILABLE,
        NOTLISTED,
        UNVERIFIED,
        X
    }
    enum RaceEnum {
        ASIAN,
        BLACK,
        HISPANIC,
        MIDDLEEASTERN,
        NATIVE,
        NOTAVAILABLE,
        PACIFICISLANDER,
        TWOORMORE,
        UNKNOWN,
        UNVERIFIED,
        WHITE
    }
}
