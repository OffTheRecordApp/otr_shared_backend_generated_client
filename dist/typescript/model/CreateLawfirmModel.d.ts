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
export interface CreateLawfirmModel {
    "aboutUsBlurb"?: string;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isTestLawfirm"?: boolean;
    "lawfirmName"?: string;
    "lawfirmPaymentModel"?: CreateLawfirmModel.LawfirmPaymentModelEnum;
    "lawfirmState"?: CreateLawfirmModel.LawfirmStateEnum;
    "membershipStartDateUtc"?: string;
    "otrNotes"?: string;
    "primaryEmailAddress"?: string;
    "primaryPhoneNumber"?: string;
    "profilePictureUrl"?: string;
    "tagLine"?: string;
    "website"?: string;
}
export declare namespace CreateLawfirmModel {
    enum LawfirmPaymentModelEnum {
        DESTINATIONACCOUNT,
        SEPARATECHARGE,
        TRANSFERDEDUCTION
    }
    enum LawfirmStateEnum {
        ACCOUNTCLOSED,
        ACTIVE,
        BLACKLISTED,
        DEMOCOMPLETED,
        DUPLICATE,
        FUTURELEAD,
        LEAD,
        NEWPARTNER,
        NOTAGOODFIT,
        NOTINTERESTEDDONOTCONTACT,
        NOTINTERESTEDFEESPLITTING,
        NOTINTERESTEDMARKETINGFEE,
        NOTINTERESTEDMONEYBACKGUARANTEE,
        NOTINTERESTEDPLATFORMRESISTANCE,
        PASTINTEREST,
        SUPERVISED,
        TEMPORARILYTURNEDOFF,
        TERMINATEDFRAUD,
        TERMINATEDPOORSERVICE,
        TERMINATEDPOORSUCCESS
    }
}
