/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
import { GetCompetitionResponseModelFromJSON, GetCompetitionResponseModelToJSON, } from './';
export function GetLawfirmFeeModelFromJSON(json) {
    return GetLawfirmFeeModelFromJSONTyped(json, false);
}
export function GetLawfirmFeeModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountFee': !exists(json, 'accountFee') ? undefined : json['accountFee'],
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'competition': !exists(json, 'competition') ? undefined : GetCompetitionResponseModelFromJSON(json['competition']),
        'courtFee': !exists(json, 'courtFee') ? undefined : json['courtFee'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'lawfirmFee': !exists(json, 'lawfirmFee') ? undefined : json['lawfirmFee'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
        'violationName': !exists(json, 'violationName') ? undefined : json['violationName'],
    };
}
export function GetLawfirmFeeModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountFee': value.accountFee,
        'classification': value.classification,
        'competition': GetCompetitionResponseModelToJSON(value.competition),
        'courtFee': value.courtFee,
        'courtId': value.courtId,
        'isDeleted': value.isDeleted,
        'lawfirmFee': value.lawfirmFee,
        'refundEligibility': value.refundEligibility,
        'violationId': value.violationId,
        'violationName': value.violationName,
    };
}
/**
* @export
* @enum {string}
*/
export var GetLawfirmFeeModelClassificationEnum;
(function (GetLawfirmFeeModelClassificationEnum) {
    GetLawfirmFeeModelClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    GetLawfirmFeeModelClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    GetLawfirmFeeModelClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    GetLawfirmFeeModelClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    GetLawfirmFeeModelClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    GetLawfirmFeeModelClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    GetLawfirmFeeModelClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    GetLawfirmFeeModelClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    GetLawfirmFeeModelClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    GetLawfirmFeeModelClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    GetLawfirmFeeModelClassificationEnum["FELONY"] = "FELONY";
    GetLawfirmFeeModelClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    GetLawfirmFeeModelClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    GetLawfirmFeeModelClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    GetLawfirmFeeModelClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    GetLawfirmFeeModelClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    GetLawfirmFeeModelClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["INFRACTION"] = "INFRACTION";
    GetLawfirmFeeModelClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    GetLawfirmFeeModelClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    GetLawfirmFeeModelClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    GetLawfirmFeeModelClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    GetLawfirmFeeModelClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    GetLawfirmFeeModelClassificationEnum["NONMOVING"] = "NON_MOVING";
    GetLawfirmFeeModelClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    GetLawfirmFeeModelClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    GetLawfirmFeeModelClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    GetLawfirmFeeModelClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    GetLawfirmFeeModelClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    GetLawfirmFeeModelClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    GetLawfirmFeeModelClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(GetLawfirmFeeModelClassificationEnum || (GetLawfirmFeeModelClassificationEnum = {}));
/**
* @export
* @enum {string}
*/
export var GetLawfirmFeeModelRefundEligibilityEnum;
(function (GetLawfirmFeeModelRefundEligibilityEnum) {
    GetLawfirmFeeModelRefundEligibilityEnum["FULLREFUND"] = "FULL_REFUND";
    GetLawfirmFeeModelRefundEligibilityEnum["NOREFUND"] = "NO_REFUND";
})(GetLawfirmFeeModelRefundEligibilityEnum || (GetLawfirmFeeModelRefundEligibilityEnum = {}));