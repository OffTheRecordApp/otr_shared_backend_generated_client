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
export interface GetLawfirmModel {
    "aboutUsBlurb"?: string;
    "address"?: models.AddressDomain;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isLawfirmDisabled"?: boolean;
    "isLawfirmNotWithCompany"?: boolean;
    "isTestLawfirm"?: boolean;
    "languagesServed"?: Array<string>;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPaymentModel"?: GetLawfirmModel.LawfirmPaymentModelEnum;
    "lawfirmState"?: GetLawfirmModel.LawfirmStateEnum;
    "membershipStartDateUtc"?: string;
    "otrNotes"?: string;
    "primaryEmailAddress"?: string;
    "primaryPhoneNumber"?: string;
    "profilePictureUrl"?: string;
    "redirects"?: Array<models.LawfirmRedirectModel>;
    "seoUrl"?: string;
    "settings"?: models.LawfirmSettingsDomainRes;
    "supportedStates"?: Array<GetLawfirmModel.SupportedStatesEnum>;
    "tagLine"?: string;
    "website"?: string;
}
export declare namespace GetLawfirmModel {
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
    enum SupportedStatesEnum {
        AK,
        AL,
        AR,
        AZ,
        CA,
        CO,
        CT,
        DC,
        DE,
        FL,
        GA,
        HI,
        IA,
        ID,
        IL,
        IN,
        KS,
        KY,
        LA,
        MA,
        MD,
        ME,
        MI,
        MN,
        MO,
        MS,
        MT,
        NC,
        ND,
        NE,
        NH,
        NJ,
        NM,
        NV,
        NY,
        OH,
        OK,
        OR,
        PA,
        RI,
        SC,
        SD,
        TN,
        TX,
        UT,
        VA,
        VT,
        WA,
        WI,
        WV,
        WY
    }
}
