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

export interface UpdateLawfirmModel {
    "aboutUsBlurb"?: string;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isTestLawfirm"?: boolean;
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

export namespace UpdateLawfirmModel {
    export enum LawfirmPaymentModelEnum {
        DESTINATIONACCOUNT = <any> 'DESTINATION_ACCOUNT',
        SEPARATECHARGE = <any> 'SEPARATE_CHARGE',
        TRANSFERDEDUCTION = <any> 'TRANSFER_DEDUCTION'
    }
    export enum LawfirmStateEnum {
        ACCOUNTCLOSED = <any> 'ACCOUNT_CLOSED',
        DUPLICATE = <any> 'DUPLICATE',
        ESTABLISHED = <any> 'ESTABLISHED',
        FUTURELEAD = <any> 'FUTURE_LEAD',
        INTRIAL = <any> 'IN_TRIAL',
        LAWFIRMINTERESTED = <any> 'LAWFIRM_INTERESTED',
        LAWFIRMLEAD = <any> 'LAWFIRM_LEAD',
        LAWFIRMNOTINTERESTED = <any> 'LAWFIRM_NOT_INTERESTED',
        NOTINTERESTEDFEESPLITTINGETHICS = <any> 'NOT_INTERESTED_FEE_SPLITTING_ETHICS',
        NOTINTERESTEDREFUNDETHICS = <any> 'NOT_INTERESTED_REFUND_ETHICS',
        ONBOARDING = <any> 'ONBOARDING',
        TEMPORARILYTURNEDOFF = <any> 'TEMPORARILY_TURNED_OFF',
        TERMINATEDFRAUD = <any> 'TERMINATED_FRAUD',
        TERMINATEDPOORSERVICE = <any> 'TERMINATED_POOR_SERVICE',
        TERMINATEDPOORSUCCESS = <any> 'TERMINATED_POOR_SUCCESS',
        UNDERREVIEW = <any> 'UNDER_REVIEW'
    }
}
