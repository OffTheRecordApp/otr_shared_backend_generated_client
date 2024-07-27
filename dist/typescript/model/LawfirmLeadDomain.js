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
exports.LawfirmLeadDomain = void 0;
var LawfirmLeadDomain;
(function (LawfirmLeadDomain) {
    var LawfirmAddressStateEnum;
    (function (LawfirmAddressStateEnum) {
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["AK"] = 'AK'] = "AK";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["AL"] = 'AL'] = "AL";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["AR"] = 'AR'] = "AR";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["AZ"] = 'AZ'] = "AZ";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["CA"] = 'CA'] = "CA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["CO"] = 'CO'] = "CO";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["CT"] = 'CT'] = "CT";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["DC"] = 'DC'] = "DC";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["DE"] = 'DE'] = "DE";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["FL"] = 'FL'] = "FL";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["GA"] = 'GA'] = "GA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["HI"] = 'HI'] = "HI";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["IA"] = 'IA'] = "IA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["ID"] = 'ID'] = "ID";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["IL"] = 'IL'] = "IL";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["IN"] = 'IN'] = "IN";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["KS"] = 'KS'] = "KS";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["KY"] = 'KY'] = "KY";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["LA"] = 'LA'] = "LA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MA"] = 'MA'] = "MA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MD"] = 'MD'] = "MD";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["ME"] = 'ME'] = "ME";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MI"] = 'MI'] = "MI";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MN"] = 'MN'] = "MN";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MO"] = 'MO'] = "MO";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MS"] = 'MS'] = "MS";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["MT"] = 'MT'] = "MT";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NC"] = 'NC'] = "NC";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["ND"] = 'ND'] = "ND";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NE"] = 'NE'] = "NE";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NH"] = 'NH'] = "NH";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NJ"] = 'NJ'] = "NJ";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NM"] = 'NM'] = "NM";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NV"] = 'NV'] = "NV";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["NY"] = 'NY'] = "NY";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["OH"] = 'OH'] = "OH";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["OK"] = 'OK'] = "OK";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["OR"] = 'OR'] = "OR";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["PA"] = 'PA'] = "PA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["RI"] = 'RI'] = "RI";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["SC"] = 'SC'] = "SC";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["SD"] = 'SD'] = "SD";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["TN"] = 'TN'] = "TN";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["TX"] = 'TX'] = "TX";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["UT"] = 'UT'] = "UT";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["VA"] = 'VA'] = "VA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["VT"] = 'VT'] = "VT";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["WA"] = 'WA'] = "WA";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["WI"] = 'WI'] = "WI";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["WV"] = 'WV'] = "WV";
        LawfirmAddressStateEnum[LawfirmAddressStateEnum["WY"] = 'WY'] = "WY";
    })(LawfirmAddressStateEnum = LawfirmLeadDomain.LawfirmAddressStateEnum || (LawfirmLeadDomain.LawfirmAddressStateEnum = {}));
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
    })(LawfirmStateEnum = LawfirmLeadDomain.LawfirmStateEnum || (LawfirmLeadDomain.LawfirmStateEnum = {}));
    var LawfirmStatusCategoryEnum;
    (function (LawfirmStatusCategoryEnum) {
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["INACTIVE"] = 'INACTIVE'] = "INACTIVE";
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["LEAD"] = 'LEAD'] = "LEAD";
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["NOTINTERESTED"] = 'NOT_INTERESTED'] = "NOTINTERESTED";
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
        LawfirmStatusCategoryEnum[LawfirmStatusCategoryEnum["TERMINATED"] = 'TERMINATED'] = "TERMINATED";
    })(LawfirmStatusCategoryEnum = LawfirmLeadDomain.LawfirmStatusCategoryEnum || (LawfirmLeadDomain.LawfirmStatusCategoryEnum = {}));
})(LawfirmLeadDomain = exports.LawfirmLeadDomain || (exports.LawfirmLeadDomain = {}));
