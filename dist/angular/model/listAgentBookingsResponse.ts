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
import { AgentBookingStats } from './agentBookingStats';
import { AgentBookingsSummary } from './agentBookingsSummary';
import { CustomerServiceAgentBookingDomain } from './customerServiceAgentBookingDomain';


export interface ListAgentBookingsResponse { 
    agentBookings?: Array<CustomerServiceAgentBookingDomain>;
    agentStats?: Array<AgentBookingStats>;
    bookingsSummary?: AgentBookingsSummary;
}

