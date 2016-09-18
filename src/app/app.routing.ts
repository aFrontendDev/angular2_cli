import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { AboutRoutes } from './about/index';
import { TestRoutes } from './test/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...AboutRoutes,
    ...TestRoutes
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
