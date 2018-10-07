import { IReturnToStoreForm } from "../interface/store-interface";
import { FormControl, Validators, FormGroup } from "@angular/forms";

export class StoreFormConfigurationService{
    constructor(formType:string){
        this.FormType = formType;
    }

    private _formType:string = '';
    get FormType():string{
        return this._formType;   
    }
    set FormType(value:string){
        this._formType = value;
    }

    public CreateFormControls(formControls:IReturnToStoreForm){
        formControls.RtsStatus = new FormControl('', Validators.required);
        formControls.RtsNumber = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
          ]);
        formControls.WhName =  new FormControl('', Validators.required);
        formControls.ItemCode = new FormControl('', Validators.required);
        formControls.MyForm = this.CreateForm(formControls);
    }

    public CreateForm(formControls:IReturnToStoreForm):FormGroup{
        return new FormGroup({
            rts: new FormGroup({
                RtsStatus: formControls.RtsStatus,
                RtsNumber: formControls.RtsNumber
            }),
            whName:formControls.WhName,
            itemCode:formControls.ItemCode
        });
    }
}