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
import { CaseCounterOptionModel } from './caseCounterOptionModel';


export interface GetCounterOfferResponse { 
    counterOfferAmountInCents?: number;
    counterOfferDateUtc?: string;
    counterOfferId?: number;
    counterOfferStatus?: string;
    counterOptions?: Array<CaseCounterOptionModel>;
    createdByUserId?: number;
    createdByUserRoleId?: number;
    initialLegalFeeInCents?: number;
    initialRefundPercentage?: number;
    lawfirmCaseId?: number;
    legalFeeDifferenceInCents?: number;
    noteToClient?: string;
    noteToOtr?: string;
    refundPercentage?: number;
    totalLegalFeeInCents?: number;
}

