import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

nombrePersona:string ="Juan";
ApellidoPersona:string ="Perez";
Edad:number=20;
private EdadV2:number=33;

getEdadV2():number{
  return this.EdadV2;
}


}
