import { useMemo } from 'react';
import { Truncator } from 'component/common/Truncator/Truncator';
import {
    parseParameterNumber,
    parseParameterString,
    parseParameterStrings,
} from 'utils/parseParameter';
import { StrategyEvaluationItem } from 'component/common/ConstraintsList/StrategyEvaluationItem/StrategyEvaluationItem';
import { StrategyEvaluationChip } from 'component/common/ConstraintsList/StrategyEvaluationChip/StrategyEvaluationChip';
import type {
    CreateFeatureStrategySchema,
    StrategySchema,
    StrategySchemaParametersItem,
} from 'openapi';
import type { IFeatureStrategyPayload } from 'interfaces/strategy';

export const useCustomStrategyParameters = (
    strategy: CreateFeatureStrategySchema | IFeatureStrategyPayload,
    strategies: StrategySchema[],
) => {
    const { parameters } = strategy;
    const definition = useMemo(
        () =>
            strategies.find((strategyDefinition) => {
                return strategyDefinition.name === strategy.name;
            }),
        [strategies, strategy.name],
    );
    const isCustomStrategy = definition?.editable;

    const mapCustomStrategies = (
        param: StrategySchemaParametersItem,
        index: number,
    ) => {
        if (!parameters || !param.name) return null;
        const { type, name } = param;
        const typeItem = <Truncator title={name}>{name}</Truncator>;
        const key = `${type}${index}`;

        switch (type) {
            case 'list': {
                const values = parseParameterStrings(parameters[name]);
                if (!values || values.length === 0) {
                    return null;
                }

                return (
                    <StrategyEvaluationItem
                        key={key}
                        type={typeItem}
                        values={values}
                    >
                        {values.length === 1
                            ? 'has 1 item:'
                            : `has ${values.length} items:`}
                    </StrategyEvaluationItem>
                );
            }

            case 'percentage': {
                const value = parseParameterNumber(parameters[name]);
                return (
                    <StrategyEvaluationItem key={key} type={typeItem}>
                        is set to <StrategyEvaluationChip label={`${value}%`} />
                    </StrategyEvaluationItem>
                );
            }

            case 'boolean': {
                const value = parameters[name];
                return (
                    <StrategyEvaluationItem key={key} type={typeItem}>
                        is set to <StrategyEvaluationChip label={value} />
                    </StrategyEvaluationItem>
                );
            }

            case 'string': {
                const value = parseParameterString(parameters[name]);

                return (
                    <StrategyEvaluationItem
                        key={key}
                        type={typeItem}
                        values={value === '' ? undefined : [value]}
                    >
                        {value === '' ? 'is an empty string' : 'is set to'}
                    </StrategyEvaluationItem>
                );
            }

            case 'number': {
                const value = parseParameterNumber(parameters[name]);
                return (
                    <StrategyEvaluationItem
                        key={key}
                        type={typeItem}
                        values={[`${value}`]}
                    >
                        is a number set to
                    </StrategyEvaluationItem>
                );
            }

            case 'default':
                return null;
        }

        return null;
    };

    return useMemo(
        () => ({
            isCustomStrategy,
            customStrategyParameters: isCustomStrategy
                ? definition?.parameters
                      ?.map(mapCustomStrategies)
                      .filter(Boolean)
                : [],
        }),
        [definition, isCustomStrategy, parameters],
    );
};
