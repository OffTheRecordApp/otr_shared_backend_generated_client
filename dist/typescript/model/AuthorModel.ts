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

export interface AuthorModel {
    "firstName"?: string;
    "lastName"?: string;
    "profilePicture"?: string;
    "userId"?: number;
    "userRole"?: AuthorModel.UserRoleEnum;
}

export namespace AuthorModel {
    export enum UserRoleEnum {
        ADMIN = <any> 'ADMIN',
        DEFENDANT = <any> 'DEFENDANT',
        LAWFIRMADMIN = <any> 'LAWFIRM_ADMIN',
        LAWYER = <any> 'LAWYER',
        PARTNER = <any> 'PARTNER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
