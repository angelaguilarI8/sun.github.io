import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { EquipamientosService } from 'src/app/services/equipamientos.service';

@Component({
  selector: 'app-modal-equipos',
  templateUrl: './modal-equipos.component.html',
  styleUrls: ['./modal-equipos.component.css']
})
export class ModalEquiposComponent implements OnInit {


  formEquipActual : FormGroup;
  dataProducts;
  respuesta;
  resultado;
  imageError: string;

  constructor( public dialogRef: MatDialogRef<ModalEquiposComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private promiseService: FileReaderPromiseLikeService, private _equi : EquipamientosService) { }

  ngOnInit(): void {
    this.formTraspasoActualizar();
    this.formEquipActual.get('id').patchValue(this.data.id.id);
    this.formEquipActual.get('creador').setValue(localStorage.getItem('idusu'));
    this.formEquipActual.get('nombre').patchValue(this.data.id.nombre);
    this.formEquipActual.get('descripcion').patchValue(this.data.id.descripcion);
    this.formEquipActual.get('ubicacion').patchValue(this.data.id.ubicacion);
    this.formEquipActual.get('tipoNegocio').patchValue(this.data.id.tipoNegocio);
    this.formEquipActual.get('monto').patchValue(this.data.id.monto);
    this.getEquipamento();
    this.dataProducts = this.data.item;
  }

  formTraspasoActualizar(){
    this.formEquipActual = new FormGroup ({
      id: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      ubicacion: new FormControl(''),
      tipoNegocio: new FormControl(''),
      monto: new FormControl(''),
      // imagenes: new FormArray([]),
      creador: new FormControl(localStorage.getItem('idusu'))
    })
  }

  getEquipamento(){
    this.dataProducts = this._equi.consultaEquipamiento(this.dataProducts)
    console.log('get',this.dataProducts)
  }

  actualizarEquipamiento(): void {
     let rq = this.formEquipActual.getRawValue();
     rq.monto = JSON.parse(rq.monto);
     rq.id = JSON.parse(rq.id);
     rq.creador = JSON.parse(rq.creador);
    
  this._equi.actualizarEquipamiento(rq).subscribe(resp => {
   this.resultado = resp;
   this.dialogRef.close(this.formEquipActual.value)
   }
   )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any)
  {
    const file = event.target.files[0] ? event.target.files[0] : false;
    const max_size = 20971520;
    if (event.target.files[0].size > max_size) {
     this.imageError =
         'Maximum size allowed is ' + max_size / 1000 + 'Mb';
     return false;
  }
    if(file){
      this.promiseService.toBase64(file).then((result) => {
      const image = result.split(',')[1];
      const imag = new FormControl(image);
      if((<FormArray>this.formEquipActual.get('imagenes')).length <=2){
        (<FormArray>this.formEquipActual.get('imagenes')).push(imag);
      }  else {
        console.log('son mas de 3 registros ');
        
      }
        });
      }
  }

}
