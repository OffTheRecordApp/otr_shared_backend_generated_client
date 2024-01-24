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

export interface UpdateLawfirmFeeRequest {
    "note"?: string;
    "otrFeeAmount"?: number;
    "processingFeeAmount"?: number;
    "sourceCasePaymentId"?: string;
    "totalFeeAmount"?: number;
    "transactionDateUtc"?: models.TimestampReq;
    "transactionMethod"?: UpdateLawfirmFeeRequest.TransactionMethodEnum;
    "transactionReferenceId"?: string;
    "updatedDueDateUtc"?: models.TimestampReq;
}

export namespace UpdateLawfirmFeeRequest {
    export enum TransactionMethodEnum {
        CHECK = <any> 'CHECK',
        DESTINATIONCHARGETRANSFER = <any> 'DESTINATION_CHARGE_TRANSFER',
        LOBCHECK = <any> 'LOB_CHECK',
        PAYPAL = <any> 'PAYPAL',
        STRIPEAPPLICATIONFEE = <any> 'STRIPE_APPLICATION_FEE',
        STRIPECHARGE = <any> 'STRIPE_CHARGE',
        STRIPECONNECTDEBIT = <any> 'STRIPE_CONNECT_DEBIT',
        STRIPETRANSFER = <any> 'STRIPE_TRANSFER',
        UNKNOWN = <any> 'UNKNOWN',
        VENMO = <any> 'VENMO',
        WIRETRANSFER = <any> 'WIRE_TRANSFER',
        ZELLE = <any> 'ZELLE'
    }
}
