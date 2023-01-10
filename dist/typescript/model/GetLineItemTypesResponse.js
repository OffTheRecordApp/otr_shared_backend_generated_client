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
exports.GetLineItemTypesResponse = void 0;
var GetLineItemTypesResponse;
(function (GetLineItemTypesResponse) {
    var LineItemTypesEnum;
    (function (LineItemTypesEnum) {
        LineItemTypesEnum[LineItemTypesEnum["ACCIDENTFEE"] = 'ACCIDENT_FEE'] = "ACCIDENTFEE";
        LineItemTypesEnum[LineItemTypesEnum["BASELEGALFEE"] = 'BASE_LEGAL_FEE'] = "BASELEGALFEE";
        LineItemTypesEnum[LineItemTypesEnum["BONDFEE"] = 'BOND_FEE'] = "BONDFEE";
        LineItemTypesEnum[LineItemTypesEnum["BOOKINGFEE"] = 'BOOKING_FEE'] = "BOOKINGFEE";
        LineItemTypesEnum[LineItemTypesEnum["CDLFEE"] = 'CDL_FEE'] = "CDLFEE";
        LineItemTypesEnum[LineItemTypesEnum["DISPUTEFEE"] = 'DISPUTE_FEE'] = "DISPUTEFEE";
        LineItemTypesEnum[LineItemTypesEnum["FINEPAYMENT"] = 'FINE_PAYMENT'] = "FINEPAYMENT";
        LineItemTypesEnum[LineItemTypesEnum["FTAFEE"] = 'FTA_FEE'] = "FTAFEE";
        LineItemTypesEnum[LineItemTypesEnum["LATEFEE"] = 'LATE_FEE'] = "LATEFEE";
        LineItemTypesEnum[LineItemTypesEnum["MBGREFUND"] = 'MBG_REFUND'] = "MBGREFUND";
        LineItemTypesEnum[LineItemTypesEnum["MVSFEE"] = 'MVS_FEE'] = "MVSFEE";
        LineItemTypesEnum[LineItemTypesEnum["OTHER"] = 'OTHER'] = "OTHER";
        LineItemTypesEnum[LineItemTypesEnum["OTRCREDIT"] = 'OTR_CREDIT'] = "OTRCREDIT";
        LineItemTypesEnum[LineItemTypesEnum["PAYMENTPLANSERVICEFEE"] = 'PAYMENT_PLAN_SERVICE_FEE'] = "PAYMENTPLANSERVICEFEE";
        LineItemTypesEnum[LineItemTypesEnum["WARRANTFEE"] = 'WARRANT_FEE'] = "WARRANTFEE";
    })(LineItemTypesEnum = GetLineItemTypesResponse.LineItemTypesEnum || (GetLineItemTypesResponse.LineItemTypesEnum = {}));
})(GetLineItemTypesResponse = exports.GetLineItemTypesResponse || (exports.GetLineItemTypesResponse = {}));
