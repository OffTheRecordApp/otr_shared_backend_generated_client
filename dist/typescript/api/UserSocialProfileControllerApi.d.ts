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
export declare class UserSocialProfileControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary removeUserSocialProfile
     * @param platform platform
     * @param userId userId
     */
    removeUserSocialProfileUsingDELETE(platform: 'INSTAGRAM' | 'SNAPCHAT' | 'TIKTOK' | 'TWITCH' | 'X' | 'YOUTUBE', userId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary saveUserSocialProfiles
     * @param userId userId
     * @param request request
     */
    saveUserSocialProfilesUsingPOST(userId: string, request: models.SaveUserSocialProfileRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
