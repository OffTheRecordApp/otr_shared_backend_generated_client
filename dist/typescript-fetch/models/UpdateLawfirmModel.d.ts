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
/**
 *
 * @export
 * @interface UpdateLawfirmModel
 */
export interface UpdateLawfirmModel {
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    aboutUsBlurb?: string;
    /**
     *
     * @type {number}
     * @memberof UpdateLawfirmModel
     */
    caseAssignmentPriority?: number;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    coverPhotoUrl?: string;
    /**
     *
     * @type {number}
     * @memberof UpdateLawfirmModel
     */
    createdBy?: number;
    /**
     *
     * @type {Date}
     * @memberof UpdateLawfirmModel
     */
    establishedDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof UpdateLawfirmModel
     */
    establishedYear?: number;
    /**
     *
     * @type {boolean}
     * @memberof UpdateLawfirmModel
     */
    isTestLawfirm?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof UpdateLawfirmModel
     */
    languagesServed?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof UpdateLawfirmModel
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    lawfirmName?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    lawfirmPaymentModel?: UpdateLawfirmModelLawfirmPaymentModelEnum;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    lawfirmState?: UpdateLawfirmModelLawfirmStateEnum;
    /**
     *
     * @type {Date}
     * @memberof UpdateLawfirmModel
     */
    membershipStartDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    otrNotes?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    primaryEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    primaryPhoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    profilePictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    tagLine?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateLawfirmModel
     */
    website?: string;
}
export declare function UpdateLawfirmModelFromJSON(json: any): UpdateLawfirmModel;
export declare function UpdateLawfirmModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLawfirmModel;
export declare function UpdateLawfirmModelToJSON(value?: UpdateLawfirmModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UpdateLawfirmModelLawfirmPaymentModelEnum {
    DESTINATIONACCOUNT = "DESTINATION_ACCOUNT",
    SEPARATECHARGE = "SEPARATE_CHARGE",
    TRANSFERDEDUCTION = "TRANSFER_DEDUCTION"
}
/**
* @export
* @enum {string}
*/
export declare enum UpdateLawfirmModelLawfirmStateEnum {
    ACCOUNTCLOSED = "ACCOUNT_CLOSED",
    DUPLICATE = "DUPLICATE",
    ESTABLISHED = "ESTABLISHED",
    FUTURELEAD = "FUTURE_LEAD",
    INTRIAL = "IN_TRIAL",
    LAWFIRMINTERESTED = "LAWFIRM_INTERESTED",
    LAWFIRMLEAD = "LAWFIRM_LEAD",
    LAWFIRMNOTINTERESTED = "LAWFIRM_NOT_INTERESTED",
    NOTINTERESTEDFEESPLITTINGETHICS = "NOT_INTERESTED_FEE_SPLITTING_ETHICS",
    NOTINTERESTEDREFUNDETHICS = "NOT_INTERESTED_REFUND_ETHICS",
    ONBOARDING = "ONBOARDING",
    TEMPORARILYTURNEDOFF = "TEMPORARILY_TURNED_OFF",
    TERMINATEDFRAUD = "TERMINATED_FRAUD",
    TERMINATEDPOORSERVICE = "TERMINATED_POOR_SERVICE",
    TERMINATEDPOORSUCCESS = "TERMINATED_POOR_SUCCESS",
    UNDERREVIEW = "UNDER_REVIEW"
}