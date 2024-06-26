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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class UserPasswordControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary changeUserPassword
     * @param request request
     */
    changeUserPasswordUsingPUT(request: models.ChangeUserPasswordRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary resetUserPasswordByAdmin
     * @param userId userId
     * @param request request
     */
    resetUserPasswordByAdminUsingPUT(userId: number, request: models.ResetUserPasswordRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary resetUserPassword
     * @param request request
     */
    resetUserPasswordUsingPOST(request: models.ResetUserPasswordRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary sendAccountVerificationCode
     * @param userId userId
     * @param verificationMethod verificationMethod
     */
    sendAccountVerificationCodeUsingPOST(userId: string, verificationMethod?: 'CODE_ONLY' | 'WEB_LINK', extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary sendResetPasswordToken
     * @param email email
     */
    sendResetPasswordTokenUsingPOST(email: string, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary verifyPwdResetToken
     * @param token token
     */
    verifyPwdResetTokenUsingGET(token: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.VerifyPasswordResetTokenResponse>;
    /**
     *
     * @summary verifyUserAccount
     * @param code code
     * @param userId userId
     * @param fieldName fieldName
     * @param fieldValue fieldValue
     */
    verifyUserAccountUsingPUT(code: string, userId: string, fieldName?: string, fieldValue?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.VerifyUserAccountResponse>;
}
