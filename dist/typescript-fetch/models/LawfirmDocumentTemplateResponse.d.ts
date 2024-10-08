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
import { LawfirmDocumentTemplate } from './';
/**
 *
 * @export
 * @interface LawfirmDocumentTemplateResponse
 */
export interface LawfirmDocumentTemplateResponse {
    /**
     *
     * @type {Array<LawfirmDocumentTemplate>}
     * @memberof LawfirmDocumentTemplateResponse
     */
    documents?: Array<LawfirmDocumentTemplate>;
}
export declare function LawfirmDocumentTemplateResponseFromJSON(json: any): LawfirmDocumentTemplateResponse;
export declare function LawfirmDocumentTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmDocumentTemplateResponse;
export declare function LawfirmDocumentTemplateResponseToJSON(value?: LawfirmDocumentTemplateResponse | null): any;
