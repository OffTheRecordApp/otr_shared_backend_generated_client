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
export interface GetInviteByTokenResponse {
    "emailAddress"?: string;
    "fullName"?: string;
    "hasAccount"?: boolean;
    "inviteeFirstName"?: string;
    "inviteeLastName"?: string;
    "inviteeRoleType"?: GetInviteByTokenResponse.InviteeRoleTypeEnum;
    "inviteeUserId"?: number;
    "lawyerInvite"?: models.LawyerInviteByTokenModel;
    "profilePictureUrl"?: string;
    "userId"?: number;
    "verificationStatus"?: GetInviteByTokenResponse.VerificationStatusEnum;
}
export declare namespace GetInviteByTokenResponse {
    enum InviteeRoleTypeEnum {
        ADMIN,
        DEFENDANT,
        LAWFIRMADMIN,
        LAWYER,
        PARTNER,
        UNKNOWN
    }
    enum VerificationStatusEnum {
        CANCELLED,
        PENDING,
        VERIFIED
    }
}
