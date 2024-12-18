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
 * @interface ReplyToReviewRequest
 */
export interface ReplyToReviewRequest {
    /**
     * 
     * @type {string}
     * @memberof ReplyToReviewRequest
     */
    copy?: string;
    /**
     * 
     * @type {number}
     * @memberof ReplyToReviewRequest
     */
    userId?: number;
}

export function ReplyToReviewRequestFromJSON(json: any): ReplyToReviewRequest {
    return ReplyToReviewRequestFromJSONTyped(json, false);
}

export function ReplyToReviewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReplyToReviewRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copy': !exists(json, 'copy') ? undefined : json['copy'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function ReplyToReviewRequestToJSON(value?: ReplyToReviewRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copy': value.copy,
        'userId': value.userId,
    };
}


