import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.component.html',
  styleUrls: ['./tranfer.component.css']
})
export class TranferComponent implements OnInit {

  formTranfer: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formTranfe()
  }

  formTranfe(){
    this.formTranfer = new FormGroup({
      ubicacion: new FormControl( null, Validators.required ),
      tipoNegocio: new FormControl( null, Validators.required ),
      precioDesde: new FormControl( null, Validators.required ),
      precioHasta: new FormControl( null, Validators.required ),
      sinAntiguedad: new FormControl( null, Validators.required ),
      antiguedadPubl: new FormControl( null, Validators.required )
    })
  }

  consultar(){
    console.log(this.formTranfer.value);
  }

}
