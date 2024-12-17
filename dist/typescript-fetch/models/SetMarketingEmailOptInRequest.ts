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
 * @interface SetMarketingEmailOptInRequest
 */
export interface SetMarketingEmailOptInRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SetMarketingEmailOptInRequest
     */
    optInForMarketingEmails?: boolean;
}

export function SetMarketingEmailOptInRequestFromJSON(json: any): SetMarketingEmailOptInRequest {
    return SetMarketingEmailOptInRequestFromJSONTyped(json, false);
}

export function SetMarketingEmailOptInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetMarketingEmailOptInRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'optInForMarketingEmails': !exists(json, 'optInForMarketingEmails') ? undefined : json['optInForMarketingEmails'],
    };
}

export function SetMarketingEmailOptInRequestToJSON(value?: SetMarketingEmailOptInRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'optInForMarketingEmails': value.optInForMarketingEmails,
    };
}

