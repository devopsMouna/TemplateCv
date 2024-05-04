import { Component, OnInit } from '@angular/core';
import { ProduitsService } from './produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
produits!:any
  constructor(private produitsService:ProduitsService) { }

  ngOnInit(): void {
    this.produits=this.produitsService.getallproduits();

   

  }

}
