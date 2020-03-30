
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {BarberServiceComponent} from './barber-service/barber-service.component';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'barber-service', component: BarberServiceComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, UsersComponent, BarberServiceComponent]
