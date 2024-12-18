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
    TicketReviewRequest,
    TicketReviewRequestFromJSON,
    TicketReviewRequestFromJSONTyped,
    TicketReviewRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetPendingTicketReviewsResponse
 */
export interface GetPendingTicketReviewsResponse {
    /**
     * 
     * @type {Array<TicketReviewRequest>}
     * @memberof GetPendingTicketReviewsResponse
     */
    requests?: Array<TicketReviewRequest>;
}

export function GetPendingTicketReviewsResponseFromJSON(json: any): GetPendingTicketReviewsResponse {
    return GetPendingTicketReviewsResponseFromJSONTyped(json, false);
}

export function GetPendingTicketReviewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPendingTicketReviewsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requests': !exists(json, 'requests') ? undefined : ((json['requests'] as Array<any>).map(TicketReviewRequestFromJSON)),
    };
}

export function GetPendingTicketReviewsResponseToJSON(value?: GetPendingTicketReviewsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requests': value.requests === undefined ? undefined : ((value.requests as Array<any>).map(TicketReviewRequestToJSON)),
    };
}


