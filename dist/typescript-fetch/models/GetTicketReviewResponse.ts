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
    TicketReviewRequestRes,
    TicketReviewRequestResFromJSON,
    TicketReviewRequestResFromJSONTyped,
    TicketReviewRequestResToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetTicketReviewResponse
 */
export interface GetTicketReviewResponse {
    /**
     * 
     * @type {TicketReviewRequestRes}
     * @memberof GetTicketReviewResponse
     */
    ticketReview?: TicketReviewRequestRes;
}

export function GetTicketReviewResponseFromJSON(json: any): GetTicketReviewResponse {
    return GetTicketReviewResponseFromJSONTyped(json, false);
}

export function GetTicketReviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTicketReviewResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ticketReview': !exists(json, 'ticketReview') ? undefined : TicketReviewRequestResFromJSON(json['ticketReview']),
    };
}

export function GetTicketReviewResponseToJSON(value?: GetTicketReviewResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ticketReview': TicketReviewRequestResToJSON(value.ticketReview),
    };
}


