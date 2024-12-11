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
    LobMailingAddress,
    LobMailingAddressFromJSON,
    LobMailingAddressFromJSONTyped,
    LobMailingAddressToJSON,
} from './';

/**
 * 
 * @export
 * @interface VerifyMailingAddressRequest
 */
export interface VerifyMailingAddressRequest {
    /**
     * 
     * @type {LobMailingAddress}
     * @memberof VerifyMailingAddressRequest
     */
    address?: LobMailingAddress;
}

export function VerifyMailingAddressRequestFromJSON(json: any): VerifyMailingAddressRequest {
    return VerifyMailingAddressRequestFromJSONTyped(json, false);
}

export function VerifyMailingAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyMailingAddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : LobMailingAddressFromJSON(json['address']),
    };
}

export function VerifyMailingAddressRequestToJSON(value?: VerifyMailingAddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': LobMailingAddressToJSON(value.address),
    };
}


