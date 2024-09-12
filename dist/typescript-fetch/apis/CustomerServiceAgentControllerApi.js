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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { GetCustomerServiceAgentsResponseFromJSON, } from '../models';
/**
 *
 */
export class CustomerServiceAgentControllerApi extends runtime.BaseAPI {
    /**
     * getCustomerServiceAgents
     */
    getCustomerServiceAgentsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.isActive !== undefined) {
                queryParameters['isActive'] = requestParameters.isActive;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cs-agents`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCustomerServiceAgentsResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCustomerServiceAgents
     */
    getCustomerServiceAgentsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerServiceAgentsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}