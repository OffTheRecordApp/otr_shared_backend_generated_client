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


export interface DirectMailTemplate { 
    mailDimensions?: string;
    mailTemplateBackUrl?: string;
    mailTemplateFrontUrl?: string;
    mailTemplateId?: number;
    mailTemplateName?: string;
    mailType?: DirectMailTemplate.MailTypeEnum;
}
export namespace DirectMailTemplate {
    export type MailTypeEnum = 'CHECK' | 'LETTER' | 'POST_CARD';
    export const MailTypeEnum = {
        Check: 'CHECK' as MailTypeEnum,
        Letter: 'LETTER' as MailTypeEnum,
        PostCard: 'POST_CARD' as MailTypeEnum
    };
}


