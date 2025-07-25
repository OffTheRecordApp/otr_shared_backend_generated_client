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
export interface UpdateLawfirmModel {
    "aboutUsBlurb"?: string;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isTestLawfirm"?: boolean;
    "languagesServed"?: Array<string>;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPaymentModel"?: UpdateLawfirmModel.LawfirmPaymentModelEnum;
    "lawfirmState"?: UpdateLawfirmModel.LawfirmStateEnum;
    "membershipStartDateUtc"?: string;
    "otrNotes"?: string;
    "primaryEmailAddress"?: string;
    "primaryPhoneNumber"?: string;
    "profilePictureUrl"?: string;
    "tagLine"?: string;
    "website"?: string;
}
export declare namespace UpdateLawfirmModel {
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
        TERMINATEDGENERIC,
        TERMINATEDPOORSERVICE,
        TERMINATEDPOORSUCCESS
    }
}
