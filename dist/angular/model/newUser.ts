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
import { PhoneNumberDomain } from './phoneNumberDomain';


export interface NewUser { 
    emailAddress?: string;
    firstname?: string;
    isEmailConfirmed?: boolean;
    lastname?: string;
    loginProvider?: NewUser.LoginProviderEnum;
    password?: string;
    phoneNumbers?: Set<PhoneNumberDomain>;
}
export namespace NewUser {
    export type LoginProviderEnum = 'APPLE' | 'EMAIL' | 'FACEBOOK' | 'GOOGLE' | 'PHONE' | 'TWITTER' | 'UNKNOWN';
    export const LoginProviderEnum = {
        Apple: 'APPLE' as LoginProviderEnum,
        Email: 'EMAIL' as LoginProviderEnum,
        Facebook: 'FACEBOOK' as LoginProviderEnum,
        Google: 'GOOGLE' as LoginProviderEnum,
        Phone: 'PHONE' as LoginProviderEnum,
        Twitter: 'TWITTER' as LoginProviderEnum,
        Unknown: 'UNKNOWN' as LoginProviderEnum
    };
}

