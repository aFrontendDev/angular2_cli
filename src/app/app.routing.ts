import { Routes, RouterModule } from '@angular/router';
// import { HomeRoutes } from './home/index';
// import { TodolistRoutes } from './todolist/index';
import { AboutRoutes } from './about/index';
import { TestRoutes } from './test/index';
import { HomeComponent } from './home/home.component';
// import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    ...AboutRoutes,
    ...TestRoutes
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
