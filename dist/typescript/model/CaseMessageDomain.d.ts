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
export interface CaseMessageDomain {
    "authorFirstname"?: string;
    "authorLastname"?: string;
    "authorProfilePicUrl"?: string;
    "authorRoleType"?: CaseMessageDomain.AuthorRoleTypeEnum;
    "authorUserId"?: number;
    "isDeleted"?: boolean;
    "mediaType"?: CaseMessageDomain.MediaTypeEnum;
    "mediaUrl"?: string;
    "messageBody"?: string;
    "messageId"?: number;
    "messageSentDateUtc"?: string;
}
export declare namespace CaseMessageDomain {
    enum AuthorRoleTypeEnum {
        ADMIN,
        DEFENDANT,
        LAWFIRMADMIN,
        LAWYER,
        PARTNER,
        UNKNOWN
    }
    enum MediaTypeEnum {
        IMAGE,
        PDF
    }
}