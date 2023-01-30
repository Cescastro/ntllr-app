import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  myAppUrl = 'https://localhost:44307/';
  myApiUrl = 'api/Personas';
  personas: Persona[];

  constructor(private http: HttpClient) { }

  getAllPersonas(){
    this.http.get(this.myAppUrl+this.myApiUrl).toPromise()
                    .then(data=>{
                      this.personas = data as Persona[]
                    });
  }
}
