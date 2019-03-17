/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface SetLawfirmCaseDecisionRequest {
    "caseDecisionStatus"?: SetLawfirmCaseDecisionRequest.CaseDecisionStatusEnum;
    "reason"?: string;
}

export namespace SetLawfirmCaseDecisionRequest {
    export enum CaseDecisionStatusEnum {
        CREATED = <any> 'CREATED',
        PENDING = <any> 'PENDING',
        ACCEPTED = <any> 'ACCEPTED',
        DECLINED = <any> 'DECLINED',
        EXPIRED = <any> 'EXPIRED',
        REMATCHED = <any> 'REMATCHED',
        REMATCHEDREFERRAL = <any> 'REMATCHED_REFERRAL'
    }
}