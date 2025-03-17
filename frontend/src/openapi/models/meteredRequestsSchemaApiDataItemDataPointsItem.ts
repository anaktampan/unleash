/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type MeteredRequestsSchemaApiDataItemDataPointsItem = {
    /**
     * The date of the data point. Formatted as a full date (e.g. 2023-04-01) if the data is aggregated by day or as a month (e.g. 2023-04) if the data is aggregated by month.
     * @pattern ^\d{4}-\d{2}(-\d{2})?$
     */
    period: string;
    /**
     * Number of requests
     * @minimum 0
     */
    requests: number;
};
