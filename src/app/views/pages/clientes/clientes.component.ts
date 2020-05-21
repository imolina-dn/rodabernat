import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ClienteModel } from '../../../models/cliente.model';
import { MatPaginator, MatSort, MatTableDataSource, MatFormFieldModule, MatDialog } from '@angular/material';
//Dialogs
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'kt-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit, OnDestroy {

  clientes: ClienteModel[];

  //Datatable
  displayedColumns = ['id', 'nombreCliente', 'dni', 'cif', 'telefono1', 'acciones'];
  dataSource: MatTableDataSource<ClienteModel>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //Llamadas asincronas
  cargarClientes;  

  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cargarClientes = this.apiService.getClientes().subscribe(res => {
      this.clientes = [];
      for(let o of res['data']) {
        this.clientes.push(o);
      }
      console.log(this.clientes);
      this.dataSource = new MatTableDataSource(this.clientes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editCliente(id) {
    let cliente =  this.clientes.find(x => x.id == id);
    this.dialog.open(EditarClienteComponent, {
      height: 'auto',
      width: '90vh',
      minWidth: '600px',
      data: cliente
    }).afterClosed().subscribe(res => {
      if(res) {
        console.log(res);
      }
    });
  }

  deleteCliente(id) {
    this.dialog.open(EliminarClienteComponent, {
      height: 'auto',
      width: '600px'
    }).afterClosed().subscribe(res => {
      if(res && res == 1) {
        console.log(res);
      }
    })
  }

  imprimirListado() {
    alert('Esto imprimira el listado.');
  }

  ngOnDestroy() {
    this.cargarClientes.unsubscribe();
  }

}
