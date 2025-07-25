import { render } from 'utils/testRenderer';
import { fireEvent, screen } from '@testing-library/react';
import { Insights } from './Insights.tsx';
import { testServerRoute, testServerSetup } from 'utils/testServer';
import { vi } from 'vitest';

const server = testServerSetup();

const setupApi = () => {
    testServerRoute(server, '/api/admin/insights', {
        users: { total: 0, active: 0, inactive: 0 },
        userTrends: [],
        projectFlagTrends: [],
        metricsSummaryTrends: [],
        flags: { total: 0 },
        flagTrends: [],
        environmentTypeTrends: [],
        lifecycleTrends: [],
        creationArchiveTrends: [],
    });

    testServerRoute(server, '/api/admin/projects', {
        projects: [
            { name: 'Project A Name', id: 'projectA' },
            { name: 'Project B Name', id: 'projectB' },
        ],
    });
};

const currentTime = '2024-04-25T08:05:00.000Z';

// todo(lifecycleMetrics): this test won't be relevant anymore because the
// filters are on each section instead of the top-level component. Consider
// rewriting this for the individual section components instead.
test('Filter insights by project and date', async () => {
    vi.setSystemTime(currentTime);
    setupApi();
    render(<Insights withCharts={false} />);
    const addFilter = await screen.findByText('Filter');
    fireEvent.click(addFilter);
    const projectFilter = await screen.findByText('Project');

    // filter by project
    fireEvent.click(projectFilter);
    await screen.findByText('Project A Name');
    const projectName = await screen.findByText('Project B Name');
    await fireEvent.click(projectName);
    expect(window.location.href).toContain('project=IS%3AprojectB');

    // last month moving window by default
    const fromDate = await screen.findByText('03/25/2024');
    await screen.findByText('04/25/2024');

    // change dates by preset range
    fireEvent.click(fromDate);
    const previousMonth = await screen.findByText('Previous month');
    fireEvent.click(previousMonth);
    await screen.findByText('03/01/2024');
    await screen.findByText('03/31/2024');
    expect(window.location.href).toContain(
        '?project=IS%3AprojectB&from=IS%3A2024-03-01&to=IS%3A2024-03-31',
    );
});
