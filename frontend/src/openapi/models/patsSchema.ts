/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PatSchema } from './patSchema';

/**
 * Contains a collection of [personal access tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens), or PATs. PATs are automatically scoped to the authenticated user.
 */
export interface PatsSchema {
    /** A collection of PATs. */
    pats?: PatSchema[];
}
