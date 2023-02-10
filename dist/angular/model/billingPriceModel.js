"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingPriceModel = void 0;
var BillingPriceModel;
(function (BillingPriceModel) {
    BillingPriceModel.BillingSchemeEnum = {
        PerUnit: 'PER_UNIT',
        Tiered: 'TIERED',
        Unknown: 'UNKNOWN'
    };
    BillingPriceModel.IntervalEnum = {
        Daily: 'DAILY',
        Monthly: 'MONTHLY',
        Quarterly: 'QUARTERLY',
        Weekly: 'WEEKLY',
        Yearly: 'YEARLY'
    };
})(BillingPriceModel = exports.BillingPriceModel || (exports.BillingPriceModel = {}));
