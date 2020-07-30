import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

formPay: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formPays();
  }

  formPays(){
    this.formPay = new FormGroup({
      numeroTarjeta: new FormControl(),
      vencimiento: new FormControl(),
      ccv: new FormControl(),
      nombre: new FormControl(),
      calle: new FormControl(),
      numExt: new FormControl(),
      numInt: new FormControl(),
      colonia: new FormControl(),
      cp: new FormControl(),
      delegacion: new FormControl(),
      ciudad: new FormControl(),
      estado: new FormControl(),
      pais: new FormControl()
    })
  }

  consulta(){
    console.log(this.formPay.value)
  }
}
