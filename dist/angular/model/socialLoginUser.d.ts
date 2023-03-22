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
import { SocialPhoneNumber } from './socialPhoneNumber';
import { UserRoleDomain } from './userRoleDomain';
export interface SocialLoginUser {
    emailAddress?: string;
    firstname?: string;
    isEmailPrivate?: boolean;
    isTestUser?: boolean;
    lastname?: string;
    paidCaseCount?: number;
    phoneNumbers?: Set<SocialPhoneNumber>;
    profilePictureUrl?: string;
    roles?: Set<UserRoleDomain>;
    userId?: number;
}