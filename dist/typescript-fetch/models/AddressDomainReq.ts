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
import {
    CountryRegion,
    CountryRegionFromJSON,
    CountryRegionFromJSONTyped,
    CountryRegionToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressDomainReq
 */
export interface AddressDomainReq {
    /**
     * 
     * @type {number}
     * @memberof AddressDomainReq
     */
    addressId?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    addressedTo?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    entityType?: AddressDomainReqEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    postalCode?: string;
    /**
     * 
     * @type {number}
     * @memberof AddressDomainReq
     */
    referenceId?: number;
    /**
     * 
     * @type {CountryRegion}
     * @memberof AddressDomainReq
     */
    region?: CountryRegion;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    state?: AddressDomainReqStateEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressDomainReq
     */
    timeZoneName?: string;
}

export function AddressDomainReqFromJSON(json: any): AddressDomainReq {
    return AddressDomainReqFromJSONTyped(json, false);
}

export function AddressDomainReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressDomainReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressId': !exists(json, 'addressId') ? undefined : json['addressId'],
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'addressedTo': !exists(json, 'addressedTo') ? undefined : json['addressedTo'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'timeZoneName': !exists(json, 'timeZoneName') ? undefined : json['timeZoneName'],
    };
}

export function AddressDomainReqToJSON(value?: AddressDomainReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressId': value.addressId,
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'addressedTo': value.addressedTo,
        'city': value.city,
        'countryCode': value.countryCode,
        'entityType': value.entityType,
        'phoneNumber': value.phoneNumber,
        'postalCode': value.postalCode,
        'referenceId': value.referenceId,
        'region': CountryRegionToJSON(value.region),
        'state': value.state,
        'timeZoneName': value.timeZoneName,
    };
}

/**
* @export
* @enum {string}
*/
export enum AddressDomainReqEntityTypeEnum {
    CASE = 'CASE',
    CASEPAYMENT = 'CASE_PAYMENT',
    CITATION = 'CITATION',
    COURT = 'COURT',
    LAWFIRM = 'LAWFIRM',
    LAWFIRMCASE = 'LAWFIRM_CASE',
    LAWYER = 'LAWYER',
    LINEITEM = 'LINE_ITEM',
    STRIPECHARGE = 'STRIPE_CHARGE',
    USER = 'USER'
}
/**
* @export
* @enum {string}
*/
export enum AddressDomainReqStateEnum {
    AK = 'AK',
    AL = 'AL',
    AR = 'AR',
    AZ = 'AZ',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DC = 'DC',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    IA = 'IA',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    MA = 'MA',
    MD = 'MD',
    ME = 'ME',
    MI = 'MI',
    MN = 'MN',
    MO = 'MO',
    MS = 'MS',
    MT = 'MT',
    NC = 'NC',
    ND = 'ND',
    NE = 'NE',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NV = 'NV',
    NY = 'NY',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VA = 'VA',
    VT = 'VT',
    WA = 'WA',
    WI = 'WI',
    WV = 'WV',
    WY = 'WY'
}


