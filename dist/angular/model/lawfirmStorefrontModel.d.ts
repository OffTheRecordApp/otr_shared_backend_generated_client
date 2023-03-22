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
export interface LawfirmStorefrontModel {
    aboutUsBlurb?: string;
    activeCaseCount?: number;
    averageRating?: number;
    coverPhotoUrl?: string;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmState?: LawfirmStorefrontModel.LawfirmStateEnum;
    profilePictureUrl?: string;
    resolvedCaseCount?: number;
    reviewCount?: number;
    reviewToDisplay?: string;
    reviewerName?: string;
    seoUrl?: string;
    tagLine?: string;
    vacationModeOn?: boolean;
    website?: string;
}
export declare namespace LawfirmStorefrontModel {
    type LawfirmStateEnum = 'ACCOUNT_CLOSED' | 'DUPLICATE' | 'ESTABLISHED' | 'FUTURE_LEAD' | 'IN_TRIAL' | 'LAWFIRM_INTERESTED' | 'LAWFIRM_LEAD' | 'LAWFIRM_NOT_INTERESTED' | 'NOT_INTERESTED_FEE_SPLITTING_ETHICS' | 'NOT_INTERESTED_REFUND_ETHICS' | 'ONBOARDING' | 'TEMPORARILY_TURNED_OFF' | 'TERMINATED_FRAUD' | 'TERMINATED_POOR_SERVICE' | 'TERMINATED_POOR_SUCCESS' | 'UNDER_REVIEW';
    const LawfirmStateEnum: {
        AccountClosed: LawfirmStateEnum;
        Duplicate: LawfirmStateEnum;
        Established: LawfirmStateEnum;
        FutureLead: LawfirmStateEnum;
        InTrial: LawfirmStateEnum;
        LawfirmInterested: LawfirmStateEnum;
        LawfirmLead: LawfirmStateEnum;
        LawfirmNotInterested: LawfirmStateEnum;
        NotInterestedFeeSplittingEthics: LawfirmStateEnum;
        NotInterestedRefundEthics: LawfirmStateEnum;
        Onboarding: LawfirmStateEnum;
        TemporarilyTurnedOff: LawfirmStateEnum;
        TerminatedFraud: LawfirmStateEnum;
        TerminatedPoorService: LawfirmStateEnum;
        TerminatedPoorSuccess: LawfirmStateEnum;
        UnderReview: LawfirmStateEnum;
    };
}