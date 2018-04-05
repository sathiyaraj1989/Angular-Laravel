import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/index';

export const router: Routes = [
    { path: '', component: LoginComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});