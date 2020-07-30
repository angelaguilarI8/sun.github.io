import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { TraspasosService } from 'src/app/services/traspasos.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  formSale: FormGroup;
  resultado;
  imageError: string;

  constructor( private _tras : TraspasosService, public promiseService : FileReaderPromiseLikeService ) { }

  ngOnInit(): void {
    this.formSaleTras();
  }

  formSaleTras(){
    this.formSale = new FormGroup ({
      nombre : new FormControl( '' ),
      tipoNegocio : new FormControl( '' ),
      monto : new FormControl( '' ),
      ventaMensualPromedio : new FormControl( '' ),
      gastosOperacionMensual : new FormControl( '' ),
      ubicacion: new FormControl( '' ),
      descripcion: new FormControl( '' ),
      competidores: new FormControl( '' ),
      // imagenes: new FormControl(''),
      imagenes: new FormArray([]),
      creador: new FormControl(localStorage.getItem('idusu'))

    })
  }

  consultar(){
    let rq = this.formSale.getRawValue();
    rq.monto = JSON.parse(rq.monto);
    rq.ventaMensualPromedio = JSON.parse(rq.ventaMensualPromedio);
    rq.gastosOperacionMensual = JSON.parse(rq.gastosOperacionMensual);
 
    console.log(rq);
    
  this._tras.registerTraspaso(rq).subscribe(resp => {
   this.resultado = resp;
   console.log(resp)
   console.log(this.resultado)

   this.formSale.reset();
   this.formSale.get('imagenes').reset();
   }
   )
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
    if((<FormArray>this.formSale.get('imagenes')).length <=2){
      (<FormArray>this.formSale.get('imagenes')).push(imag);
    }  else {
      console.log('son mas de 3 registros no mames');
      
    }
      });
    }
}
}