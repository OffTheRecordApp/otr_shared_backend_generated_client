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


export interface GetPaymentModelTypesResponse { 
    models?: Array<GetPaymentModelTypesResponse.ModelsEnum>;
}
export namespace GetPaymentModelTypesResponse {
    export type ModelsEnum = 'DESTINATION_ACCOUNT' | 'SEPARATE_CHARGE' | 'TRANSFER_DEDUCTION';
    export const ModelsEnum = {
        DestinationAccount: 'DESTINATION_ACCOUNT' as ModelsEnum,
        SeparateCharge: 'SEPARATE_CHARGE' as ModelsEnum,
        TransferDeduction: 'TRANSFER_DEDUCTION' as ModelsEnum
    };
}


