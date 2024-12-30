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
export interface ActivityFeedModel {
    "activityDate"?: string;
    "activityDescription"?: string;
    "activityDescriptionInHtml"?: string;
    "activityType"?: ActivityFeedModel.ActivityTypeEnum;
    "caseStatus"?: ActivityFeedModel.CaseStatusEnum;
    "city"?: string;
    "hasStateViolationData"?: boolean;
    "ownerName"?: string;
    "privacyMode"?: ActivityFeedModel.PrivacyModeEnum;
    "profilePicUrl"?: string;
    "regionCode"?: string;
    "totalLegalFeeInCents"?: number;
    "violationDescription"?: string;
}
export declare namespace ActivityFeedModel {
    enum ActivityTypeEnum {
        PURCHASE,
        REFERRAL,
        REFUND,
        RESOLUTION,
        TICKETREVIEW
    }
    enum CaseStatusEnum {
        AMENDEDDOWNWITHINCLASS,
        AMENDEDFULLFINE,
        AMENDEDINCREASEDFINE,
        AMENDEDNOFINE,
        AMENDEDREDUCEDFINE,
        AMENDEDTOINFRACTION,
        AMENDEDTONMV,
        CANCELLEDATTORNEYATFAULT,
        CANCELLEDBYLAWFIRM,
        CANCELLEDBYUSER,
        CANCELLEDDUPLICATE,
        CANCELLEDNMV,
        CANCELLEDNONPAYMENT,
        CANCELLEDNOLAWFIRM,
        CANCELLEDOVERDUE,
        CANCELLEDTOOSHORTNOTICE,
        CASEINPROGRESS,
        CLIENTCONFIRMED,
        CLIENTCONFIRMEDUNPAID,
        CLIENTFIREDLAWFIRM,
        CLIENTFORCEDLOSS,
        CLIENTPAIDFINE,
        CLIENTUNRESPONSIVE,
        DEFERRED,
        DISMISSED,
        DIVERSION,
        FEESDISPUTED,
        FINEREDUCTIONONLY,
        LAWFIRMWITHDRAWN,
        LOST,
        NOLAWFIRMAVAILABLE,
        POINTREDUCTION,
        REFUSEDBYLAWFIRM,
        RESOLVEDNONPAYMENT,
        STALE,
        TRAFFICSCHOOL,
        UNCONFIRMED
    }
    enum PrivacyModeEnum {
        FRIENDS,
        PRIVATE,
        PUBLIC,
        SEMIPUBLIC
    }
}
