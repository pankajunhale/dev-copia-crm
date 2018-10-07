import { IReturnToStoreForm } from "../interface/store-interface";
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { StoreFormConfigurationService } from "../service/store-form-configuration-service";
import { OnInit } from "@angular/core";

export class SaveStoreFormViewModelBase implements IReturnToStoreForm, OnInit{
    
    MyForm: FormGroup;
    WhName: FormControl;
    RtsNumber: FormControl;
    RtsStatus: FormControl;
    ItemCode: FormControl;
    public FormType:string = "CREATE"; 
    private _service:StoreFormConfigurationService = null;

    constructor(){
        this._service = new StoreFormConfigurationService(this.FormType);       
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

    
}