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
import { SaveLawfirmSurchargeModel } from './';
/**
 *
 * @export
 * @interface SaveLawfirmSurchargesRequest
 */
export interface SaveLawfirmSurchargesRequest {
    /**
     *
     * @type {Array<SaveLawfirmSurchargeModel>}
     * @memberof SaveLawfirmSurchargesRequest
     */
    surcharges?: Array<SaveLawfirmSurchargeModel>;
}
export declare function SaveLawfirmSurchargesRequestFromJSON(json: any): SaveLawfirmSurchargesRequest;
export declare function SaveLawfirmSurchargesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveLawfirmSurchargesRequest;
export declare function SaveLawfirmSurchargesRequestToJSON(value?: SaveLawfirmSurchargesRequest | null): any;