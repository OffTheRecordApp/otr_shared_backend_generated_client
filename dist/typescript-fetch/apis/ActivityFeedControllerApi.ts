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
    GetActivityFeedResponse,
    GetActivityFeedResponseFromJSON,
    GetActivityFeedResponseToJSON,
    ListCaseOutcomesResponse,
    ListCaseOutcomesResponseFromJSON,
    ListCaseOutcomesResponseToJSON,
} from '../models';

export interface ListActivityFeedUsingGETRequest {
    limit: number;
    nextPageToken?: string;
    previousPageToken?: string;
    regionCode?: string;
}

export interface ListCaseOutcomesUsingGETRequest {
    includeCriminal?: boolean;
    limit?: number;
    regionCode?: string;
    resolutionStatuses?: ListCaseOutcomesUsingGETResolutionStatusesEnum;
    startDate?: Date;
}

/**
 * 
 */
export class ActivityFeedControllerApi extends runtime.BaseAPI {

    /**
     * listActivityFeed
     */
    async listActivityFeedUsingGETRaw(requestParameters: ListActivityFeedUsingGETRequest): Promise<runtime.ApiResponse<GetActivityFeedResponse>> {
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling listActivityFeedUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = requestParameters.nextPageToken;
        }

        if (requestParameters.previousPageToken !== undefined) {
            queryParameters['previousPageToken'] = requestParameters.previousPageToken;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/activity-feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetActivityFeedResponseFromJSON(jsonValue));
    }

    /**
     * listActivityFeed
     */
    async listActivityFeedUsingGET(requestParameters: ListActivityFeedUsingGETRequest): Promise<GetActivityFeedResponse> {
        const response = await this.listActivityFeedUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * listCaseOutcomes
     */
    async listCaseOutcomesUsingGETRaw(requestParameters: ListCaseOutcomesUsingGETRequest): Promise<runtime.ApiResponse<ListCaseOutcomesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.includeCriminal !== undefined) {
            queryParameters['includeCriminal'] = requestParameters.includeCriminal;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        if (requestParameters.resolutionStatuses !== undefined) {
            queryParameters['resolutionStatuses'] = requestParameters.resolutionStatuses;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = (requestParameters.startDate as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/activity-feed/case-outcomes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCaseOutcomesResponseFromJSON(jsonValue));
    }

    /**
     * listCaseOutcomes
     */
    async listCaseOutcomesUsingGET(requestParameters: ListCaseOutcomesUsingGETRequest): Promise<ListCaseOutcomesResponse> {
        const response = await this.listCaseOutcomesUsingGETRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ListCaseOutcomesUsingGETResolutionStatusesEnum {
    LOST = 'LOST',
    POINTSREDUCED = 'POINTS_REDUCED',
    REDUCEDTONONMOVER = 'REDUCED_TO_NON_MOVER',
    TICKETDISMISSED = 'TICKET_DISMISSED'
}