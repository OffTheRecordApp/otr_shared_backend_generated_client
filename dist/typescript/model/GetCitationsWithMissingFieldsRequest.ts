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

export interface GetCitationsWithMissingFieldsRequest {
    "caseStatuses"?: Array<GetCitationsWithMissingFieldsRequest.CaseStatusesEnum>;
    "endDate"?: string;
    "ignoreDataBackfill"?: boolean;
    "includeCitationsWithoutImage"?: boolean;
    "includeDismissedCitations"?: boolean;
    "maxRecords"?: number;
    "onlyCitationsWithoutImage"?: boolean;
    "selectedStates"?: Array<GetCitationsWithMissingFieldsRequest.SelectedStatesEnum>;
    "showMissingCourtRecords"?: boolean;
    "showMissingDOBRecords"?: boolean;
    "showMissingGenderRecords"?: boolean;
    "showMissingNameRecords"?: boolean;
    "startDate"?: string;
    "statusCategories"?: Array<GetCitationsWithMissingFieldsRequest.StatusCategoriesEnum>;
    "trailingDays"?: number;
}

export namespace GetCitationsWithMissingFieldsRequest {
    export enum CaseStatusesEnum {
        AMENDEDDOWNWITHINCLASS = <any> 'AMENDED_DOWN_WITHIN_CLASS',
        AMENDEDFULLFINE = <any> 'AMENDED_FULL_FINE',
        AMENDEDINCREASEDFINE = <any> 'AMENDED_INCREASED_FINE',
        AMENDEDNOFINE = <any> 'AMENDED_NO_FINE',
        AMENDEDREDUCEDFINE = <any> 'AMENDED_REDUCED_FINE',
        AMENDEDTOINFRACTION = <any> 'AMENDED_TO_INFRACTION',
        AMENDEDTONMV = <any> 'AMENDED_TO_NMV',
        CANCELLEDATTORNEYATFAULT = <any> 'CANCELLED_ATTORNEY_AT_FAULT',
        CANCELLEDBYLAWFIRM = <any> 'CANCELLED_BY_LAWFIRM',
        CANCELLEDBYUSER = <any> 'CANCELLED_BY_USER',
        CANCELLEDDUPLICATE = <any> 'CANCELLED_DUPLICATE',
        CANCELLEDNMV = <any> 'CANCELLED_NMV',
        CANCELLEDNONPAYMENT = <any> 'CANCELLED_NON_PAYMENT',
        CANCELLEDNOLAWFIRM = <any> 'CANCELLED_NO_LAWFIRM',
        CANCELLEDOVERDUE = <any> 'CANCELLED_OVERDUE',
        CANCELLEDTOOSHORTNOTICE = <any> 'CANCELLED_TOO_SHORT_NOTICE',
        CASEINPROGRESS = <any> 'CASE_IN_PROGRESS',
        CLIENTCONFIRMED = <any> 'CLIENT_CONFIRMED',
        CLIENTCONFIRMEDUNPAID = <any> 'CLIENT_CONFIRMED_UNPAID',
        CLIENTFIREDLAWFIRM = <any> 'CLIENT_FIRED_LAWFIRM',
        CLIENTFORCEDLOSS = <any> 'CLIENT_FORCED_LOSS',
        CLIENTPAIDFINE = <any> 'CLIENT_PAID_FINE',
        CLIENTUNRESPONSIVE = <any> 'CLIENT_UNRESPONSIVE',
        DEFERRED = <any> 'DEFERRED',
        DISMISSED = <any> 'DISMISSED',
        DIVERSION = <any> 'DIVERSION',
        FEESDISPUTED = <any> 'FEES_DISPUTED',
        FINEREDUCTIONONLY = <any> 'FINE_REDUCTION_ONLY',
        LAWFIRMWITHDRAWN = <any> 'LAWFIRM_WITHDRAWN',
        LOST = <any> 'LOST',
        NOLAWFIRMAVAILABLE = <any> 'NO_LAWFIRM_AVAILABLE',
        POINTREDUCTION = <any> 'POINT_REDUCTION',
        REFUSEDBYLAWFIRM = <any> 'REFUSED_BY_LAWFIRM',
        RESOLVEDNONPAYMENT = <any> 'RESOLVED_NON_PAYMENT',
        STALE = <any> 'STALE',
        TRAFFICSCHOOL = <any> 'TRAFFIC_SCHOOL',
        UNCONFIRMED = <any> 'UNCONFIRMED'
    }
    export enum SelectedStatesEnum {
        AK = <any> 'AK',
        AL = <any> 'AL',
        AR = <any> 'AR',
        AZ = <any> 'AZ',
        CA = <any> 'CA',
        CO = <any> 'CO',
        CT = <any> 'CT',
        DC = <any> 'DC',
        DE = <any> 'DE',
        FL = <any> 'FL',
        GA = <any> 'GA',
        HI = <any> 'HI',
        IA = <any> 'IA',
        ID = <any> 'ID',
        IL = <any> 'IL',
        IN = <any> 'IN',
        KS = <any> 'KS',
        KY = <any> 'KY',
        LA = <any> 'LA',
        MA = <any> 'MA',
        MD = <any> 'MD',
        ME = <any> 'ME',
        MI = <any> 'MI',
        MN = <any> 'MN',
        MO = <any> 'MO',
        MS = <any> 'MS',
        MT = <any> 'MT',
        NC = <any> 'NC',
        ND = <any> 'ND',
        NE = <any> 'NE',
        NH = <any> 'NH',
        NJ = <any> 'NJ',
        NM = <any> 'NM',
        NV = <any> 'NV',
        NY = <any> 'NY',
        OH = <any> 'OH',
        OK = <any> 'OK',
        OR = <any> 'OR',
        PA = <any> 'PA',
        RI = <any> 'RI',
        SC = <any> 'SC',
        SD = <any> 'SD',
        TN = <any> 'TN',
        TX = <any> 'TX',
        UT = <any> 'UT',
        VA = <any> 'VA',
        VT = <any> 'VT',
        WA = <any> 'WA',
        WI = <any> 'WI',
        WV = <any> 'WV',
        WY = <any> 'WY'
    }
    export enum StatusCategoriesEnum {
        ACTIVE = <any> 'ACTIVE',
        CANCELLED = <any> 'CANCELLED',
        RESOLVED = <any> 'RESOLVED',
        UNCONFIRMED = <any> 'UNCONFIRMED'
    }
}
