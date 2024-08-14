import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'tab', 
    loadChildren: () => import('./tab/tab.routes').then( t => t.routes ),
    canActivate: [authGuard]},    
  { path: 'home', 
    loadChildren: () => import('./home/home.routes').then( m => m.routes ),
    canActivate: [authGuard]},
  { path: 'relogios',
    loadChildren: () => import('./relogio/relogio.routes').then( m => m.routes ),
    canActivate: [authGuard]}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
