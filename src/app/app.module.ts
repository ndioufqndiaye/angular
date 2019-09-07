import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { PartenairelistComponent } from './partenairelist/partenairelist.component';
import { PartenaireService } from './partenaire.service';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { ListuserComponent } from './listuser/listuser.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { DepotComponent } from './depot/depot.component';
import { RetaitComponent } from './retait/retait.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContratComponent } from './contrat/contrat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompteComponent,
    AjoutuserComponent,
    PartenairelistComponent,
    AjoutpartenaireComponent,
    ListuserComponent,
    EnvoiComponent,
    DepotComponent,
    RetaitComponent,
    NavigationComponent,
    ContratComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
 
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter(){
          return localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/login']
      }

    })
],
providers: [AuthService,PartenaireService, 

 {
    provide: HTTP_INTERCEPTORS,
    useClass: StorageService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
