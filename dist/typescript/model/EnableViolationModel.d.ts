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
export interface EnableViolationModel {
    "regionCode"?: string;
    "violationClass"?: EnableViolationModel.ViolationClassEnum;
    "violationId"?: number;
}
export declare namespace EnableViolationModel {
    enum ViolationClassEnum {
        CLASS1FELONY,
        CLASS1MISDEMEANOR,
        CLASS2FELONY,
        CLASS2MISDEMEANOR,
        CLASS3FELONY,
        CLASS3MISDEMEANOR,
        CLASS4FELONY,
        CLASS4MISDEMEANOR,
        CLASS5FELONY,
        CLASS6FELONY,
        CLASSA1MISDEMEANOR,
        CLASSAFELONY,
        CLASSAINFRACTION,
        CLASSAMISDEMEANOR,
        CLASSAVIOLATION,
        CLASSBFELONY,
        CLASSBINFRACTION,
        CLASSBMISDEMEANOR,
        CLASSBVIOLATION,
        CLASSCFELONY,
        CLASSCINFRACTION,
        CLASSCMISDEMEANOR,
        CLASSCVIOLATION,
        CLASSDFELONY,
        CLASSDMISDEMEANOR,
        CLASSDVIOLATION,
        CLASSEFELONY,
        CLASSFFELONY,
        CLASSHFELONY,
        DISORDERLYPERSONSOFFENSE,
        FELONY,
        FELONY1STDEGREE,
        FELONY2NDDEGREE,
        FELONY3RDDEGREE,
        FELONY4THDEGREE,
        FELONY5THDEGREE,
        GROSSMISDEMEANOR,
        HIGHANDAGGRAVATEDMISDEMEANOR,
        INFRACTION,
        LEVEL4FELONY,
        LEVEL5FELONY,
        LEVEL6FELONY,
        MINORMISDEMEANOR,
        MISDEMEANOR,
        MISDEMEANOR1STDEGREE,
        MISDEMEANOR2NDDEGREE,
        MISDEMEANOR3RDDEGREE,
        MISDEMEANOR4THDEGREE,
        MISDEMEANORWITHREFUND,
        NONMOVING,
        NONREPORTABLE,
        PETTYMISDEMEANOR,
        QUASICRIMINAL,
        SUMMARYOFFENSE,
        SUMMARYOFFENSENOREFUND,
        WOBBLERTOFELONY,
        WOBBLERTOMISDEMEANOR
    }
}
