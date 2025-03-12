/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProjectEnvironmentSchema } from './projectEnvironmentSchema';
import type { CreateFeatureNamingPatternSchema } from './createFeatureNamingPatternSchema';
import type { FeatureSchema } from './featureSchema';
import type { DeprecatedProjectOverviewSchemaMode } from './deprecatedProjectOverviewSchemaMode';
import type { ProjectStatsSchema } from './projectStatsSchema';

/**
 * A high-level overview of a project. It contains information such as project statistics, the name of the project, what members and what features it contains, etc.
 */
export interface DeprecatedProjectOverviewSchema {
    /**
     * When the project was created.
     * @nullable
     */
    createdAt?: string | null;
    /** A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy */
    defaultStickiness?: string;
    /**
     * Additional information about the project
     * @nullable
     */
    description?: string | null;
    /** The environments that are enabled for this project */
    environments?: ProjectEnvironmentSchema[];
    /** `true` if the project was favorited, otherwise `false`. */
    favorite?: boolean;
    /**
     * A limit on the number of features allowed in the project. Null if no limit.
     * @nullable
     */
    featureLimit?: number | null;
    featureNaming?: CreateFeatureNamingPatternSchema;
    /** The full list of features in this project (excluding archived features) */
    features?: FeatureSchema[];
    /** An indicator of the [project's health](https://docs.getunleash.io/reference/technical-debt#project-status) on a scale from 0 to 100 */
    health?: number;
    /** The number of members this project has */
    members?: number;
    /** The project's [collaboration mode](https://docs.getunleash.io/reference/project-collaboration-mode). Determines whether non-project members can submit change requests or not. */
    mode?: DeprecatedProjectOverviewSchemaMode;
    /** The name of this project */
    name: string;
    /** Project statistics */
    stats?: ProjectStatsSchema;
    /**
     * When the project was last updated.
     * @nullable
     */
    updatedAt?: string | null;
    /** The schema version used to describe the project overview */
    version: number;
}
