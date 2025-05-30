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
import * as models from './models';
export interface BillingSubscriptionModel {
    "cancelAt"?: string;
    "canceledAt"?: string;
    "id"?: string;
    "items"?: Array<models.BillingSubscriptionItemModel>;
    "productDescription"?: string;
    "productName"?: string;
    "startAt"?: string;
    "status"?: BillingSubscriptionModel.StatusEnum;
    "trialEndAt"?: string;
    "upcomingInvoicePreview"?: models.BillingUpcomingInvoiceModel;
}
export declare namespace BillingSubscriptionModel {
    enum StatusEnum {
        ACTIVE,
        CANCELED,
        INCOMPLETE,
        INCOMPLETEEXPIRED,
        INTRIALPERIOD,
        PASTDUE,
        UNKNOWN,
        UNPAID
    }
}
