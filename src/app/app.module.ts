import { ApiPhotoServiceService } from './api-photo-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhotoAuthGuardService }   from './photoAuthGuard.service';
import { PhotoInterceptor } from '../app/photoInterceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthServiseService } from '../app/auth-servise.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRouter: Routes = ([
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'photos', component: PhotosComponent, canActivate: [PhotoAuthGuardService]},
  {path: '**', component: NotFoundComponent}
])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PhotosComponent,
    NotFoundComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule 
  ],
  providers: [
    PhotoAuthGuardService,
    ApiPhotoServiceService,
    AuthServiseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PhotoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
