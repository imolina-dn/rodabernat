import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../../material/popups-and-modals/dialog/dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'kt-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  editarClienteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarClienteComponent>) { }

  ngOnInit() {
    console.log(this.data);
    this.editarClienteForm = this.fb.group({
      id: [this.data['id']],
      fechaAlta: [this.data['fecha_alta']],
      cif: [this.data['cif']],
      tipo: [this.data['tipo'] == null ? '' : this.data['tipo']],
      nombre: [this.data['nombreCliente']],
      razon: [this.data['razon']],
      direccion: [this.data['direccion']],
      poblacion: [this.data['poblacion']],
      provincia: [this.data['provincia']],
      cpostal: [this.data['codpostal']],
      telefono: [this.data['telefono1']],
      movil: [this.data['telefono2']],
      email: [this.data['email']],
      unitram: [this.data['unitram']],
      orges: [this.data['orges']],
      ofcont: [this.data['ofcont']],
      fav: [this.data['fav'] == '1' ? true : false],
      observaciones: [this.data['observaciones']]
    })
  }

  editarCliente() {
    this.dialogRef.close(this.editarClienteForm.value);
  }

}
