import { Component } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    agregarPersona = false;
    agregarPersonaStatus = "No se ha agregado ninguna persona";
    tituloPersona = "";
    titulo = "Ingeniero ";
    personaCreada =false;

    constructor() {
        setTimeout(
            () => {
                this.agregarPersona = true;
            }
            , 3000);
    }

    onCrearPersona() {
        this.personaCreada = true;
        this.agregarPersonaStatus = "Persona Agregada";
    }

    onModificarPersona(event: Event) {
        this.tituloPersona = (<HTMLInputElement> event.target).value;
    }

    onTwoWaysBinding(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }

}