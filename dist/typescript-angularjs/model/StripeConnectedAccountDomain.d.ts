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
export interface StripeConnectedAccountDomain {
    "accountId"?: string;
    "accountType"?: StripeConnectedAccountDomain.AccountTypeEnum;
    "businessName"?: string;
    "chargesEnabled"?: boolean;
    "connectedDateUtc"?: models.TimestampRes;
    "creationDateUtc"?: models.TimestampRes;
    "detailsSubmitted"?: boolean;
    "email"?: string;
    "isDeprecated"?: boolean;
    "payoutsEnabled"?: boolean;
    "stripePlatformAccountId"?: string;
    "stripePlatformName"?: string;
}
export declare namespace StripeConnectedAccountDomain {
    enum AccountTypeEnum {
        EXPRESS,
        STANDARD
    }
}
