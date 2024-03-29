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
import { LocalTime } from './localTime';
import { ZoneOffset } from './zoneOffset';


export interface ZoneOffsetTransitionRule { 
    dayOfMonthIndicator?: number;
    dayOfWeek?: ZoneOffsetTransitionRule.DayOfWeekEnum;
    localTime?: LocalTime;
    midnightEndOfDay?: boolean;
    month?: ZoneOffsetTransitionRule.MonthEnum;
    offsetAfter?: ZoneOffset;
    offsetBefore?: ZoneOffset;
    standardOffset?: ZoneOffset;
    timeDefinition?: ZoneOffsetTransitionRule.TimeDefinitionEnum;
}
export namespace ZoneOffsetTransitionRule {
    export type DayOfWeekEnum = 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';
    export const DayOfWeekEnum = {
        Friday: 'FRIDAY' as DayOfWeekEnum,
        Monday: 'MONDAY' as DayOfWeekEnum,
        Saturday: 'SATURDAY' as DayOfWeekEnum,
        Sunday: 'SUNDAY' as DayOfWeekEnum,
        Thursday: 'THURSDAY' as DayOfWeekEnum,
        Tuesday: 'TUESDAY' as DayOfWeekEnum,
        Wednesday: 'WEDNESDAY' as DayOfWeekEnum
    };
    export type MonthEnum = 'APRIL' | 'AUGUST' | 'DECEMBER' | 'FEBRUARY' | 'JANUARY' | 'JULY' | 'JUNE' | 'MARCH' | 'MAY' | 'NOVEMBER' | 'OCTOBER' | 'SEPTEMBER';
    export const MonthEnum = {
        April: 'APRIL' as MonthEnum,
        August: 'AUGUST' as MonthEnum,
        December: 'DECEMBER' as MonthEnum,
        February: 'FEBRUARY' as MonthEnum,
        January: 'JANUARY' as MonthEnum,
        July: 'JULY' as MonthEnum,
        June: 'JUNE' as MonthEnum,
        March: 'MARCH' as MonthEnum,
        May: 'MAY' as MonthEnum,
        November: 'NOVEMBER' as MonthEnum,
        October: 'OCTOBER' as MonthEnum,
        September: 'SEPTEMBER' as MonthEnum
    };
    export type TimeDefinitionEnum = 'STANDARD' | 'UTC' | 'WALL';
    export const TimeDefinitionEnum = {
        Standard: 'STANDARD' as TimeDefinitionEnum,
        Utc: 'UTC' as TimeDefinitionEnum,
        Wall: 'WALL' as TimeDefinitionEnum
    };
}


