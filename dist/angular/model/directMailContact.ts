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


export interface DirectMailContact { 
    backTemplateUrlSent?: string;
    costInCents?: number;
    estimatedDeliveryDate?: string;
    frontTemplateUrlSent?: string;
    lobReferenceId?: string;
    mailDimensions?: string;
    mailTemplateName?: string;
    mailType?: DirectMailContact.MailTypeEnum;
    processedForDeliveryDate?: string;
    trackingStatus?: DirectMailContact.TrackingStatusEnum;
}
export namespace DirectMailContact {
    export type MailTypeEnum = 'CHECK' | 'LETTER' | 'POST_CARD';
    export const MailTypeEnum = {
        Check: 'CHECK' as MailTypeEnum,
        Letter: 'LETTER' as MailTypeEnum,
        PostCard: 'POST_CARD' as MailTypeEnum
    };
    export type TrackingStatusEnum = 'CREATED' | 'IN_LOCAL_AREA' | 'IN_TRANSIT' | 'PROCESSED_FOR_DELIVERY' | 'RETURNED_TO_SENDER' | 'RE_ROUTED';
    export const TrackingStatusEnum = {
        Created: 'CREATED' as TrackingStatusEnum,
        InLocalArea: 'IN_LOCAL_AREA' as TrackingStatusEnum,
        InTransit: 'IN_TRANSIT' as TrackingStatusEnum,
        ProcessedForDelivery: 'PROCESSED_FOR_DELIVERY' as TrackingStatusEnum,
        ReturnedToSender: 'RETURNED_TO_SENDER' as TrackingStatusEnum,
        ReRouted: 'RE_ROUTED' as TrackingStatusEnum
    };
}

