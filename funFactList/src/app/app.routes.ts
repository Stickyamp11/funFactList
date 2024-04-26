import { Routes } from '@angular/router';
import { FactListComponentComponent } from './fact-list-component/fact-list-component.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './functional-auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        canActivate: [authGuard],
        component: FactListComponentComponent
    },
    {
        path: '',
        component: RegisterComponent
    },
    {
        path: '**',
        component: RegisterComponent
    }
];
