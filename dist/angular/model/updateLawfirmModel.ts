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
    aboutUsBlurb?: string;
    caseAssignmentPriority?: number;
    coverPhotoUrl?: string;
    createdBy?: number;
    establishedDateUtc?: string;
    establishedYear?: number;
    isTestLawfirm?: boolean;
    languagesServed?: Array<string>;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmPaymentModel?: UpdateLawfirmModel.LawfirmPaymentModelEnum;
    lawfirmState?: UpdateLawfirmModel.LawfirmStateEnum;
    membershipStartDateUtc?: string;
    otrNotes?: string;
    primaryEmailAddress?: string;
    primaryPhoneNumber?: string;
    profilePictureUrl?: string;
    tagLine?: string;
    website?: string;
}
export namespace UpdateLawfirmModel {
    export type LawfirmPaymentModelEnum = 'DESTINATION_ACCOUNT' | 'SEPARATE_CHARGE' | 'TRANSFER_DEDUCTION';
    export const LawfirmPaymentModelEnum = {
        DestinationAccount: 'DESTINATION_ACCOUNT' as LawfirmPaymentModelEnum,
        SeparateCharge: 'SEPARATE_CHARGE' as LawfirmPaymentModelEnum,
        TransferDeduction: 'TRANSFER_DEDUCTION' as LawfirmPaymentModelEnum
    };
    export type LawfirmStateEnum = 'ACCOUNT_CLOSED' | 'ACTIVE' | 'BLACKLISTED' | 'DEMO_COMPLETED' | 'DUPLICATE' | 'FUTURE_LEAD' | 'LEAD' | 'NEW_PARTNER' | 'NOT_A_GOOD_FIT' | 'NOT_INTERESTED_DO_NOT_CONTACT' | 'NOT_INTERESTED_FEE_SPLITTING' | 'NOT_INTERESTED_MARKETING_FEE' | 'NOT_INTERESTED_MONEY_BACK_GUARANTEE' | 'NOT_INTERESTED_PLATFORM_RESISTANCE' | 'PAST_INTEREST' | 'SUPERVISED' | 'TEMPORARILY_TURNED_OFF' | 'TERMINATED_FRAUD' | 'TERMINATED_GENERIC' | 'TERMINATED_POOR_SERVICE' | 'TERMINATED_POOR_SUCCESS';
    export const LawfirmStateEnum = {
        AccountClosed: 'ACCOUNT_CLOSED' as LawfirmStateEnum,
        Active: 'ACTIVE' as LawfirmStateEnum,
        Blacklisted: 'BLACKLISTED' as LawfirmStateEnum,
        DemoCompleted: 'DEMO_COMPLETED' as LawfirmStateEnum,
        Duplicate: 'DUPLICATE' as LawfirmStateEnum,
        FutureLead: 'FUTURE_LEAD' as LawfirmStateEnum,
        Lead: 'LEAD' as LawfirmStateEnum,
        NewPartner: 'NEW_PARTNER' as LawfirmStateEnum,
        NotAGoodFit: 'NOT_A_GOOD_FIT' as LawfirmStateEnum,
        NotInterestedDoNotContact: 'NOT_INTERESTED_DO_NOT_CONTACT' as LawfirmStateEnum,
        NotInterestedFeeSplitting: 'NOT_INTERESTED_FEE_SPLITTING' as LawfirmStateEnum,
        NotInterestedMarketingFee: 'NOT_INTERESTED_MARKETING_FEE' as LawfirmStateEnum,
        NotInterestedMoneyBackGuarantee: 'NOT_INTERESTED_MONEY_BACK_GUARANTEE' as LawfirmStateEnum,
        NotInterestedPlatformResistance: 'NOT_INTERESTED_PLATFORM_RESISTANCE' as LawfirmStateEnum,
        PastInterest: 'PAST_INTEREST' as LawfirmStateEnum,
        Supervised: 'SUPERVISED' as LawfirmStateEnum,
        TemporarilyTurnedOff: 'TEMPORARILY_TURNED_OFF' as LawfirmStateEnum,
        TerminatedFraud: 'TERMINATED_FRAUD' as LawfirmStateEnum,
        TerminatedGeneric: 'TERMINATED_GENERIC' as LawfirmStateEnum,
        TerminatedPoorService: 'TERMINATED_POOR_SERVICE' as LawfirmStateEnum,
        TerminatedPoorSuccess: 'TERMINATED_POOR_SUCCESS' as LawfirmStateEnum
    };
}


