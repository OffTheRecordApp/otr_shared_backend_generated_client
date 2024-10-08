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
export function AccountLevelFeeToSaveFromJSON(json) {
    return AccountLevelFeeToSaveFromJSONTyped(json, false);
}
export function AccountLevelFeeToSaveFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
        'isNewLegalFee': !exists(json, 'isNewLegalFee') ? undefined : json['isNewLegalFee'],
        'isPermitted': !exists(json, 'isPermitted') ? undefined : json['isPermitted'],
        'lawfirmFee': !exists(json, 'lawfirmFee') ? undefined : json['lawfirmFee'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'violationId': !exists(json, 'violationId') ? undefined : json['violationId'],
    };
}
export function AccountLevelFeeToSaveToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classification': value.classification,
        'isNewLegalFee': value.isNewLegalFee,
        'isPermitted': value.isPermitted,
        'lawfirmFee': value.lawfirmFee,
        'refundEligibility': value.refundEligibility,
        'regionCode': value.regionCode,
        'violationId': value.violationId,
    };
}
/**
* @export
* @enum {string}
*/
export var AccountLevelFeeToSaveClassificationEnum;
(function (AccountLevelFeeToSaveClassificationEnum) {
    AccountLevelFeeToSaveClassificationEnum["CLASS1FELONY"] = "CLASS_1_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASS1MISDEMEANOR"] = "CLASS_1_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASS2FELONY"] = "CLASS_2_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASS2MISDEMEANOR"] = "CLASS_2_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASS3FELONY"] = "CLASS_3_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASS3MISDEMEANOR"] = "CLASS_3_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASS4FELONY"] = "CLASS_4_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASS4MISDEMEANOR"] = "CLASS_4_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASS5FELONY"] = "CLASS_5_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASS6FELONY"] = "CLASS_6_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSA1MISDEMEANOR"] = "CLASS_A1_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASSAFELONY"] = "CLASS_A_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSAINFRACTION"] = "CLASS_A_INFRACTION";
    AccountLevelFeeToSaveClassificationEnum["CLASSAMISDEMEANOR"] = "CLASS_A_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASSAVIOLATION"] = "CLASS_A_VIOLATION";
    AccountLevelFeeToSaveClassificationEnum["CLASSBFELONY"] = "CLASS_B_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSBINFRACTION"] = "CLASS_B_INFRACTION";
    AccountLevelFeeToSaveClassificationEnum["CLASSBMISDEMEANOR"] = "CLASS_B_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASSBVIOLATION"] = "CLASS_B_VIOLATION";
    AccountLevelFeeToSaveClassificationEnum["CLASSCFELONY"] = "CLASS_C_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSCINFRACTION"] = "CLASS_C_INFRACTION";
    AccountLevelFeeToSaveClassificationEnum["CLASSCMISDEMEANOR"] = "CLASS_C_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASSCVIOLATION"] = "CLASS_C_VIOLATION";
    AccountLevelFeeToSaveClassificationEnum["CLASSDFELONY"] = "CLASS_D_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSDMISDEMEANOR"] = "CLASS_D_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["CLASSDVIOLATION"] = "CLASS_D_VIOLATION";
    AccountLevelFeeToSaveClassificationEnum["CLASSEFELONY"] = "CLASS_E_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSFFELONY"] = "CLASS_F_FELONY";
    AccountLevelFeeToSaveClassificationEnum["CLASSHFELONY"] = "CLASS_H_FELONY";
    AccountLevelFeeToSaveClassificationEnum["DISORDERLYPERSONSOFFENSE"] = "DISORDERLY_PERSONS_OFFENSE";
    AccountLevelFeeToSaveClassificationEnum["FELONY"] = "FELONY";
    AccountLevelFeeToSaveClassificationEnum["FELONY1STDEGREE"] = "FELONY_1ST_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["FELONY2NDDEGREE"] = "FELONY_2ND_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["FELONY3RDDEGREE"] = "FELONY_3RD_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["FELONY4THDEGREE"] = "FELONY_4TH_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["FELONY5THDEGREE"] = "FELONY_5TH_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["GROSSMISDEMEANOR"] = "GROSS_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = "HIGH_AND_AGGRAVATED_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["INFRACTION"] = "INFRACTION";
    AccountLevelFeeToSaveClassificationEnum["LEVEL4FELONY"] = "LEVEL_4_FELONY";
    AccountLevelFeeToSaveClassificationEnum["LEVEL5FELONY"] = "LEVEL_5_FELONY";
    AccountLevelFeeToSaveClassificationEnum["LEVEL6FELONY"] = "LEVEL_6_FELONY";
    AccountLevelFeeToSaveClassificationEnum["MINORMISDEMEANOR"] = "MINOR_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANOR"] = "MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANOR1STDEGREE"] = "MISDEMEANOR_1ST_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANOR2NDDEGREE"] = "MISDEMEANOR_2ND_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANOR3RDDEGREE"] = "MISDEMEANOR_3RD_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANOR4THDEGREE"] = "MISDEMEANOR_4TH_DEGREE";
    AccountLevelFeeToSaveClassificationEnum["MISDEMEANORWITHREFUND"] = "MISDEMEANOR_WITH_REFUND";
    AccountLevelFeeToSaveClassificationEnum["NONMOVING"] = "NON_MOVING";
    AccountLevelFeeToSaveClassificationEnum["NONREPORTABLE"] = "NON_REPORTABLE";
    AccountLevelFeeToSaveClassificationEnum["PETTYMISDEMEANOR"] = "PETTY_MISDEMEANOR";
    AccountLevelFeeToSaveClassificationEnum["QUASICRIMINAL"] = "QUASI_CRIMINAL";
    AccountLevelFeeToSaveClassificationEnum["SUMMARYOFFENSE"] = "SUMMARY_OFFENSE";
    AccountLevelFeeToSaveClassificationEnum["SUMMARYOFFENSENOREFUND"] = "SUMMARY_OFFENSE_NO_REFUND";
    AccountLevelFeeToSaveClassificationEnum["WOBBLERTOFELONY"] = "WOBBLER_TO_FELONY";
    AccountLevelFeeToSaveClassificationEnum["WOBBLERTOMISDEMEANOR"] = "WOBBLER_TO_MISDEMEANOR";
})(AccountLevelFeeToSaveClassificationEnum || (AccountLevelFeeToSaveClassificationEnum = {}));
/**
* @export
* @enum {string}
*/
export var AccountLevelFeeToSaveRefundEligibilityEnum;
(function (AccountLevelFeeToSaveRefundEligibilityEnum) {
    AccountLevelFeeToSaveRefundEligibilityEnum["FULLREFUND"] = "FULL_REFUND";
    AccountLevelFeeToSaveRefundEligibilityEnum["NOREFUND"] = "NO_REFUND";
})(AccountLevelFeeToSaveRefundEligibilityEnum || (AccountLevelFeeToSaveRefundEligibilityEnum = {}));
