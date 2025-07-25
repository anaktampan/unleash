/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { InstanceInsightsSchemaCreationArchiveTrendsItem } from './instanceInsightsSchemaCreationArchiveTrendsItem.js';
import type { InstanceInsightsSchemaEnvironmentTypeTrendsItem } from './instanceInsightsSchemaEnvironmentTypeTrendsItem.js';
import type { InstanceInsightsSchemaFlagTrendsItem } from './instanceInsightsSchemaFlagTrendsItem.js';
import type { InstanceInsightsSchemaLifecycleTrendsItem } from './instanceInsightsSchemaLifecycleTrendsItem.js';
import type { InstanceInsightsSchemaMetricsSummaryTrendsItem } from './instanceInsightsSchemaMetricsSummaryTrendsItem.js';
import type { InstanceInsightsSchemaProjectFlagTrendsItem } from './instanceInsightsSchemaProjectFlagTrendsItem.js';
import type { InstanceInsightsSchemaUserTrendsItem } from './instanceInsightsSchemaUserTrendsItem.js';

/**
 * A summary of this Unleash instance's usage statistics, including user and flag counts, and trends over time.
 */
export interface InstanceInsightsSchema {
    /** Weekly count of created vs archived flags by project and flag type */
    creationArchiveTrends: InstanceInsightsSchemaCreationArchiveTrendsItem[];
    /** How updates per environment type changed over time */
    environmentTypeTrends: InstanceInsightsSchemaEnvironmentTypeTrendsItem[];
    /** How number of flags changed over time */
    flagTrends: InstanceInsightsSchemaFlagTrendsItem[];
    /** Weekly count of new flags entering production */
    lifecycleTrends: InstanceInsightsSchemaLifecycleTrendsItem[];
    /** How metrics data per project changed over time */
    metricsSummaryTrends: InstanceInsightsSchemaMetricsSummaryTrendsItem[];
    /** How number of flags per project changed over time */
    projectFlagTrends: InstanceInsightsSchemaProjectFlagTrendsItem[];
    /** How number of users changed over time */
    userTrends: InstanceInsightsSchemaUserTrendsItem[];
}
