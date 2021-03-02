import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/auth-guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "administracion",
    component: AdministracionComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
