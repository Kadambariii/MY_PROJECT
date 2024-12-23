import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthenticationGuard } from './service/authentication.guard';



const routes: Routes = [
  { path: '', component:LandingComponent },
  { path: 'login', component:LoginpageComponent  },
  { path: 'register', component:RegisterComponent },
  { path: 'landing', component: LandingComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
