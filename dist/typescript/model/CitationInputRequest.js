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
export var CitationInputRequest;
(function (CitationInputRequest) {
    let CdlStatusEnum;
    (function (CdlStatusEnum) {
        CdlStatusEnum[CdlStatusEnum["CDLINCOMMERCIALVEHICLE"] = 'CDL_IN_COMMERCIAL_VEHICLE'] = "CDLINCOMMERCIALVEHICLE";
        CdlStatusEnum[CdlStatusEnum["CDLINPERSONALVEHICLE"] = 'CDL_IN_PERSONAL_VEHICLE'] = "CDLINPERSONALVEHICLE";
        CdlStatusEnum[CdlStatusEnum["NOCDL"] = 'NO_CDL'] = "NOCDL";
    })(CdlStatusEnum = CitationInputRequest.CdlStatusEnum || (CitationInputRequest.CdlStatusEnum = {}));
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["AK"] = 'AK'] = "AK";
        StateEnum[StateEnum["AL"] = 'AL'] = "AL";
        StateEnum[StateEnum["AR"] = 'AR'] = "AR";
        StateEnum[StateEnum["AZ"] = 'AZ'] = "AZ";
        StateEnum[StateEnum["CA"] = 'CA'] = "CA";
        StateEnum[StateEnum["CO"] = 'CO'] = "CO";
        StateEnum[StateEnum["CT"] = 'CT'] = "CT";
        StateEnum[StateEnum["DC"] = 'DC'] = "DC";
        StateEnum[StateEnum["DE"] = 'DE'] = "DE";
        StateEnum[StateEnum["FL"] = 'FL'] = "FL";
        StateEnum[StateEnum["GA"] = 'GA'] = "GA";
        StateEnum[StateEnum["HI"] = 'HI'] = "HI";
        StateEnum[StateEnum["IA"] = 'IA'] = "IA";
        StateEnum[StateEnum["ID"] = 'ID'] = "ID";
        StateEnum[StateEnum["IL"] = 'IL'] = "IL";
        StateEnum[StateEnum["IN"] = 'IN'] = "IN";
        StateEnum[StateEnum["KS"] = 'KS'] = "KS";
        StateEnum[StateEnum["KY"] = 'KY'] = "KY";
        StateEnum[StateEnum["LA"] = 'LA'] = "LA";
        StateEnum[StateEnum["MA"] = 'MA'] = "MA";
        StateEnum[StateEnum["MD"] = 'MD'] = "MD";
        StateEnum[StateEnum["ME"] = 'ME'] = "ME";
        StateEnum[StateEnum["MI"] = 'MI'] = "MI";
        StateEnum[StateEnum["MN"] = 'MN'] = "MN";
        StateEnum[StateEnum["MO"] = 'MO'] = "MO";
        StateEnum[StateEnum["MS"] = 'MS'] = "MS";
        StateEnum[StateEnum["MT"] = 'MT'] = "MT";
        StateEnum[StateEnum["NC"] = 'NC'] = "NC";
        StateEnum[StateEnum["ND"] = 'ND'] = "ND";
        StateEnum[StateEnum["NE"] = 'NE'] = "NE";
        StateEnum[StateEnum["NH"] = 'NH'] = "NH";
        StateEnum[StateEnum["NJ"] = 'NJ'] = "NJ";
        StateEnum[StateEnum["NM"] = 'NM'] = "NM";
        StateEnum[StateEnum["NV"] = 'NV'] = "NV";
        StateEnum[StateEnum["NY"] = 'NY'] = "NY";
        StateEnum[StateEnum["OH"] = 'OH'] = "OH";
        StateEnum[StateEnum["OK"] = 'OK'] = "OK";
        StateEnum[StateEnum["OR"] = 'OR'] = "OR";
        StateEnum[StateEnum["PA"] = 'PA'] = "PA";
        StateEnum[StateEnum["RI"] = 'RI'] = "RI";
        StateEnum[StateEnum["SC"] = 'SC'] = "SC";
        StateEnum[StateEnum["SD"] = 'SD'] = "SD";
        StateEnum[StateEnum["TN"] = 'TN'] = "TN";
        StateEnum[StateEnum["TX"] = 'TX'] = "TX";
        StateEnum[StateEnum["UT"] = 'UT'] = "UT";
        StateEnum[StateEnum["VA"] = 'VA'] = "VA";
        StateEnum[StateEnum["VT"] = 'VT'] = "VT";
        StateEnum[StateEnum["WA"] = 'WA'] = "WA";
        StateEnum[StateEnum["WI"] = 'WI'] = "WI";
        StateEnum[StateEnum["WV"] = 'WV'] = "WV";
        StateEnum[StateEnum["WY"] = 'WY'] = "WY";
    })(StateEnum = CitationInputRequest.StateEnum || (CitationInputRequest.StateEnum = {}));
})(CitationInputRequest || (CitationInputRequest = {}));
