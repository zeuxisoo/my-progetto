import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'p/:id',
        component: ProjectComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
