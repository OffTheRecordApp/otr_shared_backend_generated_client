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
exports.RefundLawfirmFeeRequest = void 0;
var RefundLawfirmFeeRequest;
(function (RefundLawfirmFeeRequest) {
    var RefundReasonEnum;
    (function (RefundReasonEnum) {
        RefundReasonEnum[RefundReasonEnum["CANCELATION"] = 'CANCELATION'] = "CANCELATION";
        RefundReasonEnum[RefundReasonEnum["CLIENTDISPUTEDCHARGE"] = 'CLIENT_DISPUTED_CHARGE'] = "CLIENTDISPUTEDCHARGE";
        RefundReasonEnum[RefundReasonEnum["DUPLICATECASE"] = 'DUPLICATE_CASE'] = "DUPLICATECASE";
        RefundReasonEnum[RefundReasonEnum["LOSTCASE"] = 'LOST_CASE'] = "LOSTCASE";
        RefundReasonEnum[RefundReasonEnum["OTHER"] = 'OTHER'] = "OTHER";
    })(RefundReasonEnum = RefundLawfirmFeeRequest.RefundReasonEnum || (RefundLawfirmFeeRequest.RefundReasonEnum = {}));
})(RefundLawfirmFeeRequest = exports.RefundLawfirmFeeRequest || (exports.RefundLawfirmFeeRequest = {}));
