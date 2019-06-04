import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EtudiantsService } from './services/etudiants.service';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { SecuriseGuard } from './securise.guard';
import { ConnexionService } from './connexion.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    ConnexionComponent,
    EditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EtudiantsService, SecuriseGuard, ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
