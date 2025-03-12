/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { TrafficUsageApiMonthlyDataSchemaMonthsItem } from './trafficUsageApiMonthlyDataSchemaMonthsItem';

/**
 * Contains the recorded data usage for each API path, segmented by month and type of traffic
 */
export interface TrafficUsageApiMonthlyDataSchema {
    /** The path of the API that the recorded data usage is for */
    apiPath: string;
    /** An array containing each month in the selected range that has data usage recorded */
    months: TrafficUsageApiMonthlyDataSchemaMonthsItem[];
}
