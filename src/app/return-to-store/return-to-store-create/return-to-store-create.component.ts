import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import {IReturnToStoreForm} from '../interface/store-interface'
import { SaveStoreFormViewModelBase } from '../view-model/store-create-base';

//https://www.concretepage.com/angular-2/angular-2-4-formbuilder-example

@Component({
  selector: 'app-return-to-store-create',
  templateUrl: './return-to-store-create.component.html',
  styleUrls: ['./return-to-store-create.component.scss']
})
export class ReturnToStoreCreateComponent extends SaveStoreFormViewModelBase implements OnInit {

  submitted = false;
  constructor(private formBuilder:FormBuilder) { 
    super();
   }

   ngOnInit(): void {    
    this.CreateFormControls();
    this.CreateForm();
}

  public CreateFormControls(){
      this.RtsStatus = new FormControl('', Validators.required);
      this.RtsNumber = new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]);
      this.WhName =  new FormControl('', Validators.required);
      this.ItemCode = new FormControl('', Validators.required);
  }

  public CreateForm(){
      this.MyForm = new FormGroup({
          rts: new FormGroup({
            RtsStatus: this.RtsStatus,
            RtsNumber: this.RtsNumber
          }),
          WhName:this.WhName,
          ItemCode:this.ItemCode
      });
  }

  

  public onSubmit():void{
    this.submitted = true;
  }

}






