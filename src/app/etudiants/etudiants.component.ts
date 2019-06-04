import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../modele/etudiant';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

/*etudiant:Etudiant = {
  id:0,
  nom:'Imarazene',
  prenom:'Elodie',
  age:'24',
  sexe:'Feminin',
  qualite:['beaucoup', 'des super', 'et plein de trucs', 'maman']
}

etudiants = [
  {
    nom:'Imarazene',
    prenom:'Elodie',
    age:'24',
    sexe:'Feminin',
    qualite:['beaucoup', 'des super', 'et plein de trucs', 'maman']
  },{
    nom:'Aberkane',
    prenom:'Yanis',
    age:'19',
    sexe:'Masculin',
    qualite:['ninja', 'cheveux magnifique', 'et plein de trucs', 'aime les bonbons']
  }

]
  constructor() { }

  ngOnInit() {
  }

}*/
constructor(public etuService:EtudiantsService) { }

ngOnInit() {
  console.log(this.etuService.listeEtudiants);
}

}
