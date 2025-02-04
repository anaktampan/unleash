import { endOfMonth, format, startOfMonth, subMonths } from 'date-fns';

export type ChartDataSelection =
    | {
          grouping: 'daily';
          month: string;
      }
    | {
          grouping: 'monthly';
          monthsBack: number;
      };

// todo: write test
export const toDateRange = (
    selection: ChartDataSelection,
): { from: string; to: string } => {
    const fmt = (date: Date) => format(date, 'yyyy-MM-dd');
    if (selection.grouping === 'daily') {
        const month = new Date(selection.month);
        const from = fmt(month);
        const to = fmt(endOfMonth(month));
        return { from, to };
    } else {
        const now = new Date();
        const from = fmt(startOfMonth(subMonths(now, selection.monthsBack)));
        const to = fmt(endOfMonth(now));
        return { from, to };
    }
};
