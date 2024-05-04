import { Component, OnInit } from '@angular/core';
import { LivresService } from './livres.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livres!:any
  constructor(private livresService:LivresService) { }

  ngOnInit(): void {
   
  }

}
