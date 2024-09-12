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
 * @interface LawfirmDocument
 */
export interface LawfirmDocument {
    /**
     *
     * @type {string}
     * @memberof LawfirmDocument
     */
    clientDocRequirement?: LawfirmDocumentClientDocRequirementEnum;
    /**
     *
     * @type {Date}
     * @memberof LawfirmDocument
     */
    docDate?: Date;
    /**
     *
     * @type {string}
     * @memberof LawfirmDocument
     */
    docExt?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmDocument
     */
    docId?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmDocument
     */
    docType?: LawfirmDocumentDocTypeEnum;
    /**
     *
     * @type {string}
     * @memberof LawfirmDocument
     */
    docUrl?: string;
}
export declare function LawfirmDocumentFromJSON(json: any): LawfirmDocument;
export declare function LawfirmDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmDocument;
export declare function LawfirmDocumentToJSON(value?: LawfirmDocument | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LawfirmDocumentClientDocRequirementEnum {
    ACK = "ACK",
    NONE = "NONE",
    NOTARY = "NOTARY",
    SIGNATURE = "SIGNATURE"
}
/**
* @export
* @enum {string}
*/
export declare enum LawfirmDocumentDocTypeEnum {
    ENGAGEMENTLETTER = "ENGAGEMENT_LETTER",
    OTHERDOCUMENT = "OTHER_DOCUMENT",
    OTHERIMAGE = "OTHER_IMAGE"
}