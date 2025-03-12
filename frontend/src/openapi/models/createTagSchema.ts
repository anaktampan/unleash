/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Data used to create a new [tag](https://docs.getunleash.io/reference/feature-toggles#tags)
 */
export interface CreateTagSchema {
    /**
     * The [type](https://docs.getunleash.io/reference/feature-toggles#tags) of the tag
     * @minLength 2
     * @maxLength 50
     */
    type: string;
    /**
     * The value of the tag. The value must be between 2 and 50 characters long. Leading and trailing whitespace is ignored and will be trimmed before saving the tag value.
     * @pattern ^\s*\S.{0,48}\S\s*$
     */
    value: string;
}
