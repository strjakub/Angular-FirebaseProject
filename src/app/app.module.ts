import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/restauracja-header/header.component';
import { RestauracjaAddBtnComponent } from './components/restauracja-add-btn/restauracja-add-btn.component';
import { RestauracjaDishesComponent } from './components/restauracja-dishes/restauracja-dishes.component';
import { RestauracjaDishItemComponent } from './components/restauracja-dish-item/restauracja-dish-item.component';
import { RestauracjaContainerComponent } from './components/restauracja-container/restauracja-container.component';
import { RestauracjaFormComponent } from './components/restauracja-form/restauracja-form.component';
import { RestauracjaCartComponent } from './components/restauracja-cart/restauracja-cart.component';
import { RestauracjaInfoComponent } from './components/restauracja-info/restauracja-info.component';
import { RestauracjaDetailViewComponent } from './components/restauracja-detail-view/restauracja-detail-view.component';
import { LoginpanelComponent } from './components/loginpanel/loginpanel.component';
import { RestauracjaAdminviewComponent } from './components/restauracja-adminview/restauracja-adminview.component';
import { RestauracjaDishItemSpecialComponent } from './components/restauracja-dish-item-special/restauracja-dish-item-special.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestauracjaAddBtnComponent,
    RestauracjaDishesComponent,
    RestauracjaDishItemComponent,
    RestauracjaContainerComponent,
    RestauracjaFormComponent,
    RestauracjaCartComponent,
    RestauracjaInfoComponent,
    RestauracjaDetailViewComponent,
    LoginpanelComponent,
    RestauracjaAdminviewComponent,
    RestauracjaDishItemSpecialComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
