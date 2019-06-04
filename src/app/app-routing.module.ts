import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';
import { SecuriseGuard } from './securise.guard';



const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'etudiants', component:EtudiantsComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'etudiants/edition/:index', component:EditionComponent, canActivate:[SecuriseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
