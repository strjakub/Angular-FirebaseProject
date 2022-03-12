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
import { Lab4Zad7Component } from './components/old Components/lab4-zad7/lab4-zad7.component';
import { Lab4Zad6ParentComponent } from './components/old Components/lab4-zad6-parent/lab4-zad6-parent.component';
import { Lab4Zad6ChildComponent } from './components/old Components/lab4-zad6-child/lab4-zad6-child.component';
import { Lab4Zad5AComponent } from './components/old Components/lab4-zad5-a/lab4-zad5-a.component';
import { HeaderComponent } from './components/restauracja-header/header.component';
import { RestauracjaAddBtnComponent } from './components/restauracja-add-btn/restauracja-add-btn.component';
import { RestauracjaDishesComponent } from './components/restauracja-dishes/restauracja-dishes.component';
import { RestauracjaDishItemComponent } from './components/restauracja-dish-item/restauracja-dish-item.component';
import { RestauracjaContainerComponent } from './components/restauracja-container/restauracja-container.component';
import { RestauracjaFormComponent } from './components/restauracja-form/restauracja-form.component';
import { RestauracjaCartComponent } from './components/restauracja-cart/restauracja-cart.component';
import { Lab5Zad1PostsComponent } from './components/old Components/lab5-zad1-posts/lab5-zad1-posts.component';
import { Lab5Zad1PhotosComponent } from './components/old Components/lab5-zad1-photos/lab5-zad1-photos.component';
import { Lab5Zad1HomeComponent } from './components/old Components/lab5-zad1-home/lab5-zad1-home.component';
import { Lab5Zad1HeaderComponent } from './components/old Components/lab5-zad1-header/lab5-zad1-header.component';
import { Lab5Zad1OnephotoComponent } from './components/old Components/lab5-zad1-onephoto/lab5-zad1-onephoto.component';
import { RestauracjaInfoComponent } from './components/restauracja-info/restauracja-info.component';
import { RestauracjaDetailViewComponent } from './components/restauracja-detail-view/restauracja-detail-view.component';
import { LoginpanelComponent } from './components/loginpanel/loginpanel.component';
import { RestauracjaAdminviewComponent } from './components/restauracja-adminview/restauracja-adminview.component';
import { RestauracjaDishItemSpecialComponent } from './components/restauracja-dish-item-special/restauracja-dish-item-special.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab4Zad7Component,
    Lab4Zad6ParentComponent,
    Lab4Zad6ChildComponent,
    Lab4Zad5AComponent,
    HeaderComponent,
    RestauracjaAddBtnComponent,
    RestauracjaDishesComponent,
    RestauracjaDishItemComponent,
    RestauracjaContainerComponent,
    RestauracjaFormComponent,
    RestauracjaCartComponent,
    Lab5Zad1PostsComponent,
    Lab5Zad1PhotosComponent,
    Lab5Zad1HomeComponent,
    Lab5Zad1HeaderComponent,
    Lab5Zad1OnephotoComponent,
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
