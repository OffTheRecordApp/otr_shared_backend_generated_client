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
    export type LawfirmStateEnum = 'ACCOUNT_CLOSED' | 'DUPLICATE' | 'ESTABLISHED' | 'FUTURE_LEAD' | 'IN_TRIAL' | 'LAWFIRM_INTERESTED' | 'LAWFIRM_LEAD' | 'LAWFIRM_NOT_INTERESTED' | 'NOT_INTERESTED_FEE_SPLITTING_ETHICS' | 'NOT_INTERESTED_REFUND_ETHICS' | 'ONBOARDING' | 'TEMPORARILY_TURNED_OFF' | 'TERMINATED_FRAUD' | 'TERMINATED_POOR_SERVICE' | 'TERMINATED_POOR_SUCCESS' | 'UNDER_REVIEW';
    export const LawfirmStateEnum = {
        AccountClosed: 'ACCOUNT_CLOSED' as LawfirmStateEnum,
        Duplicate: 'DUPLICATE' as LawfirmStateEnum,
        Established: 'ESTABLISHED' as LawfirmStateEnum,
        FutureLead: 'FUTURE_LEAD' as LawfirmStateEnum,
        InTrial: 'IN_TRIAL' as LawfirmStateEnum,
        LawfirmInterested: 'LAWFIRM_INTERESTED' as LawfirmStateEnum,
        LawfirmLead: 'LAWFIRM_LEAD' as LawfirmStateEnum,
        LawfirmNotInterested: 'LAWFIRM_NOT_INTERESTED' as LawfirmStateEnum,
        NotInterestedFeeSplittingEthics: 'NOT_INTERESTED_FEE_SPLITTING_ETHICS' as LawfirmStateEnum,
        NotInterestedRefundEthics: 'NOT_INTERESTED_REFUND_ETHICS' as LawfirmStateEnum,
        Onboarding: 'ONBOARDING' as LawfirmStateEnum,
        TemporarilyTurnedOff: 'TEMPORARILY_TURNED_OFF' as LawfirmStateEnum,
        TerminatedFraud: 'TERMINATED_FRAUD' as LawfirmStateEnum,
        TerminatedPoorService: 'TERMINATED_POOR_SERVICE' as LawfirmStateEnum,
        TerminatedPoorSuccess: 'TERMINATED_POOR_SUCCESS' as LawfirmStateEnum,
        UnderReview: 'UNDER_REVIEW' as LawfirmStateEnum
    };
}


