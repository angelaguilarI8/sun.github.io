import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { TraspasosService } from 'src/app/services/traspasos.service';

@Component({
  selector: 'app-modal-traspaso',
  templateUrl: './modal-traspaso.component.html',
  styleUrls: ['./modal-traspaso.component.css']
})
export class ModalTraspasoComponent implements OnInit {

  formTraspActual : FormGroup;
  dataProducts;
  respuesta;
  resultado;
  imageError: string;

  constructor(public dialogRef: MatDialogRef<ModalTraspasoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private promiseService: FileReaderPromiseLikeService,
    private _tras : TraspasosService) { }

  ngOnInit(): void {
    this.formTraspasoActualizar();
    this.formTraspActual.get('id').patchValue(this.data.id.id);
    this.formTraspActual.get('creador').setValue(localStorage.getItem('idusu'));
    this.formTraspActual.get('nombre').patchValue(this.data.id.nombre);
    this.formTraspActual.get('descripcion').patchValue(this.data.id.descripcion);
    this.formTraspActual.get('ubicacion').patchValue(this.data.id.ubicacion);
    this.formTraspActual.get('tipoNegocio').patchValue(this.data.id.tipoNegocio);
    this.formTraspActual.get('monto').patchValue(this.data.id.monto);
    this.formTraspActual.get('ventaMensualEsperada').patchValue(this.data.id.ventaMensualEsperada);
    this.formTraspActual.get('gastosOperacionMensual').patchValue(this.data.id.gastosOperacionMensual);
    this.formTraspActual.get('competidores').patchValue(this.data.id.competidores);
    this.getTraspaso();
    this.dataProducts = this.data.item;
  }

  formTraspasoActualizar(){
    this.formTraspActual = new FormGroup ({
      id: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      ubicacion: new FormControl(''),
      tipoNegocio: new FormControl(''),
      monto: new FormControl(''),
      ventaMensualEsperada: new FormControl(''),
      gastosOperacionMensual: new FormControl(''),
      competidores: new FormControl(''),
      // imagenes: new FormArray([]),
      creador: new FormControl(localStorage.getItem('idusu'))
    })
  }

  getTraspaso(){
    this.dataProducts = this._tras.consultaTraspaso(this.dataProducts)
    console.log('get',this.dataProducts)
  }

  actualizarTraspaso(): void {
     let rq = this.formTraspActual.getRawValue();
     rq.monto = JSON.parse(rq.monto);
     rq.id = JSON.parse(rq.id);
     rq.creador = JSON.parse(rq.creador);
     rq.ventaMensualEsperada = JSON.parse(rq.ventaMensualEsperada);
     rq.gastosOperacionMensual = JSON.parse(rq.gastosOperacionMensual);
    
  this._tras.actualizarTraspaso(rq).subscribe(resp => {
   this.resultado = resp;
   this.dialogRef.close(this.formTraspActual.value)
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
      if((<FormArray>this.formTraspActual.get('imagenes')).length <=2){
        (<FormArray>this.formTraspActual.get('imagenes')).push(imag);
      }  else {
        console.log('son mas de 3 registros ');
        
      }
        });
      }
  }


}
