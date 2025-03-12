/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateFeatureSchemaOneOfTwofourAction } from './changeRequestCreateFeatureSchemaOneOfTwofourAction';
import type { ChangeRequestCreateFeatureSchemaOneOfTwofourPayload } from './changeRequestCreateFeatureSchemaOneOfTwofourPayload';

/**
 * Start milestone of feature environment release plan.
 */
export type ChangeRequestCreateFeatureSchemaOneOfTwofour = {
    /** The name of this action. */
    action: ChangeRequestCreateFeatureSchemaOneOfTwofourAction;
    /** The name of the feature that this change applies to. */
    feature: string;
    /** The ID of the release plan and which of its milestones to start. */
    payload: ChangeRequestCreateFeatureSchemaOneOfTwofourPayload;
};
