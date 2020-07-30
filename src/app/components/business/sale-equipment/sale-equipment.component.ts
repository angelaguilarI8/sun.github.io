import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { EquipamientosService } from 'src/app/services/equipamientos.service';

@Component({
  selector: 'app-sale-equipment',
  templateUrl: './sale-equipment.component.html',
  styleUrls: ['./sale-equipment.component.css']
})
export class SaleEquipmentComponent implements OnInit {

  formSale : FormGroup;
  imageError: string;
  resultado;

  constructor(public promiseService : FileReaderPromiseLikeService , private _equip : EquipamientosService) { }

  ngOnInit(): void {
    this.formEqui();
  }

  formEqui(){
    this.formSale = new FormGroup ({
      nombre : new FormControl( '', Validators.required ),
      tipoNegocio : new FormControl( '', Validators.required ),
      monto : new FormControl( '', Validators.required ),
      ubicacion: new FormControl( '', Validators.required ),
      descripcion : new FormControl( '', Validators.required ),
      // imagenes: new FormControl('', Validators.required),
      imagenes: new FormArray([]),
      // imagenes: new FormControl( ''),
      creador: new FormControl(localStorage.getItem('idusu'))
    })
  }

  consultar(){
    let rq = this.formSale.getRawValue();
    rq.monto = JSON.parse(rq.monto);
    console.log(rq);
    
  this._equip.registerEquipamiento(rq).subscribe(resp => {
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
      console.log('son mas de 3 registros ');
      
    }
      });
    }
}

}
