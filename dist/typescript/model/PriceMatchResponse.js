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
exports.PriceMatchResponse = void 0;
var PriceMatchResponse;
(function (PriceMatchResponse) {
    var PriceMatchStatusEnum;
    (function (PriceMatchStatusEnum) {
        PriceMatchStatusEnum[PriceMatchStatusEnum["COMPLETE"] = 'COMPLETE'] = "COMPLETE";
        PriceMatchStatusEnum[PriceMatchStatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        PriceMatchStatusEnum[PriceMatchStatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
    })(PriceMatchStatusEnum = PriceMatchResponse.PriceMatchStatusEnum || (PriceMatchResponse.PriceMatchStatusEnum = {}));
})(PriceMatchResponse = exports.PriceMatchResponse || (exports.PriceMatchResponse = {}));
