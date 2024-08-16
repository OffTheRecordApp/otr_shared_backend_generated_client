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
exports.WorkflowLineItemModel = void 0;
var WorkflowLineItemModel;
(function (WorkflowLineItemModel) {
    var LineItemTypeEnum;
    (function (LineItemTypeEnum) {
        LineItemTypeEnum[LineItemTypeEnum["ACCIDENTFEE"] = 'ACCIDENT_FEE'] = "ACCIDENTFEE";
        LineItemTypeEnum[LineItemTypeEnum["BASELEGALFEE"] = 'BASE_LEGAL_FEE'] = "BASELEGALFEE";
        LineItemTypeEnum[LineItemTypeEnum["BONDFEE"] = 'BOND_FEE'] = "BONDFEE";
        LineItemTypeEnum[LineItemTypeEnum["BOOKINGFEE"] = 'BOOKING_FEE'] = "BOOKINGFEE";
        LineItemTypeEnum[LineItemTypeEnum["CDLFEE"] = 'CDL_FEE'] = "CDLFEE";
        LineItemTypeEnum[LineItemTypeEnum["COURTFEE"] = 'COURT_FEE'] = "COURTFEE";
        LineItemTypeEnum[LineItemTypeEnum["DISPUTEFEE"] = 'DISPUTE_FEE'] = "DISPUTEFEE";
        LineItemTypeEnum[LineItemTypeEnum["FINEPAYMENT"] = 'FINE_PAYMENT'] = "FINEPAYMENT";
        LineItemTypeEnum[LineItemTypeEnum["FTAFEE"] = 'FTA_FEE'] = "FTAFEE";
        LineItemTypeEnum[LineItemTypeEnum["INITIALSUBSCRIPTIONFEE"] = 'INITIAL_SUBSCRIPTION_FEE'] = "INITIALSUBSCRIPTIONFEE";
        LineItemTypeEnum[LineItemTypeEnum["LATEFEE"] = 'LATE_FEE'] = "LATEFEE";
        LineItemTypeEnum[LineItemTypeEnum["MBGREFUND"] = 'MBG_REFUND'] = "MBGREFUND";
        LineItemTypeEnum[LineItemTypeEnum["MVSFEE"] = 'MVS_FEE'] = "MVSFEE";
        LineItemTypeEnum[LineItemTypeEnum["OTHER"] = 'OTHER'] = "OTHER";
        LineItemTypeEnum[LineItemTypeEnum["OTRCREDIT"] = 'OTR_CREDIT'] = "OTRCREDIT";
        LineItemTypeEnum[LineItemTypeEnum["OTRSUBSCRIPTIONCREDIT"] = 'OTR_SUBSCRIPTION_CREDIT'] = "OTRSUBSCRIPTIONCREDIT";
        LineItemTypeEnum[LineItemTypeEnum["PAYMENTPLANSERVICEFEE"] = 'PAYMENT_PLAN_SERVICE_FEE'] = "PAYMENTPLANSERVICEFEE";
        LineItemTypeEnum[LineItemTypeEnum["WARRANTFEE"] = 'WARRANT_FEE'] = "WARRANTFEE";
    })(LineItemTypeEnum = WorkflowLineItemModel.LineItemTypeEnum || (WorkflowLineItemModel.LineItemTypeEnum = {}));
    var RecipientEnum;
    (function (RecipientEnum) {
        RecipientEnum[RecipientEnum["COURT"] = 'COURT'] = "COURT";
        RecipientEnum[RecipientEnum["LAWFIRM"] = 'LAWFIRM'] = "LAWFIRM";
        RecipientEnum[RecipientEnum["OTR"] = 'OTR'] = "OTR";
    })(RecipientEnum = WorkflowLineItemModel.RecipientEnum || (WorkflowLineItemModel.RecipientEnum = {}));
})(WorkflowLineItemModel = exports.WorkflowLineItemModel || (exports.WorkflowLineItemModel = {}));
