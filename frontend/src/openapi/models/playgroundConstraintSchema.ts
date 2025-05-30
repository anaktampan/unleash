/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PlaygroundConstraintSchemaOperator } from './playgroundConstraintSchemaOperator';

/**
 * A strategy constraint. For more information, refer to [the strategy constraint reference documentation](https://docs.getunleash.io/reference/activation-strategies#constraints)
 */
export interface PlaygroundConstraintSchema {
    /** Whether the operator should be case sensitive or not. Defaults to `false` (being case sensitive). */
    caseInsensitive?: boolean;
    /** The name of the context field that this constraint should apply to. */
    contextName: string;
    /** Whether the result should be negated or not. If `true`, will turn a `true` result into a `false` result and vice versa. */
    inverted?: boolean;
    /** The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/activation-strategies#constraint-operators). */
    operator: PlaygroundConstraintSchemaOperator;
    /** Whether this was evaluated as true or false. */
    result: boolean;
    /** The context value that should be used for constraint evaluation. Use this property instead of `values` for properties that only accept single values. */
    value?: string;
    /** The context values that should be used for constraint evaluation. Use this property instead of `value` for properties that accept multiple values. */
    values?: string[];
}
