/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Whether the data is aggregated by month or by day.
 */
export type MeteredConnectionsSchemaGrouping =
    (typeof MeteredConnectionsSchemaGrouping)[keyof typeof MeteredConnectionsSchemaGrouping];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MeteredConnectionsSchemaGrouping = {
    monthly: 'monthly',
    daily: 'daily',
} as const;
