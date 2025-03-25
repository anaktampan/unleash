import type { FC } from 'react';
import type { FeatureStrategySchema } from 'openapi';
import type { IFeatureStrategyPayload } from 'interfaces/strategy';
import { useUiFlag } from 'hooks/useUiFlag';
import { StrategyExecution as LegacyStrategyExecution } from './LegacyStrategyExecution';
import { ConstraintAccordionView } from 'component/common/NewConstraintAccordion/ConstraintAccordionView/ConstraintAccordionView';
import { useStrategies } from 'hooks/api/getters/useStrategies/useStrategies';
import { objectId } from 'utils/objectId';
import { useCustomStrategyParameters } from './hooks/useCustomStrategyParameters';
import { useStrategyParameters } from './hooks/useStrategyParameters';
import { useSegments } from 'hooks/api/getters/useSegments/useSegments';
import { SegmentItem } from 'component/common/SegmentItem/SegmentItem';
import {
    ConstraintListItem,
    ConstraintsList,
} from 'component/common/ConstraintsList/ConstraintsList';

type StrategyExecutionProps = {
    strategy: IFeatureStrategyPayload | FeatureStrategySchema;
    displayGroupId?: boolean;
};

export const StrategyExecution: FC<StrategyExecutionProps> = ({
    strategy,
    displayGroupId = false,
}) => {
    const { strategies } = useStrategies();
    const { segments } = useSegments();
    const { isCustomStrategy, customStrategyParameters: customStrategyItems } =
        useCustomStrategyParameters(strategy, strategies);
    const strategyParameters = useStrategyParameters(
        strategy as FeatureStrategySchema,
        displayGroupId,
    );
    const { constraints } = strategy;
    const strategySegments = segments?.filter((segment) =>
        strategy.segments?.includes(segment.id),
    );
    const flagOverviewRedesign = useUiFlag('flagOverviewRedesign');

    if (!flagOverviewRedesign) {
        return (
            <LegacyStrategyExecution
                strategy={strategy}
                displayGroupId={displayGroupId}
            />
        );
    }

    return (
        <ConstraintsList>
            {strategySegments?.map((segment) => (
                <SegmentItem segment={segment} key={segment.id} />
            ))}
            {constraints?.map((constraint, index) => (
                <ConstraintAccordionView
                    key={`${objectId(constraint)}-${index}`}
                    constraint={constraint}
                />
            ))}
            {(isCustomStrategy ? customStrategyItems : strategyParameters).map(
                (item, index) => (
                    <ConstraintListItem key={index}>{item}</ConstraintListItem>
                ),
            )}
        </ConstraintsList>
    );
};
