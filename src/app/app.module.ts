import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,

    // tslint:disable-next-line:max-line-length

    PagenotfoundComponent,

    LoginComponent,

    NavComponent,
    ProductComponent,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  
}
