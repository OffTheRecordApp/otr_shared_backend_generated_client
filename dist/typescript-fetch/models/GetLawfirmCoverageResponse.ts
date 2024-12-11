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
    LawfirmCourtCoverageDomain,
    LawfirmCourtCoverageDomainFromJSON,
    LawfirmCourtCoverageDomainFromJSONTyped,
    LawfirmCourtCoverageDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawfirmCoverageResponse
 */
export interface GetLawfirmCoverageResponse {
    /**
     * 
     * @type {Array<LawfirmCourtCoverageDomain>}
     * @memberof GetLawfirmCoverageResponse
     */
    coverageList?: Array<LawfirmCourtCoverageDomain>;
}

export function GetLawfirmCoverageResponseFromJSON(json: any): GetLawfirmCoverageResponse {
    return GetLawfirmCoverageResponseFromJSONTyped(json, false);
}

export function GetLawfirmCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmCoverageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coverageList': !exists(json, 'coverageList') ? undefined : ((json['coverageList'] as Array<any>).map(LawfirmCourtCoverageDomainFromJSON)),
    };
}

export function GetLawfirmCoverageResponseToJSON(value?: GetLawfirmCoverageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coverageList': value.coverageList === undefined ? undefined : ((value.coverageList as Array<any>).map(LawfirmCourtCoverageDomainToJSON)),
    };
}


