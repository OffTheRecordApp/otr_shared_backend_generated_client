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
exports.UserSubscriptionPlanModelReq = void 0;
var UserSubscriptionPlanModelReq;
(function (UserSubscriptionPlanModelReq) {
    var ProductNameEnum;
    (function (ProductNameEnum) {
        ProductNameEnum[ProductNameEnum["CONVOYPRO"] = 'CONVOY_PRO'] = "CONVOYPRO";
        ProductNameEnum[ProductNameEnum["OTRFASTLANE"] = 'OTR_FASTLANE'] = "OTRFASTLANE";
        ProductNameEnum[ProductNameEnum["OTRFASTLANETEEN"] = 'OTR_FASTLANE_TEEN'] = "OTRFASTLANETEEN";
    })(ProductNameEnum = UserSubscriptionPlanModelReq.ProductNameEnum || (UserSubscriptionPlanModelReq.ProductNameEnum = {}));
    var SubscriptionStatusEnum;
    (function (SubscriptionStatusEnum) {
        SubscriptionStatusEnum[SubscriptionStatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INCOMPLETE"] = 'INCOMPLETE'] = "INCOMPLETE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INCOMPLETEEXPIRED"] = 'INCOMPLETE_EXPIRED'] = "INCOMPLETEEXPIRED";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INTRIALPERIOD"] = 'IN_TRIAL_PERIOD'] = "INTRIALPERIOD";
        SubscriptionStatusEnum[SubscriptionStatusEnum["PASTDUE"] = 'PAST_DUE'] = "PASTDUE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        SubscriptionStatusEnum[SubscriptionStatusEnum["UNPAID"] = 'UNPAID'] = "UNPAID";
    })(SubscriptionStatusEnum = UserSubscriptionPlanModelReq.SubscriptionStatusEnum || (UserSubscriptionPlanModelReq.SubscriptionStatusEnum = {}));
})(UserSubscriptionPlanModelReq = exports.UserSubscriptionPlanModelReq || (exports.UserSubscriptionPlanModelReq = {}));
