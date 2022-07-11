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
exports.LawfirmRatesResponse = void 0;
var LawfirmRatesResponse;
(function (LawfirmRatesResponse) {
    var FeeLevelEnum;
    (function (FeeLevelEnum) {
        FeeLevelEnum[FeeLevelEnum["ACCOUNTCLASSFEE"] = 'ACCOUNT_CLASS_FEE'] = "ACCOUNTCLASSFEE";
        FeeLevelEnum[FeeLevelEnum["ACCOUNTVIOLATIONFEE"] = 'ACCOUNT_VIOLATION_FEE'] = "ACCOUNTVIOLATIONFEE";
        FeeLevelEnum[FeeLevelEnum["COURTFEE"] = 'COURT_FEE'] = "COURTFEE";
        FeeLevelEnum[FeeLevelEnum["COURTVIOLATIONFEE"] = 'COURT_VIOLATION_FEE'] = "COURTVIOLATIONFEE";
    })(FeeLevelEnum = LawfirmRatesResponse.FeeLevelEnum || (LawfirmRatesResponse.FeeLevelEnum = {}));
    var IneligibleMatchReasonsEnum;
    (function (IneligibleMatchReasonsEnum) {
        IneligibleMatchReasonsEnum[IneligibleMatchReasonsEnum["DAILYCAPACITYBREACHED"] = 'DAILY_CAPACITY_BREACHED'] = "DAILYCAPACITYBREACHED";
        IneligibleMatchReasonsEnum[IneligibleMatchReasonsEnum["ONVACATION"] = 'ON_VACATION'] = "ONVACATION";
        IneligibleMatchReasonsEnum[IneligibleMatchReasonsEnum["OUTOFCAPACITY"] = 'OUT_OF_CAPACITY'] = "OUTOFCAPACITY";
        IneligibleMatchReasonsEnum[IneligibleMatchReasonsEnum["OUTPRICED"] = 'OUT_PRICED'] = "OUTPRICED";
        IneligibleMatchReasonsEnum[IneligibleMatchReasonsEnum["OUTRANKED"] = 'OUT_RANKED'] = "OUTRANKED";
    })(IneligibleMatchReasonsEnum = LawfirmRatesResponse.IneligibleMatchReasonsEnum || (LawfirmRatesResponse.IneligibleMatchReasonsEnum = {}));
})(LawfirmRatesResponse = exports.LawfirmRatesResponse || (exports.LawfirmRatesResponse = {}));