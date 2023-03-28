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

export interface ListLawfirmSurchargeTypeModel {
    "fees"?: Array<models.ListLawfirmSurchargeModel>;
    "type"?: ListLawfirmSurchargeTypeModel.TypeEnum;
}

export namespace ListLawfirmSurchargeTypeModel {
    export enum TypeEnum {
        CDL = <any> 'CDL',
        FAILURETOAPPEAR = <any> 'FAILURE_TO_APPEAR',
        LATE = <any> 'LATE',
        MULTIPLEVIOLATIONS = <any> 'MULTIPLE_VIOLATIONS',
        OUTOFSTATE = <any> 'OUT_OF_STATE',
        SHORTNOTICE = <any> 'SHORT_NOTICE',
        WARRANT = <any> 'WARRANT'
    }
}