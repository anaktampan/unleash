/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ImpactMetricsSchemaSamplesItem } from './impactMetricsSchemaSamplesItem.js';
import type { ImpactMetricsSchemaType } from './impactMetricsSchemaType.js';

/**
 * Used for reporting impact metrics from SDKs
 */
export interface ImpactMetricsSchema {
    /** Human-readable description of what the metric measures */
    help: string;
    /** Name of the impact metric */
    name: string;
    /** Samples of the metric */
    samples: ImpactMetricsSchemaSamplesItem[];
    /** Type of the metric */
    type: ImpactMetricsSchemaType;
}
