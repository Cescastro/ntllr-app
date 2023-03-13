import { Component, OnInit } from '@angular/core';
import { Persona,CreatePersonaDTO,UpdatePersonaDTO } from 'src/app/Models/Persona';
import { PersonaServiceService } from '../../../Services/persona-service.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  fechaActual= new Date();

  personaAEditar: UpdatePersonaDTO ={
    Nombre: '',
    Apellido: '',
    Cedula: '',
    Telefono: '',
    Municipio:'',
    ValorAhorroMensual: 0,
  }

  constructor(
    public PersonaService: PersonaServiceService
  ) { }

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas(){
    this.PersonaService.getAllPersonas();
  }

  CrearNuevoUsuario(){
    
  }

}
