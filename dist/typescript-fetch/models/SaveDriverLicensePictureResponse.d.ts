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
import { DriverLicenseModel } from './';
/**
 *
 * @export
 * @interface SaveDriverLicensePictureResponse
 */
export interface SaveDriverLicensePictureResponse {
    /**
     *
     * @type {DriverLicenseModel}
     * @memberof SaveDriverLicensePictureResponse
     */
    driverLicenseModel?: DriverLicenseModel;
}
export declare function SaveDriverLicensePictureResponseFromJSON(json: any): SaveDriverLicensePictureResponse;
export declare function SaveDriverLicensePictureResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveDriverLicensePictureResponse;
export declare function SaveDriverLicensePictureResponseToJSON(value?: SaveDriverLicensePictureResponse | null): any;
