import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { DefaultSystemLayoutComponent } from './components/default-system-layout/default-system-layout.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "test",
        component: DefaultSystemLayoutComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    }
];