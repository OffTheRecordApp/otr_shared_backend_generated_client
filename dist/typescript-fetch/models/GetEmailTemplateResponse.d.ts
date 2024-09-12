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
/**
 *
 * @export
 * @interface GetEmailTemplateResponse
 */
export interface GetEmailTemplateResponse {
    /**
     *
     * @type {string}
     * @memberof GetEmailTemplateResponse
     */
    templateName?: string;
    /**
     *
     * @type {string}
     * @memberof GetEmailTemplateResponse
     */
    templateText?: string;
}
export declare function GetEmailTemplateResponseFromJSON(json: any): GetEmailTemplateResponse;
export declare function GetEmailTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEmailTemplateResponse;
export declare function GetEmailTemplateResponseToJSON(value?: GetEmailTemplateResponse | null): any;