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


export interface MatchingFieldValue { 
    matchingField?: MatchingFieldValue.MatchingFieldEnum;
    value?: string;
}
export namespace MatchingFieldValue {
    export type MatchingFieldEnum = 'COURT_ID' | 'VIOLATION_CLASSIFICATION_ID' | 'VIOLATION_ID';
    export const MatchingFieldEnum = {
        CourtId: 'COURT_ID' as MatchingFieldEnum,
        ViolationClassificationId: 'VIOLATION_CLASSIFICATION_ID' as MatchingFieldEnum,
        ViolationId: 'VIOLATION_ID' as MatchingFieldEnum
    };
}

