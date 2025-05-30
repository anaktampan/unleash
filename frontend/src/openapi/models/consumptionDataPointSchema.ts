/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export interface ConsumptionDataPointSchema {
    /**
     * Time interval in milliseconds [start, end].
     * @minItems 2
     * @maxItems 2
     */
    interval: number[];
    /** Number of requests in this interval */
    requests: number;
}
