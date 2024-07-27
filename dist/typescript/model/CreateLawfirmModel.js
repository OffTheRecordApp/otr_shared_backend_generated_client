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
exports.CreateLawfirmModel = void 0;
var CreateLawfirmModel;
(function (CreateLawfirmModel) {
    var LawfirmPaymentModelEnum;
    (function (LawfirmPaymentModelEnum) {
        LawfirmPaymentModelEnum[LawfirmPaymentModelEnum["DESTINATIONACCOUNT"] = 'DESTINATION_ACCOUNT'] = "DESTINATIONACCOUNT";
        LawfirmPaymentModelEnum[LawfirmPaymentModelEnum["SEPARATECHARGE"] = 'SEPARATE_CHARGE'] = "SEPARATECHARGE";
        LawfirmPaymentModelEnum[LawfirmPaymentModelEnum["TRANSFERDEDUCTION"] = 'TRANSFER_DEDUCTION'] = "TRANSFERDEDUCTION";
    })(LawfirmPaymentModelEnum = CreateLawfirmModel.LawfirmPaymentModelEnum || (CreateLawfirmModel.LawfirmPaymentModelEnum = {}));
    var LawfirmStateEnum;
    (function (LawfirmStateEnum) {
        LawfirmStateEnum[LawfirmStateEnum["ACCOUNTCLOSED"] = 'ACCOUNT_CLOSED'] = "ACCOUNTCLOSED";
        LawfirmStateEnum[LawfirmStateEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        LawfirmStateEnum[LawfirmStateEnum["BLACKLISTED"] = 'BLACKLISTED'] = "BLACKLISTED";
        LawfirmStateEnum[LawfirmStateEnum["DEMOCOMPLETED"] = 'DEMO_COMPLETED'] = "DEMOCOMPLETED";
        LawfirmStateEnum[LawfirmStateEnum["DUPLICATE"] = 'DUPLICATE'] = "DUPLICATE";
        LawfirmStateEnum[LawfirmStateEnum["FUTURELEAD"] = 'FUTURE_LEAD'] = "FUTURELEAD";
        LawfirmStateEnum[LawfirmStateEnum["LEAD"] = 'LEAD'] = "LEAD";
        LawfirmStateEnum[LawfirmStateEnum["NEWPARTNER"] = 'NEW_PARTNER'] = "NEWPARTNER";
        LawfirmStateEnum[LawfirmStateEnum["NOTAGOODFIT"] = 'NOT_A_GOOD_FIT'] = "NOTAGOODFIT";
        LawfirmStateEnum[LawfirmStateEnum["NOTINTERESTEDDONOTCONTACT"] = 'NOT_INTERESTED_DO_NOT_CONTACT'] = "NOTINTERESTEDDONOTCONTACT";
        LawfirmStateEnum[LawfirmStateEnum["NOTINTERESTEDFEESPLITTING"] = 'NOT_INTERESTED_FEE_SPLITTING'] = "NOTINTERESTEDFEESPLITTING";
        LawfirmStateEnum[LawfirmStateEnum["NOTINTERESTEDMARKETINGFEE"] = 'NOT_INTERESTED_MARKETING_FEE'] = "NOTINTERESTEDMARKETINGFEE";
        LawfirmStateEnum[LawfirmStateEnum["NOTINTERESTEDMONEYBACKGUARANTEE"] = 'NOT_INTERESTED_MONEY_BACK_GUARANTEE'] = "NOTINTERESTEDMONEYBACKGUARANTEE";
        LawfirmStateEnum[LawfirmStateEnum["NOTINTERESTEDPLATFORMRESISTANCE"] = 'NOT_INTERESTED_PLATFORM_RESISTANCE'] = "NOTINTERESTEDPLATFORMRESISTANCE";
        LawfirmStateEnum[LawfirmStateEnum["PASTINTEREST"] = 'PAST_INTEREST'] = "PASTINTEREST";
        LawfirmStateEnum[LawfirmStateEnum["SUPERVISED"] = 'SUPERVISED'] = "SUPERVISED";
        LawfirmStateEnum[LawfirmStateEnum["TEMPORARILYTURNEDOFF"] = 'TEMPORARILY_TURNED_OFF'] = "TEMPORARILYTURNEDOFF";
        LawfirmStateEnum[LawfirmStateEnum["TERMINATEDFRAUD"] = 'TERMINATED_FRAUD'] = "TERMINATEDFRAUD";
        LawfirmStateEnum[LawfirmStateEnum["TERMINATEDPOORSERVICE"] = 'TERMINATED_POOR_SERVICE'] = "TERMINATEDPOORSERVICE";
        LawfirmStateEnum[LawfirmStateEnum["TERMINATEDPOORSUCCESS"] = 'TERMINATED_POOR_SUCCESS'] = "TERMINATEDPOORSUCCESS";
    })(LawfirmStateEnum = CreateLawfirmModel.LawfirmStateEnum || (CreateLawfirmModel.LawfirmStateEnum = {}));
})(CreateLawfirmModel = exports.CreateLawfirmModel || (exports.CreateLawfirmModel = {}));
