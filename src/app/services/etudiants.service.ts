import { Injectable } from '@angular/core';
import { Etudiant } from '../modele/etudiant';


@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  listeEtudiants:Array<Etudiant>
  constructor() {

    this.listeEtudiants = [
      {
        id:0,
        nom:'Imarazene',
        prenom:'Elodie',
        age:'24',
        sexe:'Femme',
        qualite:['beaucoup', 'des super', 'et plein de trucs', 'maman']
      },{
        id:1,
        nom:'Aberkane',
        prenom:'Yanis',
        age:'19',
        sexe:'Homme',
        qualite:['ninja', 'cheveux magnifique', 'et plein de trucs', 'aime les bonbons']
      }
    ]
  }
}
