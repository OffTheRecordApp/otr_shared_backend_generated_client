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
export interface PhoneNumberDomain {
    "countryCode"?: string;
    "creationDateUtc"?: models.Timestamp;
    "entityType"?: PhoneNumberDomain.EntityTypeEnum;
    "extension"?: string;
    "lastUpdatedDateUtc"?: models.Timestamp;
    "phoneNumber"?: string;
    "phoneNumberId"?: number;
    "referenceId"?: number;
    "type"?: PhoneNumberDomain.TypeEnum;
    "verificationDateUtc"?: string;
}
export declare namespace PhoneNumberDomain {
    enum EntityTypeEnum {
        CASE,
        CASEPAYMENT,
        CITATION,
        COURT,
        LAWFIRM,
        LAWFIRMCASE,
        LAWYER,
        LINEITEM,
        STRIPECHARGE,
        USER
    }
    enum TypeEnum {
        HOME,
        MOBILE,
        NOTSPECIFIED,
        OFFICE
    }
}
