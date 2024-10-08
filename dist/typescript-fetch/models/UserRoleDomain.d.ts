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
 * @interface UserRoleDomain
 */
export interface UserRoleDomain {
    /**
     *
     * @type {string}
     * @memberof UserRoleDomain
     */
    roleType?: UserRoleDomainRoleTypeEnum;
}
export declare function UserRoleDomainFromJSON(json: any): UserRoleDomain;
export declare function UserRoleDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRoleDomain;
export declare function UserRoleDomainToJSON(value?: UserRoleDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserRoleDomainRoleTypeEnum {
    ADMIN = "ADMIN",
    DEFENDANT = "DEFENDANT",
    LAWFIRMADMIN = "LAWFIRM_ADMIN",
    LAWYER = "LAWYER",
    PARTNER = "PARTNER",
    UNKNOWN = "UNKNOWN"
}
