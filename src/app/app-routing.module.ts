import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpanelComponent } from './components/loginpanel/loginpanel.component';
import { RestauracjaAdminviewComponent } from './components/restauracja-adminview/restauracja-adminview.component';
import { RestauracjaCartComponent } from './components/restauracja-cart/restauracja-cart.component';
import { RestauracjaDetailViewComponent } from './components/restauracja-detail-view/restauracja-detail-view.component';
import { RestauracjaDishesComponent } from './components/restauracja-dishes/restauracja-dishes.component';
import { RestauracjaFormComponent } from './components/restauracja-form/restauracja-form.component';
import { RestauracjaInfoComponent } from './components/restauracja-info/restauracja-info.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'form', component: RestauracjaFormComponent, data:{roles:['admin','manager']}, canActivate:[AuthGuard]},
  {path: 'login', component: LoginpanelComponent},
  {path: 'main', component: RestauracjaInfoComponent},
  {path: 'cart', component: RestauracjaCartComponent, data:{roles:['admin','manager','klient']}, canActivate:[AuthGuard]},
  {path: 'admview', component: RestauracjaAdminviewComponent, data:{roles:['admin']}, canActivate:[AuthGuard]},
  {path: 'dishes', component: RestauracjaDishesComponent},
  {path: 'dishes/:id', component: RestauracjaDetailViewComponent, data:{roles:['admin','manager','klient']}, canActivate:[AuthGuard]},
  /** --- */
  
  {path: '', component: RestauracjaInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
