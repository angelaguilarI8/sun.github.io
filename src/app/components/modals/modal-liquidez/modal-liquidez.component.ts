import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { LiquidezService } from 'src/app/services/liquidez.service';

@Component({
  selector: 'app-modal-liquidez',
  templateUrl: './modal-liquidez.component.html',
  styleUrls: ['./modal-liquidez.component.css']
} )
export class ModalLiquidezComponent implements OnInit {

  formLiquidActual : FormGroup;
  dataProducts;
  respuesta;
  resultado;
  imageError: string;

  constructor( public dialogRef: MatDialogRef<ModalLiquidezComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sli : LiquidezService,
    private promiseService: FileReaderPromiseLikeService ) { }

  ngOnInit(): void {
    this.formLiduidsActualizar();
    this.formLiquidActual.get('id').patchValue(this.data.id.id);
    this.formLiquidActual.get('creador').setValue(localStorage.getItem('idusu'));
    this.formLiquidActual.get('nombre').patchValue(this.data.id.nombre);
    this.formLiquidActual.get('descripcion').patchValue(this.data.id.descripcion);
    this.formLiquidActual.get('ubicacion').patchValue(this.data.id.ubicacion);
    this.formLiquidActual.get('tipoNegocio').patchValue(this.data.id.tipoNegocio);
    this.formLiquidActual.get('monto').patchValue(this.data.id.monto);
    this.formLiquidActual.get('tipoSocio').patchValue(this.data.id.tipoSocio);
    this.formLiquidActual.get('porcentaje').patchValue(this.data.id.porcentaje);
    this.formLiquidActual.get('ventaMensualEsperada').patchValue(this.data.id.ventaMensualEsperada);
    this.formLiquidActual.get('gastosOperacionMensual').patchValue(this.data.id.gastosOperacionMensual);
    this.formLiquidActual.get('competidores').patchValue(this.data.id.competidores);
    this.getLiquidez();
    this.dataProducts = this.data.item;
  }

  formLiduidsActualizar() {
    this.formLiquidActual = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      ubicacion: new FormControl(''),
      tipoNegocio: new FormControl(''),
      tipoSocio: new FormControl(''),
      monto: new FormControl(''),
      ventaMensualEsperada: new FormControl(''),
      gastosOperacionMensual: new FormControl(''),
      competidores: new FormControl(''),
      porcentaje: new FormControl(''),
      // imagenes: new FormArray([]),
      // id: new FormControl(localStorage.getItem('idusu')),
      creador: new FormControl(localStorage.getItem('idusu'))

    })
  }


  getLiquidez(){
    this.dataProducts = this._sli.consultaLiquidez(this.dataProducts)
    console.log('get',this.dataProducts)
  }

  actualizarLiquid(): void {
     let rq = this.formLiquidActual.getRawValue();
     rq.monto = JSON.parse(rq.monto);
     rq.id = JSON.parse(rq.id);
     rq.creador = JSON.parse(rq.creador);
     rq.porcentaje = JSON.parse(rq.porcentaje);
     rq.ventaMensualEsperada = JSON.parse(rq.ventaMensualEsperada);
     rq.gastosOperacionMensual = JSON.parse(rq.gastosOperacionMensual);
    
  this._sli.actualizarLiquidez(rq).subscribe(resp => {
   this.resultado = resp;
   this.dialogRef.close(this.formLiquidActual.value)
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
      if((<FormArray>this.formLiquidActual.get('imagenes')).length <=2){
        (<FormArray>this.formLiquidActual.get('imagenes')).push(imag);
      }  else {
        console.log('son mas de 3 registros ');
        
      }
        });
      }
  }

}
