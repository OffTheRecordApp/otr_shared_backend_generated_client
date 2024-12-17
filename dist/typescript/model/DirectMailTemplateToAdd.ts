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

export interface DirectMailTemplateToAdd {
    "fileNamePrefix"?: string;
    "mailDimensions"?: string;
    "mailType"?: DirectMailTemplateToAdd.MailTypeEnum;
    "templateBackHtml"?: string;
    "templateFrontHtml"?: string;
    "templateName"?: string;
}

export namespace DirectMailTemplateToAdd {
    export enum MailTypeEnum {
        CHECK = <any> 'CHECK',
        LETTER = <any> 'LETTER',
        POSTCARD = <any> 'POST_CARD'
    }
}