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
/**
 * 
 * @export
 * @interface PaymentPlanTypeModel
 */
export interface PaymentPlanTypeModel {
    /**
     * 
     * @type {number}
     * @memberof PaymentPlanTypeModel
     */
    paymentPlanId?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentPlanTypeModel
     */
    paymentPlanType?: PaymentPlanTypeModelPaymentPlanTypeEnum;
}

export function PaymentPlanTypeModelFromJSON(json: any): PaymentPlanTypeModel {
    return PaymentPlanTypeModelFromJSONTyped(json, false);
}

export function PaymentPlanTypeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentPlanTypeModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentPlanId': !exists(json, 'paymentPlanId') ? undefined : json['paymentPlanId'],
        'paymentPlanType': !exists(json, 'paymentPlanType') ? undefined : json['paymentPlanType'],
    };
}

export function PaymentPlanTypeModelToJSON(value?: PaymentPlanTypeModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentPlanId': value.paymentPlanId,
        'paymentPlanType': value.paymentPlanType,
    };
}

/**
* @export
* @enum {string}
*/
export enum PaymentPlanTypeModelPaymentPlanTypeEnum {
    ALLUPFRONT = 'ALL_UPFRONT',
    THREEPAYMENTSHALFFIRST = 'THREE_PAYMENTS_HALF_FIRST',
    TWOPAYMENTSMONTHLY = 'TWO_PAYMENTS_MONTHLY'
}

