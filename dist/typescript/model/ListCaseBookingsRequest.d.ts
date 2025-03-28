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
export interface ListCaseBookingsRequest {
    "caseStatusFilter"?: Array<ListCaseBookingsRequest.CaseStatusFilterEnum>;
    "endDate"?: string;
    "genderFilterList"?: Array<ListCaseBookingsRequest.GenderFilterListEnum>;
    "hasSubscriptionPlanFilter"?: boolean;
    "includeDataRecords"?: boolean;
    "lawfirmStringFilter"?: string;
    "length"?: number;
    "page"?: number;
    "raceFilterList"?: Array<ListCaseBookingsRequest.RaceFilterListEnum>;
    "sortMap"?: {
        [key: string]: string;
    };
    "startDate"?: string;
    "stateFilterList"?: Array<ListCaseBookingsRequest.StateFilterListEnum>;
    "statusCategoryFilter"?: Array<ListCaseBookingsRequest.StatusCategoryFilterEnum>;
    "timeZoneId"?: string;
}
export declare namespace ListCaseBookingsRequest {
    enum CaseStatusFilterEnum {
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
    enum GenderFilterListEnum {
        FEMALE,
        MALE,
        NOTAVAILABLE,
        NOTLISTED,
        UNVERIFIED,
        X
    }
    enum RaceFilterListEnum {
        ASIAN,
        BLACK,
        HISPANIC,
        MIDDLEEASTERN,
        NATIVE,
        NOTAVAILABLE,
        PACIFICISLANDER,
        TWOORMORE,
        UNKNOWN,
        UNVERIFIED,
        WHITE
    }
    enum StateFilterListEnum {
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
    enum StatusCategoryFilterEnum {
        ACTIVE,
        CANCELLED,
        RESOLVED,
        UNCONFIRMED
    }
}
