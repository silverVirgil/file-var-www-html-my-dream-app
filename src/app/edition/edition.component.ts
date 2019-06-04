import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../modele/etudiant';
import { EtudiantsService } from '../services/etudiants.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})

export class EditionComponent implements OnInit {

  index:number=0;
  public etudiant:Etudiant;
  public qualites: string;

  constructor(public etuService:EtudiantsService, private path:ActivatedRoute, private route:Router) {
  }

  ngOnInit() {
    console.log(this.etuService.listeEtudiants);
    this.path.paramMap.subscribe(param => {
    this.index= Number(param.get("index"));
    this.etudiant = this.etuService.listeEtudiants[this.index];
    this.qualites = this.etudiant.qualite.join(' ; ');
    })
  }

  submitChange(form){
    this.etudiant.qualite = this.qualites.split(' ; ');
    this.etuService.listeEtudiants[this.index] = this.etudiant;
    this.route.navigate(['etudiants']);
}


}
