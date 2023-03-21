import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleResolver } from './core/resolver/title.resolver';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent,
    data: { title: "title.manago_employer" },
    resolve: {
      title: TitleResolver
    },
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule),
    data: { title: "title.manago_employer" },
    resolve: {
      title: TitleResolver
    },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
