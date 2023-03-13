export class Persona {

    id?: number;
    Nombre: string;
    Apellido: string;
    Cedula: string;
    Telefono: string;
    Municipio: string;
    ValorAhorroMensual: number;
    FechaInicio: Date;
}

export interface CreatePersonaDTO extends Omit<Persona, 'id'>{
    
}

export interface UpdatePersonaDTO extends Partial<CreatePersonaDTO>{  
}