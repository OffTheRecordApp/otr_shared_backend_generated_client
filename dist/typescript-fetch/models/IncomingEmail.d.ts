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
import { CommonHeader, IncomingHeader } from './';
/**
 *
 * @export
 * @interface IncomingEmail
 */
export interface IncomingEmail {
    /**
     *
     * @type {CommonHeader}
     * @memberof IncomingEmail
     */
    commonHeaders?: CommonHeader;
    /**
     *
     * @type {Array<string>}
     * @memberof IncomingEmail
     */
    destination?: Array<string>;
    /**
     *
     * @type {Array<IncomingHeader>}
     * @memberof IncomingEmail
     */
    headers?: Array<IncomingHeader>;
    /**
     *
     * @type {string}
     * @memberof IncomingEmail
     */
    headersTruncated?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmail
     */
    messageId?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmail
     */
    source?: string;
    /**
     *
     * @type {string}
     * @memberof IncomingEmail
     */
    timestamp?: string;
}
export declare function IncomingEmailFromJSON(json: any): IncomingEmail;
export declare function IncomingEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingEmail;
export declare function IncomingEmailToJSON(value?: IncomingEmail | null): any;