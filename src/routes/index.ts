import { basePath } from '@/config';
import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/display/pages/Welcome')),
    path: `${basePath}`,
    title: 'Welcome',
  },
  [Pages.Chat]: {
    component: asyncComponentLoader(() => import('@/display/pages/Chat')),
    path: `${basePath}chat`,
    title: 'Chat',
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/display/pages/NotFound')),
    path: '*',
  },
};

export default routes;
