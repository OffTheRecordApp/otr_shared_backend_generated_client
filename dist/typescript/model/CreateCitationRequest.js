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
exports.CreateCitationRequest = void 0;
var CreateCitationRequest;
(function (CreateCitationRequest) {
    var CitationStateEnum;
    (function (CitationStateEnum) {
        CitationStateEnum[CitationStateEnum["AK"] = 'AK'] = "AK";
        CitationStateEnum[CitationStateEnum["AL"] = 'AL'] = "AL";
        CitationStateEnum[CitationStateEnum["AR"] = 'AR'] = "AR";
        CitationStateEnum[CitationStateEnum["AZ"] = 'AZ'] = "AZ";
        CitationStateEnum[CitationStateEnum["CA"] = 'CA'] = "CA";
        CitationStateEnum[CitationStateEnum["CO"] = 'CO'] = "CO";
        CitationStateEnum[CitationStateEnum["CT"] = 'CT'] = "CT";
        CitationStateEnum[CitationStateEnum["DC"] = 'DC'] = "DC";
        CitationStateEnum[CitationStateEnum["DE"] = 'DE'] = "DE";
        CitationStateEnum[CitationStateEnum["FL"] = 'FL'] = "FL";
        CitationStateEnum[CitationStateEnum["GA"] = 'GA'] = "GA";
        CitationStateEnum[CitationStateEnum["HI"] = 'HI'] = "HI";
        CitationStateEnum[CitationStateEnum["IA"] = 'IA'] = "IA";
        CitationStateEnum[CitationStateEnum["ID"] = 'ID'] = "ID";
        CitationStateEnum[CitationStateEnum["IL"] = 'IL'] = "IL";
        CitationStateEnum[CitationStateEnum["IN"] = 'IN'] = "IN";
        CitationStateEnum[CitationStateEnum["KS"] = 'KS'] = "KS";
        CitationStateEnum[CitationStateEnum["KY"] = 'KY'] = "KY";
        CitationStateEnum[CitationStateEnum["LA"] = 'LA'] = "LA";
        CitationStateEnum[CitationStateEnum["MA"] = 'MA'] = "MA";
        CitationStateEnum[CitationStateEnum["MD"] = 'MD'] = "MD";
        CitationStateEnum[CitationStateEnum["ME"] = 'ME'] = "ME";
        CitationStateEnum[CitationStateEnum["MI"] = 'MI'] = "MI";
        CitationStateEnum[CitationStateEnum["MN"] = 'MN'] = "MN";
        CitationStateEnum[CitationStateEnum["MO"] = 'MO'] = "MO";
        CitationStateEnum[CitationStateEnum["MS"] = 'MS'] = "MS";
        CitationStateEnum[CitationStateEnum["MT"] = 'MT'] = "MT";
        CitationStateEnum[CitationStateEnum["NC"] = 'NC'] = "NC";
        CitationStateEnum[CitationStateEnum["ND"] = 'ND'] = "ND";
        CitationStateEnum[CitationStateEnum["NE"] = 'NE'] = "NE";
        CitationStateEnum[CitationStateEnum["NH"] = 'NH'] = "NH";
        CitationStateEnum[CitationStateEnum["NJ"] = 'NJ'] = "NJ";
        CitationStateEnum[CitationStateEnum["NM"] = 'NM'] = "NM";
        CitationStateEnum[CitationStateEnum["NV"] = 'NV'] = "NV";
        CitationStateEnum[CitationStateEnum["NY"] = 'NY'] = "NY";
        CitationStateEnum[CitationStateEnum["OH"] = 'OH'] = "OH";
        CitationStateEnum[CitationStateEnum["OK"] = 'OK'] = "OK";
        CitationStateEnum[CitationStateEnum["OR"] = 'OR'] = "OR";
        CitationStateEnum[CitationStateEnum["PA"] = 'PA'] = "PA";
        CitationStateEnum[CitationStateEnum["RI"] = 'RI'] = "RI";
        CitationStateEnum[CitationStateEnum["SC"] = 'SC'] = "SC";
        CitationStateEnum[CitationStateEnum["SD"] = 'SD'] = "SD";
        CitationStateEnum[CitationStateEnum["TN"] = 'TN'] = "TN";
        CitationStateEnum[CitationStateEnum["TX"] = 'TX'] = "TX";
        CitationStateEnum[CitationStateEnum["UT"] = 'UT'] = "UT";
        CitationStateEnum[CitationStateEnum["VA"] = 'VA'] = "VA";
        CitationStateEnum[CitationStateEnum["VT"] = 'VT'] = "VT";
        CitationStateEnum[CitationStateEnum["WA"] = 'WA'] = "WA";
        CitationStateEnum[CitationStateEnum["WI"] = 'WI'] = "WI";
        CitationStateEnum[CitationStateEnum["WV"] = 'WV'] = "WV";
        CitationStateEnum[CitationStateEnum["WY"] = 'WY'] = "WY";
    })(CitationStateEnum = CreateCitationRequest.CitationStateEnum || (CreateCitationRequest.CitationStateEnum = {}));
    var ClientTypeEnum;
    (function (ClientTypeEnum) {
        ClientTypeEnum[ClientTypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        ClientTypeEnum[ClientTypeEnum["DESKTOPWEBAPP"] = 'DESKTOP_WEBAPP'] = "DESKTOPWEBAPP";
        ClientTypeEnum[ClientTypeEnum["DMVGO"] = 'DMV_GO'] = "DMVGO";
        ClientTypeEnum[ClientTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
        ClientTypeEnum[ClientTypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        ClientTypeEnum[ClientTypeEnum["FRESHDESK"] = 'FRESH_DESK'] = "FRESHDESK";
        ClientTypeEnum[ClientTypeEnum["IOS"] = 'IOS'] = "IOS";
        ClientTypeEnum[ClientTypeEnum["LOCALHOST"] = 'LOCALHOST'] = "LOCALHOST";
        ClientTypeEnum[ClientTypeEnum["MOBILEWEBAPP"] = 'MOBILE_WEBAPP'] = "MOBILEWEBAPP";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLE"] = 'OTR_ADMIN_CONSOLE'] = "OTRADMINCONSOLE";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLEDEVO"] = 'OTR_ADMIN_CONSOLE_DEVO'] = "OTRADMINCONSOLEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = 'OTR_ADMIN_CONSOLE_LOCALHOST'] = "OTRADMINCONSOLELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTREXPLORER"] = 'OTR_EXPLORER'] = "OTREXPLORER";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTAL"] = 'OTR_LAWFIRM_PORTAL'] = "OTRLAWFIRMPORTAL";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = 'OTR_LAWFIRM_PORTAL_DEVO'] = "OTRLAWFIRMPORTALDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = 'OTR_LAWFIRM_PORTAL_LOCALHOST'] = "OTRLAWFIRMPORTALLOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITE"] = 'OTR_WEBSITE'] = "OTRWEBSITE";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITEDEVO"] = 'OTR_WEBSITE_DEVO'] = "OTRWEBSITEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITELOCALHOST"] = 'OTR_WEBSITE_LOCALHOST'] = "OTRWEBSITELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWIDGET"] = 'OTR_WIDGET'] = "OTRWIDGET";
        ClientTypeEnum[ClientTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(ClientTypeEnum = CreateCitationRequest.ClientTypeEnum || (CreateCitationRequest.ClientTypeEnum = {}));
})(CreateCitationRequest = exports.CreateCitationRequest || (exports.CreateCitationRequest = {}));
