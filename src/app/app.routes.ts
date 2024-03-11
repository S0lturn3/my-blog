import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/views/home-page/home-page.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';
import { NotAuthorizedComponent } from './core/auth/components/not-authorized/not-authorized.component';
import { AuthenticationGuard } from './core/auth/guards/authentication.guard';
import { RoleGuard } from './core/auth/guards/role.guard';

export const routes: Routes = [
   { path: "", redirectTo: "login", pathMatch: "full" },

   { path: "login", component: LoginComponent },
   { path: "home", component: HomePageComponent, /* canActivate: [ AuthenticationGuard ] */ },

   { path: "perfil", component: AppComponent, /* canActivate: [ AuthenticationGuard, RoleGuard ] */ },
   // Rotas a nível de projeto acima deste comentário

   { path: "unauthorized-access", component: NotAuthorizedComponent },
   { path: "**", component: NotFoundComponent }
];
