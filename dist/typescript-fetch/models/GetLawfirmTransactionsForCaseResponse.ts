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
import {
    FinancialTransaction,
    FinancialTransactionFromJSON,
    FinancialTransactionFromJSONTyped,
    FinancialTransactionToJSON,
    LineItem,
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawfirmTransactionsForCaseResponse
 */
export interface GetLawfirmTransactionsForCaseResponse {
    /**
     * 
     * @type {Array<FinancialTransaction>}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    futureTransactions?: Array<FinancialTransaction>;
    /**
     * 
     * @type {number}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    lawfirmAssumedCost?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    lawfirmEarningsForCase?: number;
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    lineItems?: Array<LineItem>;
    /**
     * 
     * @type {number}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    otrMarketingFeeChargedToLawfirm?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    paymentProcessingFeeChargedToLawfirm?: number;
    /**
     * 
     * @type {Array<FinancialTransaction>}
     * @memberof GetLawfirmTransactionsForCaseResponse
     */
    transactions?: Array<FinancialTransaction>;
}

export function GetLawfirmTransactionsForCaseResponseFromJSON(json: any): GetLawfirmTransactionsForCaseResponse {
    return GetLawfirmTransactionsForCaseResponseFromJSONTyped(json, false);
}

export function GetLawfirmTransactionsForCaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmTransactionsForCaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'futureTransactions': !exists(json, 'futureTransactions') ? undefined : ((json['futureTransactions'] as Array<any>).map(FinancialTransactionFromJSON)),
        'lawfirmAssumedCost': !exists(json, 'lawfirmAssumedCost') ? undefined : json['lawfirmAssumedCost'],
        'lawfirmEarningsForCase': !exists(json, 'lawfirmEarningsForCase') ? undefined : json['lawfirmEarningsForCase'],
        'lineItems': !exists(json, 'lineItems') ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'otrMarketingFeeChargedToLawfirm': !exists(json, 'otrMarketingFeeChargedToLawfirm') ? undefined : json['otrMarketingFeeChargedToLawfirm'],
        'paymentProcessingFeeChargedToLawfirm': !exists(json, 'paymentProcessingFeeChargedToLawfirm') ? undefined : json['paymentProcessingFeeChargedToLawfirm'],
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(FinancialTransactionFromJSON)),
    };
}

export function GetLawfirmTransactionsForCaseResponseToJSON(value?: GetLawfirmTransactionsForCaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'futureTransactions': value.futureTransactions === undefined ? undefined : ((value.futureTransactions as Array<any>).map(FinancialTransactionToJSON)),
        'lawfirmAssumedCost': value.lawfirmAssumedCost,
        'lawfirmEarningsForCase': value.lawfirmEarningsForCase,
        'lineItems': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(LineItemToJSON)),
        'otrMarketingFeeChargedToLawfirm': value.otrMarketingFeeChargedToLawfirm,
        'paymentProcessingFeeChargedToLawfirm': value.paymentProcessingFeeChargedToLawfirm,
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(FinancialTransactionToJSON)),
    };
}


