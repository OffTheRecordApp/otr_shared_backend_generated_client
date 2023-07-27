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
export interface CitationWithMissingFields {
    "birthDate"?: string;
    "caseStatus"?: CitationWithMissingFields.CaseStatusEnum;
    "caseStatusCategory"?: CitationWithMissingFields.CaseStatusCategoryEnum;
    "citationCreationDateUtc"?: models.TimestampRes;
    "citationId"?: number;
    "citationIssueDate"?: models.PureDate;
    "clientEmailAddress"?: string;
    "clientFirstName"?: string;
    "courtId"?: number;
    "gender"?: CitationWithMissingFields.GenderEnum;
    "lastName"?: string;
    "licenseNumber"?: string;
    "race"?: CitationWithMissingFields.RaceEnum;
    "state"?: CitationWithMissingFields.StateEnum;
    "ticketImageUrl"?: string;
    "userId"?: number;
    "violations"?: Array<models.CitationViolationModel>;
}
export declare namespace CitationWithMissingFields {
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
    enum CaseStatusCategoryEnum {
        ACTIVE,
        CANCELLED,
        RESOLVED,
        UNCONFIRMED
    }
    enum GenderEnum {
        FEMALE,
        MALE,
        NOTLISTED
    }
    enum RaceEnum {
        ASIAN,
        BLACK,
        HISPANIC,
        MIDDLEEASTERN,
        NATIVE,
        PACIFICISLANDER,
        TWOORMORE,
        UNKNOWN,
        WHITE
    }
    enum StateEnum {
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
