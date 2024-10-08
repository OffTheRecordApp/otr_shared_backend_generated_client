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
import { PostFeedbackRequest } from '../models';
export interface PostFeedbackUsingPOSTRequest {
    request: PostFeedbackRequest;
    isReview?: boolean;
}
/**
 *
 */
export declare class FeedbackControllerApi extends runtime.BaseAPI {
    /**
     * postFeedback
     */
    postFeedbackUsingPOSTRaw(requestParameters: PostFeedbackUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * postFeedback
     */
    postFeedbackUsingPOST(requestParameters: PostFeedbackUsingPOSTRequest): Promise<object>;
}
