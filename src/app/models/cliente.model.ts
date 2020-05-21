import { BaseModel } from '../core/_base/crud';

export class ClienteModel  extends BaseModel {
	id: number;
	nombreCliente: string;
	dni: string;
	telefono1: string;
	telefono2: string;
	email: string;
	direccion: string;
	codpostal: number;
	poblacion: string;
	provincia: string;
	observaciones: string;
	lastName: string;
	gender: string;
	status: number; // 0 = Active | 1 = Suspended | Pending = 2
	//dob: Date;
	tipo: number; // 0 = Business | 1 = Individual
	
	clear() {
		this.nombreCliente = '';
		this.dni = '';
		this.direccion = '';
		this.codpostal = 0;
		this.provincia = '';
		this.poblacion = '';
		this.telefono1 = '';
		this.telefono2 = '';
		this.email = '';
		this.tipo = 1;
		this.status = 1;
		this.observaciones = '';
	
	}
}
