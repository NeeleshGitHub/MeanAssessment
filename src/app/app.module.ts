import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticateService } from './authenticate.service';
import { ExitService } from './exit.service';
import { UserviewComponent } from './userview/userview.component';
import { MoviesComponent } from './movies/movies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { AdminComponent } from './admin/admin.component';
import { SearchPipe } from './search.pipe';
import { SearchtPipe } from './searcht.pipe';

const routes: Routes = [

  { path: 'Home', component:   HomeComponent},
  { path: 'Login', component:  LoginComponent },
  { path: 'Signup', component: SignupComponent},
  { path: 'userview', component : UserviewComponent},
  {path: 'tvseries', component: TvseriesComponent},
  {path: 'movies', component: MoviesComponent },
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserviewComponent,
    MoviesComponent,
    TvseriesComponent,
    AdminComponent,
    SearchPipe,
    SearchtPipe
  ],
 
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ExitService , AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private service: ExitService){}
  test() {
    this.service.exit = true;
  }
 }
