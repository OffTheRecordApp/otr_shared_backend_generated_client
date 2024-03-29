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


export interface MediaItemModel { 
    content?: string;
    fileExtension?: string;
    fileName?: string;
    fileSize?: number;
    pageNumber?: number;
    type?: MediaItemModel.TypeEnum;
}
export namespace MediaItemModel {
    export type TypeEnum = 'IMAGE' | 'PDF';
    export const TypeEnum = {
        Image: 'IMAGE' as TypeEnum,
        Pdf: 'PDF' as TypeEnum
    };
}


