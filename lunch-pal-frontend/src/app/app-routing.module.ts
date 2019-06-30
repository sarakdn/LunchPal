import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './user-input/user-input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ResetComponent } from './reset/reset.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
   },
  {
    path: 'login',
   component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  { path:'about',
  component:AboutComponent
  },
  {
    path: 'find-lunch-pal',
    component: UserInputComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
