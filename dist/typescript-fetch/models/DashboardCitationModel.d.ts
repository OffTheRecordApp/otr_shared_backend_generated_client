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
import { PureDate } from './';
/**
 *
 * @export
 * @interface DashboardCitationModel
 */
export interface DashboardCitationModel {
    /**
     *
     * @type {string}
     * @memberof DashboardCitationModel
     */
    cdlStatus?: DashboardCitationModelCdlStatusEnum;
    /**
     *
     * @type {number}
     * @memberof DashboardCitationModel
     */
    citationId?: number;
    /**
     *
     * @type {PureDate}
     * @memberof DashboardCitationModel
     */
    citationIssueDate?: PureDate;
    /**
     *
     * @type {Date}
     * @memberof DashboardCitationModel
     */
    creationDateUtc?: Date;
    /**
     *
     * @type {boolean}
     * @memberof DashboardCitationModel
     */
    dismissedFromContactList?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DashboardCitationModel
     */
    isDeleted?: boolean;
    /**
     *
     * @type {Date}
     * @memberof DashboardCitationModel
     */
    lastUpdatedDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof DashboardCitationModel
     */
    regionCode?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardCitationModel
     */
    signedTicketImageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardCitationModel
     */
    ticketImageUrl?: string;
    /**
     *
     * @type {number}
     * @memberof DashboardCitationModel
     */
    violationCount?: number;
}
export declare function DashboardCitationModelFromJSON(json: any): DashboardCitationModel;
export declare function DashboardCitationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardCitationModel;
export declare function DashboardCitationModelToJSON(value?: DashboardCitationModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum DashboardCitationModelCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = "CDL_IN_COMMERCIAL_VEHICLE",
    CDLINPERSONALVEHICLE = "CDL_IN_PERSONAL_VEHICLE",
    NOCDL = "NO_CDL"
}
