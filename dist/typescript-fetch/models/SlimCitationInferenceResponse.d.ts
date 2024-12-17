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
import { CitationIssueDate, CourtName, SkipMap, ViolationNames } from './';
/**
 *
 * @export
 * @interface SlimCitationInferenceResponse
 */
export interface SlimCitationInferenceResponse {
    /**
     *
     * @type {CitationIssueDate}
     * @memberof SlimCitationInferenceResponse
     */
    citationIssueDate?: CitationIssueDate;
    /**
     *
     * @type {CourtName}
     * @memberof SlimCitationInferenceResponse
     */
    courtName?: CourtName;
    /**
     *
     * @type {boolean}
     * @memberof SlimCitationInferenceResponse
     */
    handwritten?: boolean;
    /**
     *
     * @type {string}
     * @memberof SlimCitationInferenceResponse
     */
    ocrOutput?: string;
    /**
     *
     * @type {SkipMap}
     * @memberof SlimCitationInferenceResponse
     */
    skipMap?: SkipMap;
    /**
     *
     * @type {string}
     * @memberof SlimCitationInferenceResponse
     */
    template?: string;
    /**
     *
     * @type {ViolationNames}
     * @memberof SlimCitationInferenceResponse
     */
    violationNames?: ViolationNames;
}
export declare function SlimCitationInferenceResponseFromJSON(json: any): SlimCitationInferenceResponse;
export declare function SlimCitationInferenceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlimCitationInferenceResponse;
export declare function SlimCitationInferenceResponseToJSON(value?: SlimCitationInferenceResponse | null): any;