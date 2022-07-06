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
exports.LineItem = void 0;
var LineItem;
(function (LineItem) {
    var LineItemEnum;
    (function (LineItemEnum) {
        LineItemEnum[LineItemEnum["ACCIDENTFEE"] = 'ACCIDENT_FEE'] = "ACCIDENTFEE";
        LineItemEnum[LineItemEnum["BASELEGALFEE"] = 'BASE_LEGAL_FEE'] = "BASELEGALFEE";
        LineItemEnum[LineItemEnum["BONDFEE"] = 'BOND_FEE'] = "BONDFEE";
        LineItemEnum[LineItemEnum["BOOKINGFEE"] = 'BOOKING_FEE'] = "BOOKINGFEE";
        LineItemEnum[LineItemEnum["CDLFEE"] = 'CDL_FEE'] = "CDLFEE";
        LineItemEnum[LineItemEnum["DISPUTEFEE"] = 'DISPUTE_FEE'] = "DISPUTEFEE";
        LineItemEnum[LineItemEnum["FINEPAYMENT"] = 'FINE_PAYMENT'] = "FINEPAYMENT";
        LineItemEnum[LineItemEnum["FTAFEE"] = 'FTA_FEE'] = "FTAFEE";
        LineItemEnum[LineItemEnum["LATEFEE"] = 'LATE_FEE'] = "LATEFEE";
        LineItemEnum[LineItemEnum["MBGREFUND"] = 'MBG_REFUND'] = "MBGREFUND";
        LineItemEnum[LineItemEnum["MVSFEE"] = 'MVS_FEE'] = "MVSFEE";
        LineItemEnum[LineItemEnum["OTHER"] = 'OTHER'] = "OTHER";
        LineItemEnum[LineItemEnum["OTRCREDIT"] = 'OTR_CREDIT'] = "OTRCREDIT";
        LineItemEnum[LineItemEnum["PAYMENTPLANSERVICEFEE"] = 'PAYMENT_PLAN_SERVICE_FEE'] = "PAYMENTPLANSERVICEFEE";
        LineItemEnum[LineItemEnum["WARRANTFEE"] = 'WARRANT_FEE'] = "WARRANTFEE";
    })(LineItemEnum = LineItem.LineItemEnum || (LineItem.LineItemEnum = {}));
})(LineItem = exports.LineItem || (exports.LineItem = {}));
