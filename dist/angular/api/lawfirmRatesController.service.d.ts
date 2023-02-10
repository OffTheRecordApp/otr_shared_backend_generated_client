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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoRatesRequest } from '../model/geoRatesRequest';
import { LawfirmsRatesResponse } from '../model/lawfirmsRatesResponse';
import { Configuration } from '../configuration';
export declare class LawfirmRatesControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * getActiveRatesByArea
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getActiveRatesByAreaUsingPOST(request: GeoRatesRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<LawfirmsRatesResponse>;
    getActiveRatesByAreaUsingPOST(request: GeoRatesRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<LawfirmsRatesResponse>>;
    getActiveRatesByAreaUsingPOST(request: GeoRatesRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<LawfirmsRatesResponse>>;
}
