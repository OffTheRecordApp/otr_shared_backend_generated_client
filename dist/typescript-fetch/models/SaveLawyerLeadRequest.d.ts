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
 * @interface SaveLawyerLeadRequest
 */
export interface SaveLawyerLeadRequest {
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    firstname?: string;
    /**
     *
     * @type {boolean}
     * @memberof SaveLawyerLeadRequest
     */
    isSelfProclaimedLawyer?: boolean;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    lastname?: string;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    leadProvidedSource?: SaveLawyerLeadRequestLeadProvidedSourceEnum;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    state?: string;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerLeadRequest
     */
    website?: string;
}
export declare function SaveLawyerLeadRequestFromJSON(json: any): SaveLawyerLeadRequest;
export declare function SaveLawyerLeadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveLawyerLeadRequest;
export declare function SaveLawyerLeadRequestToJSON(value?: SaveLawyerLeadRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SaveLawyerLeadRequestLeadProvidedSourceEnum {
    DIRECTMAIL = "DIRECT_MAIL",
    EMAILAD = "EMAIL_AD",
    GOOGLEAD = "GOOGLE_AD",
    NMA = "NMA",
    OTHER = "OTHER",
    UNKNOWN = "UNKNOWN"
}
