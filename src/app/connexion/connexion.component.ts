import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  auth;

  constructor(public conex:ConnexionService, public route:Router) {
    this.auth={
    id:'',
    mdp:'' }
}
  ngOnInit() {

    }
  SubmitAuth(){
    console.log(this.auth);
    this.conex.toto = true;
    this.route.navigate(['etudiants']);
  }

}
