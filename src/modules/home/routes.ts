import { DiagramIcon, TableIcon } from '@/asets/icons';

export type HomeRoute = {
  title: string;
  description: string;
  path: string;
  icon: () => JSX.Element;
};
export const homeRoutes: HomeRoute[] = [
  {
    title: 'Задача 1',
    description: 'Компонент таблицы',
    path: '/table',
    icon: TableIcon,
  },
  {
    title: 'Задача 2',
    description: 'Диаграмма',
    path: '/diagram',
    icon: DiagramIcon,
  },
];
