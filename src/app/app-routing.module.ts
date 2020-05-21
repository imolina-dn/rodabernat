// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';
import { CustomersComponent } from './views/pages/customers/customers.component';
import { PresupuestosComponent } from './views/pages/presupuestos/presupuestos.component';
import { AlbaranesComponent } from './views/pages/albaranes/albaranes.component';
import { PartesComponent } from './views/pages/partes/partes.component';
import { PartesSinValComponent } from './views/pages/partes-sin-val/partes-sin-val.component';
import { ClientesComponent } from './views/pages/clientes/clientes.component';

const routes: Routes = [
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{ path: 'clientes', component: ClientesComponent },
			{ path: 'presupuestos', component: PresupuestosComponent },
			{ path: 'albaranes', component: AlbaranesComponent },
			{ path: 'partes', component: PartesComponent },
			{ path: 'partes-sin-val', component: PartesSinValComponent },
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
