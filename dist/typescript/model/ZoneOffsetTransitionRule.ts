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

export interface ZoneOffsetTransitionRule {
    "dayOfMonthIndicator"?: number;
    "dayOfWeek"?: ZoneOffsetTransitionRule.DayOfWeekEnum;
    "localTime"?: models.LocalTime;
    "midnightEndOfDay"?: boolean;
    "month"?: ZoneOffsetTransitionRule.MonthEnum;
    "offsetAfter"?: models.ZoneOffset;
    "offsetBefore"?: models.ZoneOffset;
    "standardOffset"?: models.ZoneOffset;
    "timeDefinition"?: ZoneOffsetTransitionRule.TimeDefinitionEnum;
}

export namespace ZoneOffsetTransitionRule {
    export enum DayOfWeekEnum {
        FRIDAY = <any> 'FRIDAY',
        MONDAY = <any> 'MONDAY',
        SATURDAY = <any> 'SATURDAY',
        SUNDAY = <any> 'SUNDAY',
        THURSDAY = <any> 'THURSDAY',
        TUESDAY = <any> 'TUESDAY',
        WEDNESDAY = <any> 'WEDNESDAY'
    }
    export enum MonthEnum {
        APRIL = <any> 'APRIL',
        AUGUST = <any> 'AUGUST',
        DECEMBER = <any> 'DECEMBER',
        FEBRUARY = <any> 'FEBRUARY',
        JANUARY = <any> 'JANUARY',
        JULY = <any> 'JULY',
        JUNE = <any> 'JUNE',
        MARCH = <any> 'MARCH',
        MAY = <any> 'MAY',
        NOVEMBER = <any> 'NOVEMBER',
        OCTOBER = <any> 'OCTOBER',
        SEPTEMBER = <any> 'SEPTEMBER'
    }
    export enum TimeDefinitionEnum {
        STANDARD = <any> 'STANDARD',
        UTC = <any> 'UTC',
        WALL = <any> 'WALL'
    }
}
