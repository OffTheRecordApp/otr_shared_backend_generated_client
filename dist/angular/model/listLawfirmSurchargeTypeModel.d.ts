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
import { ListLawfirmSurchargeModel } from './listLawfirmSurchargeModel';
export interface ListLawfirmSurchargeTypeModel {
    fees?: Array<ListLawfirmSurchargeModel>;
    type?: ListLawfirmSurchargeTypeModel.TypeEnum;
}
export declare namespace ListLawfirmSurchargeTypeModel {
    type TypeEnum = 'CDL' | 'FAILURE_TO_APPEAR' | 'LATE' | 'MULTIPLE_VIOLATIONS' | 'OUT_OF_STATE' | 'SHORT_NOTICE' | 'WARRANT';
    const TypeEnum: {
        Cdl: TypeEnum;
        FailureToAppear: TypeEnum;
        Late: TypeEnum;
        MultipleViolations: TypeEnum;
        OutOfState: TypeEnum;
        ShortNotice: TypeEnum;
        Warrant: TypeEnum;
    };
}