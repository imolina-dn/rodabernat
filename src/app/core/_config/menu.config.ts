export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Clientes',
					root: true,
					alignment: 'left',
					page: '/clientes',
					translate: 'MENU.CLIENTES',
				},
				{
					title: 'Presupuestos',
					root: true,
					alignment: 'left',
					page: '/presupuestos',
					translate: 'MENU.PRESUPUESTOS',
				},
				{
					title: 'Albaranes',
					root: true,
					alignment: 'left',
					page: '/albaranes',
					translate: 'MENU.ALBARANES',
				},
				{
					title: 'Partes',
					root: true,
					alignment: 'left',
					page: '/partes',
					translate: 'MENU.PARTES',
				},
				{
					title: 'Partes sin Val',
					root: true,
					alignment: 'left',
					page: '/partes-sin-val',
					translate: 'MENU.PARTES_SIN_VAL',
				},
			]
		},
		
	};
	public get configs(): any {
		return this.defaults;
	}
}
