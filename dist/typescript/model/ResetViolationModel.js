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
export var ResetViolationModel;
(function (ResetViolationModel) {
    let ViolationClassEnum;
    (function (ViolationClassEnum) {
        ViolationClassEnum[ViolationClassEnum["CLASS1FELONY"] = 'CLASS_1_FELONY'] = "CLASS1FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASS1MISDEMEANOR"] = 'CLASS_1_MISDEMEANOR'] = "CLASS1MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASS2FELONY"] = 'CLASS_2_FELONY'] = "CLASS2FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASS2MISDEMEANOR"] = 'CLASS_2_MISDEMEANOR'] = "CLASS2MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASS3FELONY"] = 'CLASS_3_FELONY'] = "CLASS3FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASS3MISDEMEANOR"] = 'CLASS_3_MISDEMEANOR'] = "CLASS3MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASS4FELONY"] = 'CLASS_4_FELONY'] = "CLASS4FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASS4MISDEMEANOR"] = 'CLASS_4_MISDEMEANOR'] = "CLASS4MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASS5FELONY"] = 'CLASS_5_FELONY'] = "CLASS5FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASS6FELONY"] = 'CLASS_6_FELONY'] = "CLASS6FELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSA1MISDEMEANOR"] = 'CLASS_A1_MISDEMEANOR'] = "CLASSA1MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASSAFELONY"] = 'CLASS_A_FELONY'] = "CLASSAFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSAINFRACTION"] = 'CLASS_A_INFRACTION'] = "CLASSAINFRACTION";
        ViolationClassEnum[ViolationClassEnum["CLASSAMISDEMEANOR"] = 'CLASS_A_MISDEMEANOR'] = "CLASSAMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASSAVIOLATION"] = 'CLASS_A_VIOLATION'] = "CLASSAVIOLATION";
        ViolationClassEnum[ViolationClassEnum["CLASSBFELONY"] = 'CLASS_B_FELONY'] = "CLASSBFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSBINFRACTION"] = 'CLASS_B_INFRACTION'] = "CLASSBINFRACTION";
        ViolationClassEnum[ViolationClassEnum["CLASSBMISDEMEANOR"] = 'CLASS_B_MISDEMEANOR'] = "CLASSBMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASSBVIOLATION"] = 'CLASS_B_VIOLATION'] = "CLASSBVIOLATION";
        ViolationClassEnum[ViolationClassEnum["CLASSCFELONY"] = 'CLASS_C_FELONY'] = "CLASSCFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSCINFRACTION"] = 'CLASS_C_INFRACTION'] = "CLASSCINFRACTION";
        ViolationClassEnum[ViolationClassEnum["CLASSCMISDEMEANOR"] = 'CLASS_C_MISDEMEANOR'] = "CLASSCMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASSCVIOLATION"] = 'CLASS_C_VIOLATION'] = "CLASSCVIOLATION";
        ViolationClassEnum[ViolationClassEnum["CLASSDFELONY"] = 'CLASS_D_FELONY'] = "CLASSDFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSDMISDEMEANOR"] = 'CLASS_D_MISDEMEANOR'] = "CLASSDMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["CLASSDVIOLATION"] = 'CLASS_D_VIOLATION'] = "CLASSDVIOLATION";
        ViolationClassEnum[ViolationClassEnum["CLASSEFELONY"] = 'CLASS_E_FELONY'] = "CLASSEFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSFFELONY"] = 'CLASS_F_FELONY'] = "CLASSFFELONY";
        ViolationClassEnum[ViolationClassEnum["CLASSHFELONY"] = 'CLASS_H_FELONY'] = "CLASSHFELONY";
        ViolationClassEnum[ViolationClassEnum["DISORDERLYPERSONSOFFENSE"] = 'DISORDERLY_PERSONS_OFFENSE'] = "DISORDERLYPERSONSOFFENSE";
        ViolationClassEnum[ViolationClassEnum["FELONY"] = 'FELONY'] = "FELONY";
        ViolationClassEnum[ViolationClassEnum["FELONY1STDEGREE"] = 'FELONY_1ST_DEGREE'] = "FELONY1STDEGREE";
        ViolationClassEnum[ViolationClassEnum["FELONY2NDDEGREE"] = 'FELONY_2ND_DEGREE'] = "FELONY2NDDEGREE";
        ViolationClassEnum[ViolationClassEnum["FELONY3RDDEGREE"] = 'FELONY_3RD_DEGREE'] = "FELONY3RDDEGREE";
        ViolationClassEnum[ViolationClassEnum["FELONY4THDEGREE"] = 'FELONY_4TH_DEGREE'] = "FELONY4THDEGREE";
        ViolationClassEnum[ViolationClassEnum["FELONY5THDEGREE"] = 'FELONY_5TH_DEGREE'] = "FELONY5THDEGREE";
        ViolationClassEnum[ViolationClassEnum["GROSSMISDEMEANOR"] = 'GROSS_MISDEMEANOR'] = "GROSSMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["HIGHANDAGGRAVATEDMISDEMEANOR"] = 'HIGH_AND_AGGRAVATED_MISDEMEANOR'] = "HIGHANDAGGRAVATEDMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["INFRACTION"] = 'INFRACTION'] = "INFRACTION";
        ViolationClassEnum[ViolationClassEnum["LEVEL4FELONY"] = 'LEVEL_4_FELONY'] = "LEVEL4FELONY";
        ViolationClassEnum[ViolationClassEnum["LEVEL5FELONY"] = 'LEVEL_5_FELONY'] = "LEVEL5FELONY";
        ViolationClassEnum[ViolationClassEnum["LEVEL6FELONY"] = 'LEVEL_6_FELONY'] = "LEVEL6FELONY";
        ViolationClassEnum[ViolationClassEnum["MINORMISDEMEANOR"] = 'MINOR_MISDEMEANOR'] = "MINORMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANOR"] = 'MISDEMEANOR'] = "MISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANOR1STDEGREE"] = 'MISDEMEANOR_1ST_DEGREE'] = "MISDEMEANOR1STDEGREE";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANOR2NDDEGREE"] = 'MISDEMEANOR_2ND_DEGREE'] = "MISDEMEANOR2NDDEGREE";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANOR3RDDEGREE"] = 'MISDEMEANOR_3RD_DEGREE'] = "MISDEMEANOR3RDDEGREE";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANOR4THDEGREE"] = 'MISDEMEANOR_4TH_DEGREE'] = "MISDEMEANOR4THDEGREE";
        ViolationClassEnum[ViolationClassEnum["MISDEMEANORWITHREFUND"] = 'MISDEMEANOR_WITH_REFUND'] = "MISDEMEANORWITHREFUND";
        ViolationClassEnum[ViolationClassEnum["NONMOVING"] = 'NON_MOVING'] = "NONMOVING";
        ViolationClassEnum[ViolationClassEnum["NONREPORTABLE"] = 'NON_REPORTABLE'] = "NONREPORTABLE";
        ViolationClassEnum[ViolationClassEnum["PETTYMISDEMEANOR"] = 'PETTY_MISDEMEANOR'] = "PETTYMISDEMEANOR";
        ViolationClassEnum[ViolationClassEnum["QUASICRIMINAL"] = 'QUASI_CRIMINAL'] = "QUASICRIMINAL";
        ViolationClassEnum[ViolationClassEnum["SUMMARYOFFENSE"] = 'SUMMARY_OFFENSE'] = "SUMMARYOFFENSE";
        ViolationClassEnum[ViolationClassEnum["SUMMARYOFFENSENOREFUND"] = 'SUMMARY_OFFENSE_NO_REFUND'] = "SUMMARYOFFENSENOREFUND";
        ViolationClassEnum[ViolationClassEnum["WOBBLERTOFELONY"] = 'WOBBLER_TO_FELONY'] = "WOBBLERTOFELONY";
        ViolationClassEnum[ViolationClassEnum["WOBBLERTOMISDEMEANOR"] = 'WOBBLER_TO_MISDEMEANOR'] = "WOBBLERTOMISDEMEANOR";
    })(ViolationClassEnum = ResetViolationModel.ViolationClassEnum || (ResetViolationModel.ViolationClassEnum = {}));
})(ResetViolationModel || (ResetViolationModel = {}));
