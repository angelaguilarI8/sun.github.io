import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

formMember: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formMembe();
  }

  formMembe(){
    this.formMember = new FormGroup({
      ubicacion : new FormControl( null, Validators.required ),
      tipoSocio: new FormControl( null, Validators.required ),
      tipoNegocio: new FormControl( null, Validators.required ),
      masSocio: new FormControl( null, Validators.required ),
      precioDesde: new FormControl( null, Validators.required ),
      precioHasta: new FormControl( null, Validators.required ),
      excluirAntinguedad: new FormControl( null, Validators.required ),
      antiguedadPubl : new FormControl( null, Validators.required )
    })
  }


  consultar(){
    console.log(this.formMember.value);
  }

}
