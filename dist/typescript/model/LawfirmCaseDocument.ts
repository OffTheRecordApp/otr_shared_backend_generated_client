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

import * as models from './models';

export interface LawfirmCaseDocument {
    "caseDocId"?: string;
    "clientDocRequirement"?: LawfirmCaseDocument.ClientDocRequirementEnum;
    "docDate"?: string;
    "docType"?: LawfirmCaseDocument.DocTypeEnum;
    "docUrl"?: string;
    "hasClientAgreed"?: boolean;
}

export namespace LawfirmCaseDocument {
    export enum ClientDocRequirementEnum {
        ACK = <any> 'ACK',
        NONE = <any> 'NONE',
        NOTARY = <any> 'NOTARY',
        SIGNATURE = <any> 'SIGNATURE'
    }
    export enum DocTypeEnum {
        ENGAGEMENTLETTER = <any> 'ENGAGEMENT_LETTER',
        OTHERDOCUMENT = <any> 'OTHER_DOCUMENT',
        OTHERIMAGE = <any> 'OTHER_IMAGE'
    }
}
