import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { PartenairelistComponent } from './partenairelist/partenairelist.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import {  ListuserComponent } from './listuser/listuser.component';
import {  DepotComponent } from './depot/depot.component';
import {  EnvoiComponent } from './envoi/envoi.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'compte',
    component: CompteComponent
    },
    {
      path: 'user',
      component: AjoutuserComponent
      },
      {
        path: 'lister',
        component: PartenairelistComponent
        },
      {
        path: 'partenaire',
        component:  AjoutpartenaireComponent

      },
    {
      path: 'userlist',
      component:  ListuserComponent
    
    },
    {
      path: 'depot',
      component:  DepotComponent
    
    },
    {
      path: 'envoi',
      component:  EnvoiComponent
    
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
