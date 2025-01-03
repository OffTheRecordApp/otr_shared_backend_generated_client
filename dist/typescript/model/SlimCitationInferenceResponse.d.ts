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
import * as models from './models';
export interface SlimCitationInferenceResponse {
    "citation_issue_date"?: models.CitationIssueDate;
    "court_name"?: models.CourtName;
    "handwritten"?: boolean;
    "ocr_output"?: string;
    "skip_map"?: models.SkipMap;
    "template"?: string;
    "violation_names"?: models.ViolationNames;
}
