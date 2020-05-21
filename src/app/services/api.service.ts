import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilsService } from '../core/_base/crud';

//Modelos
import { ClienteModel } from '../models/cliente.model';

const API_CALL_URL = 'https://www.rodabernat.es/panel/api/datatables/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }

  // CLIENTES

  getClientes() {
    return this.http.get<ClienteModel[]>(API_CALL_URL + 'customers.php');
  }

  // Activar este cuando este la confirmacion de usuario logeado
  /* getClientes() {
    const httpHeaders = this.httpUtils.getHTTPHeaders();
    return this.http.get<ClienteModel[]>(API_CALL_URL + 'customers.php', { headers: httpHeaders });
  } */

}
