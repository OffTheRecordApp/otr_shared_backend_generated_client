/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetLineItemTypesResponse
 */
export interface GetLineItemTypesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetLineItemTypesResponse
     */
    lineItemTypes?: Array<GetLineItemTypesResponseLineItemTypesEnum>;
}

export function GetLineItemTypesResponseFromJSON(json: any): GetLineItemTypesResponse {
    return GetLineItemTypesResponseFromJSONTyped(json, false);
}

export function GetLineItemTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLineItemTypesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineItemTypes': !exists(json, 'lineItemTypes') ? undefined : json['lineItemTypes'],
    };
}

export function GetLineItemTypesResponseToJSON(value?: GetLineItemTypesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineItemTypes': value.lineItemTypes,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetLineItemTypesResponseLineItemTypesEnum {
    ACCIDENTFEE = 'ACCIDENT_FEE',
    BASELEGALFEE = 'BASE_LEGAL_FEE',
    BONDFEE = 'BOND_FEE',
    BOOKINGFEE = 'BOOKING_FEE',
    CDLFEE = 'CDL_FEE',
    COURTFEE = 'COURT_FEE',
    DISPUTEFEE = 'DISPUTE_FEE',
    FINEPAYMENT = 'FINE_PAYMENT',
    FTAFEE = 'FTA_FEE',
    INITIALSUBSCRIPTIONFEE = 'INITIAL_SUBSCRIPTION_FEE',
    LATEFEE = 'LATE_FEE',
    MBGREFUND = 'MBG_REFUND',
    MVSFEE = 'MVS_FEE',
    OTHER = 'OTHER',
    OTRCREDIT = 'OTR_CREDIT',
    OTRSUBSCRIPTIONCREDIT = 'OTR_SUBSCRIPTION_CREDIT',
    PAYMENTPLANSERVICEFEE = 'PAYMENT_PLAN_SERVICE_FEE',
    WARRANTFEE = 'WARRANT_FEE'
}

