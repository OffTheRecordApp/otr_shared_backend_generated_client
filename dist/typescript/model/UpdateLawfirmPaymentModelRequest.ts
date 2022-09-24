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

export interface UpdateLawfirmPaymentModelRequest {
    "paymentModel"?: UpdateLawfirmPaymentModelRequest.PaymentModelEnum;
}

export namespace UpdateLawfirmPaymentModelRequest {
    export enum PaymentModelEnum {
        DESTINATIONACCOUNT = <any> 'DESTINATION_ACCOUNT',
        SEPARATECHARGE = <any> 'SEPARATE_CHARGE',
        TRANSFERDEDUCTION = <any> 'TRANSFER_DEDUCTION'
    }
}
