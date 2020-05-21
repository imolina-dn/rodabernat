// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { CustomersComponent } from './customers/customers.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { AlbaranesComponent } from './albaranes/albaranes.component';
import { PartesComponent } from './partes/partes.component';
import { PartesSinValComponent } from './partes-sin-val/partes-sin-val.component';
import { ClientesComponent } from './clientes/clientes.component';
//Material
import { 
	GestureConfig, 
	MatProgressSpinnerModule, 
	MatFormFieldModule, 
	MatTableModule, 
	MatSortModule, 
	MatPaginatorModule,
	MatInputModule,
	MatIconModule,
	MatButtonModule,
	MatDialogModule,
	MatCheckboxModule
} from '@angular/material';
//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';

@NgModule({
	declarations: [CustomersComponent, PresupuestosComponent, AlbaranesComponent, PartesComponent, PartesSinValComponent, ClientesComponent, EditarClienteComponent, EliminarClienteComponent],
	exports: [MatFormFieldModule],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule,
		PartialsModule,
		MatFormFieldModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatInputModule,
		FontAwesomeModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatCheckboxModule
	],
	entryComponents: [EditarClienteComponent, EliminarClienteComponent],
	providers: []
})
export class PagesModule {
}
