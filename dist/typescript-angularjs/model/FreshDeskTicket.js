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
exports.FreshDeskTicket = void 0;
var FreshDeskTicket;
(function (FreshDeskTicket) {
    var PriorityTypeEnum;
    (function (PriorityTypeEnum) {
        PriorityTypeEnum[PriorityTypeEnum["HIGH"] = 'HIGH'] = "HIGH";
        PriorityTypeEnum[PriorityTypeEnum["LOW"] = 'LOW'] = "LOW";
        PriorityTypeEnum[PriorityTypeEnum["MEDIUM"] = 'MEDIUM'] = "MEDIUM";
        PriorityTypeEnum[PriorityTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        PriorityTypeEnum[PriorityTypeEnum["URGENT"] = 'URGENT'] = "URGENT";
    })(PriorityTypeEnum = FreshDeskTicket.PriorityTypeEnum || (FreshDeskTicket.PriorityTypeEnum = {}));
    var StatusTypeEnum;
    (function (StatusTypeEnum) {
        StatusTypeEnum[StatusTypeEnum["CLOSED"] = 'CLOSED'] = "CLOSED";
        StatusTypeEnum[StatusTypeEnum["OPEN"] = 'OPEN'] = "OPEN";
        StatusTypeEnum[StatusTypeEnum["PENDING"] = 'PENDING'] = "PENDING";
        StatusTypeEnum[StatusTypeEnum["PENDINGONEWEEK"] = 'PENDING_ONE_WEEK'] = "PENDINGONEWEEK";
        StatusTypeEnum[StatusTypeEnum["PENDINGTWODAYS"] = 'PENDING_TWO_DAYS'] = "PENDINGTWODAYS";
        StatusTypeEnum[StatusTypeEnum["QUEUEDFORAUTOMATION"] = 'QUEUED_FOR_AUTOMATION'] = "QUEUEDFORAUTOMATION";
        StatusTypeEnum[StatusTypeEnum["RESOLVED"] = 'RESOLVED'] = "RESOLVED";
        StatusTypeEnum[StatusTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        StatusTypeEnum[StatusTypeEnum["WAITINGONATTORNEY"] = 'WAITING_ON_ATTORNEY'] = "WAITINGONATTORNEY";
        StatusTypeEnum[StatusTypeEnum["WAITINGONCUSTOMER"] = 'WAITING_ON_CUSTOMER'] = "WAITINGONCUSTOMER";
        StatusTypeEnum[StatusTypeEnum["WAITINGONOTR"] = 'WAITING_ON_OTR'] = "WAITINGONOTR";
        StatusTypeEnum[StatusTypeEnum["WAITINGONTHIRDPARTY"] = 'WAITING_ON_THIRD_PARTY'] = "WAITINGONTHIRDPARTY";
    })(StatusTypeEnum = FreshDeskTicket.StatusTypeEnum || (FreshDeskTicket.StatusTypeEnum = {}));
})(FreshDeskTicket = exports.FreshDeskTicket || (exports.FreshDeskTicket = {}));
