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

export interface RegisterGhostUserRequest {
    "ghostUser"?: models.GhostUser;
    "roleType"?: RegisterGhostUserRequest.RoleTypeEnum;
}

export namespace RegisterGhostUserRequest {
    export enum RoleTypeEnum {
        ADMIN = <any> 'ADMIN',
        DEFENDANT = <any> 'DEFENDANT',
        LAWFIRMADMIN = <any> 'LAWFIRM_ADMIN',
        LAWYER = <any> 'LAWYER',
        PARTNER = <any> 'PARTNER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
