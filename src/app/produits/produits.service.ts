import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private Produits:HttpClient) { }
  public getallproduits(){
    return this.Produits
  }
}
