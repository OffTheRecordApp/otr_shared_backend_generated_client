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
 * @interface SaveLawyerLeadRequest
 */
export interface SaveLawyerLeadRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    firstname?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveLawyerLeadRequest
     */
    isSelfProclaimedLawyer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    leadProvidedSource?: SaveLawyerLeadRequestLeadProvidedSourceEnum;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    website?: string;
}

export function SaveLawyerLeadRequestFromJSON(json: any): SaveLawyerLeadRequest {
    return SaveLawyerLeadRequestFromJSONTyped(json, false);
}

export function SaveLawyerLeadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveLawyerLeadRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'isSelfProclaimedLawyer': !exists(json, 'isSelfProclaimedLawyer') ? undefined : json['isSelfProclaimedLawyer'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'leadProvidedSource': !exists(json, 'leadProvidedSource') ? undefined : json['leadProvidedSource'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function SaveLawyerLeadRequestToJSON(value?: SaveLawyerLeadRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'email': value.email,
        'firstname': value.firstname,
        'isSelfProclaimedLawyer': value.isSelfProclaimedLawyer,
        'lastname': value.lastname,
        'leadProvidedSource': value.leadProvidedSource,
        'phoneNumber': value.phoneNumber,
        'state': value.state,
        'website': value.website,
    };
}

/**
* @export
* @enum {string}
*/
export enum SaveLawyerLeadRequestLeadProvidedSourceEnum {
    DIRECTMAIL = 'DIRECT_MAIL',
    EMAILAD = 'EMAIL_AD',
    GOOGLEAD = 'GOOGLE_AD',
    NMA = 'NMA',
    OTHER = 'OTHER',
    UNKNOWN = 'UNKNOWN'
}


