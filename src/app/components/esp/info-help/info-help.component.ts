import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-info-help',
  templateUrl: './info-help.component.html',
  styleUrls: ['./info-help.component.css']
})
export class InfoHelpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', ]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', ]
    });
  }

}
