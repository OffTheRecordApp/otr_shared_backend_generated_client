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
import * as models from '../model/models';
export declare class CoachingCardsControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary acknowledgeCoachingCard
     * @param request request
     */
    acknowledgeCoachingCardUsingPUT(request: models.UpdateCoachingCardRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary getCoachingCardCategories
     */
    getCoachingCardCategoriesUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCoachingCardCategoriesResponse>;
    /**
     *
     * @summary listUserCoachingCards
     * @param userId userId
     * @param coachingCardType coachingCardType
     * @param includeCreated includeCreated
     * @param includeReceived includeReceived
     */
    listUserCoachingCardsUsingGET(userId: number, coachingCardType?: 'COACHING' | 'KUDOS', includeCreated?: boolean, includeReceived?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListUserCoachingCardsResponse>;
    /**
     *
     * @summary saveCoachingCard
     * @param request request
     */
    saveCoachingCardUsingPOST(request: models.SaveCoachingCardRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
