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
import { Attachment, Author } from './';
/**
 *
 * @export
 * @interface Source
 */
export interface Source {
    /**
     *
     * @type {Array<Attachment>}
     * @memberof Source
     */
    attachments?: Array<Attachment>;
    /**
     *
     * @type {Author}
     * @memberof Source
     */
    author?: Author;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    body?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    deliveredAs?: SourceDeliveredAsEnum;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    id?: string;
    /**
     *
     * @type {boolean}
     * @memberof Source
     */
    redacted?: boolean;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof Source
     */
    url?: string;
}
export declare function SourceFromJSON(json: any): Source;
export declare function SourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Source;
export declare function SourceToJSON(value?: Source | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SourceDeliveredAsEnum {
    ADMININITIATED = "ADMIN_INITIATED",
    INBOUND = "INBOUND",
    OUTBOUND = "OUTBOUND"
}
