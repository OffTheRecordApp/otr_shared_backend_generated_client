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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CaseMessageDomain
 */
export interface CaseMessageDomain {
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    authorFirstname?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    authorLastname?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    authorProfilePicUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    authorRoleType?: CaseMessageDomainAuthorRoleTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CaseMessageDomain
     */
    authorUserId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CaseMessageDomain
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    mediaType?: CaseMessageDomainMediaTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    mediaUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseMessageDomain
     */
    messageBody?: string;
    /**
     * 
     * @type {number}
     * @memberof CaseMessageDomain
     */
    messageId?: number;
    /**
     * 
     * @type {Date}
     * @memberof CaseMessageDomain
     */
    messageSentDateUtc?: Date;
}

export function CaseMessageDomainFromJSON(json: any): CaseMessageDomain {
    return CaseMessageDomainFromJSONTyped(json, false);
}

export function CaseMessageDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseMessageDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorFirstname': !exists(json, 'authorFirstname') ? undefined : json['authorFirstname'],
        'authorLastname': !exists(json, 'authorLastname') ? undefined : json['authorLastname'],
        'authorProfilePicUrl': !exists(json, 'authorProfilePicUrl') ? undefined : json['authorProfilePicUrl'],
        'authorRoleType': !exists(json, 'authorRoleType') ? undefined : json['authorRoleType'],
        'authorUserId': !exists(json, 'authorUserId') ? undefined : json['authorUserId'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'mediaType': !exists(json, 'mediaType') ? undefined : json['mediaType'],
        'mediaUrl': !exists(json, 'mediaUrl') ? undefined : json['mediaUrl'],
        'messageBody': !exists(json, 'messageBody') ? undefined : json['messageBody'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'messageSentDateUtc': !exists(json, 'messageSentDateUtc') ? undefined : (new Date(json['messageSentDateUtc'])),
    };
}

export function CaseMessageDomainToJSON(value?: CaseMessageDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorFirstname': value.authorFirstname,
        'authorLastname': value.authorLastname,
        'authorProfilePicUrl': value.authorProfilePicUrl,
        'authorRoleType': value.authorRoleType,
        'authorUserId': value.authorUserId,
        'isDeleted': value.isDeleted,
        'mediaType': value.mediaType,
        'mediaUrl': value.mediaUrl,
        'messageBody': value.messageBody,
        'messageId': value.messageId,
        'messageSentDateUtc': value.messageSentDateUtc === undefined ? undefined : (value.messageSentDateUtc.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum CaseMessageDomainAuthorRoleTypeEnum {
    ADMIN = 'ADMIN',
    DEFENDANT = 'DEFENDANT',
    LAWFIRMADMIN = 'LAWFIRM_ADMIN',
    LAWYER = 'LAWYER',
    PARTNER = 'PARTNER',
    UNKNOWN = 'UNKNOWN'
}
/**
* @export
* @enum {string}
*/
export enum CaseMessageDomainMediaTypeEnum {
    IMAGE = 'IMAGE',
    PDF = 'PDF'
}


