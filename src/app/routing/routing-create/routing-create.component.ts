import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-routing-create',
  templateUrl: './routing-create.component.html',
  styleUrls: ['./routing-create.component.scss']
})
export class RoutingCreateComponent implements OnInit {
  routingHeader: FormGroup;
  routingSteps: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private toastr:ToastrService) { }
  goroutinglist(){
    this.router.navigate(['/routing/routing-list'])
  }
  ngOnInit() {
    this.routingHeader = this.fb.group({
      itemcode:['',Validators.required],
      itemdescription:[''],
      versionno:[''],
      whname:['']
    });
    this.routingSteps=this.fb.group({
        stepNo:['',],
        stepName:['',Validators.compose(
          [Validators.minLength(5), Validators.required])],
        procedure:['',Validators.compose(
          [Validators.minLength(5), Validators.required])],
        workCentre:['',Validators.required],
        timeUOM:['',Validators.required],
        plannedLabourTime:['',Validators.required],
        plannedMachineTime:['',Validators.required],
        plannedSetupTime:['',Validators.required],
        totalPlannedTime:['',Validators.required],
        stepType:['',Validators.required],
        stepCategory:['',Validators.required],
        stepStatus:['',Validators.required],
        userName:['',Validators.required],
        supervisorName:['',Validators.required],
        aliases: this.fb.array([
          this.fb.control('')
        ])
    })
  }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
  get aliases() {
    return this.routingSteps.get('aliases') as FormArray;
  }
  deleteRow() {
    this.aliases.removeAt(this.aliases.length-1);
}

showSuccess(i) {
  this.toastr.success('Routing created', 'Routing #22');
}
showStepAdded(i) {
  
  this.toastr.success('Step added', 'Step #22');
}

showSuccessHeader() {
  this.toastr.info( 'Header Created','');
}





  integer(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error: ValidationErrors = { integer: true };

    if (control.value && control.value !== `${parseInt(control.value, 10)}`) {
      control.setErrors(error);
      return error;
    }

    control.setErrors(null);
    return null;
  };
}
}