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
    PenaltyRequest,
    PenaltyRequestFromJSON,
    PenaltyRequestFromJSONTyped,
    PenaltyRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddPenaltyRequest
 */
export interface AddPenaltyRequest {
    /**
     * 
     * @type {Array<PenaltyRequest>}
     * @memberof AddPenaltyRequest
     */
    penaltiesToAdd?: Array<PenaltyRequest>;
}

export function AddPenaltyRequestFromJSON(json: any): AddPenaltyRequest {
    return AddPenaltyRequestFromJSONTyped(json, false);
}

export function AddPenaltyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPenaltyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'penaltiesToAdd': !exists(json, 'penaltiesToAdd') ? undefined : ((json['penaltiesToAdd'] as Array<any>).map(PenaltyRequestFromJSON)),
    };
}

export function AddPenaltyRequestToJSON(value?: AddPenaltyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'penaltiesToAdd': value.penaltiesToAdd === undefined ? undefined : ((value.penaltiesToAdd as Array<any>).map(PenaltyRequestToJSON)),
    };
}

