/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import {
    SSLCertificateResponse,
    SSLCertificateResponseFromJSON,
    SSLCertificateResponseToJSON,
} from '../models';

export interface GetSSLPublicCertFileUsingGETRequest {
    encoding: GetSSLPublicCertFileUsingGETEncodingEnum;
}

/**
 * 
 */
export class CertificateControllerApi extends runtime.BaseAPI {

    /**
     * getSSLPublicCertFile
     */
    async getSSLPublicCertFileUsingGETRaw(requestParameters: GetSSLPublicCertFileUsingGETRequest): Promise<runtime.ApiResponse<SSLCertificateResponse>> {
        if (requestParameters.encoding === null || requestParameters.encoding === undefined) {
            throw new runtime.RequiredError('encoding','Required parameter requestParameters.encoding was null or undefined when calling getSSLPublicCertFileUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.encoding !== undefined) {
            queryParameters['encoding'] = requestParameters.encoding;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/certificates/ssl`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SSLCertificateResponseFromJSON(jsonValue));
    }

    /**
     * getSSLPublicCertFile
     */
    async getSSLPublicCertFileUsingGET(requestParameters: GetSSLPublicCertFileUsingGETRequest): Promise<SSLCertificateResponse> {
        const response = await this.getSSLPublicCertFileUsingGETRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetSSLPublicCertFileUsingGETEncodingEnum {
    DER = 'DER',
    PEM = 'PEM'
}
