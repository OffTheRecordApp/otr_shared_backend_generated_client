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
export interface LineItem {
    "additionalDescription"?: string;
    "feeAmount"?: number;
    "lineItem"?: LineItem.LineItemEnum;
}
export declare namespace LineItem {
    enum LineItemEnum {
        ACCIDENTFEE,
        BASELEGALFEE,
        BONDFEE,
        BOOKINGFEE,
        CDLFEE,
        COURTFEE,
        DISPUTEFEE,
        FINEPAYMENT,
        FTAFEE,
        INITIALSUBSCRIPTIONFEE,
        LATEFEE,
        MBGREFUND,
        MVSFEE,
        OTHER,
        OTRCREDIT,
        OTRSUBSCRIPTIONCREDIT,
        PAYMENTPLANSERVICEFEE,
        WARRANTFEE
    }
}
