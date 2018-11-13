import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, ValidationErrors, ValidatorFn,ReactiveFormsModule   } from '@angular/forms';
import { RoutingCreate } from './RoutingCreate';
import { RoutingCreateHeader } from './RoutingCreateHeader';



@Component({
  selector: 'app-routing-create',
  templateUrl: './routing-create.component.html',
  styleUrls: ['./routing-create.component.scss'],

})
export class RoutingCreateComponent implements OnInit {
  routingHeader: FormGroup;
  bool : Boolean
  routingSteps: FormGroup;
  routingstepList:Array<RoutingCreate>
  routingHeaderList:Array<RoutingCreateHeader>
  rc:RoutingCreate;
  rch:RoutingCreateHeader;
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
        stepNo:[''],
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
        stepStatus:[''],
        userName:['',Validators.required],
        supervisorName:['',Validators.required],
        aliases: this.fb.array([
          this.fb.control('')
        ])
    })
    this.routingstepList= new Array<RoutingCreate>();
  }


  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
  get aliases() {
    return this.routingSteps.get('aliases') as FormArray;
  }
  deleteRow(i) {
    this.aliases.removeAt(i);
    this.routingstepList.splice(i,1)
    this.toastr.error("Step Deleted","Step #"+(i+1))
}
stepClicker(i: number)
{
  console.log(JSON.stringify(this.routingstepList[i])+"\n");
  if(this.routingstepList[i]!=null)
  {
    this.routingSteps.get('stepNo').setValue(this.routingstepList[i].stepNo);
    this.routingSteps.get('stepName').setValue(this.routingstepList[i].stepName);
    this.routingSteps.get('procedure').setValue(this.routingstepList[i].procedure);
    this.routingSteps.get('timeUOM').setValue(this.routingstepList[i].timeUOM);
    this.routingSteps.get('plannedLabourTime').setValue(this.routingstepList[i].plannedLabourTime);
    this.routingSteps.get('plannedMachineTime').setValue(this.routingstepList[i].plannedMachineTime);
    this.routingSteps.get('plannedSetupTime').setValue(this.routingstepList[i].plannedSetupTime);
    this.routingSteps.get('totalPlannedTime').setValue(this.routingstepList[i].totalPlannedTime);
    this.routingSteps.get('stepCategory').setValue(this.routingstepList[i].stepCategory);
    this.routingSteps.get('stepStatus').setValue(this.routingstepList[i].stepStatus);
    this.routingSteps.get('userName').setValue(this.routingstepList[i].userName);
    this.routingSteps.get('supervisorName').setValue(this.routingstepList[i].supervisorName);
    this.routingSteps.get('workCentre').setValue(this.routingstepList[i].workCentre);
  }
  else
  {
      this.routingSteps.get('stepNo').setValue('');
      this.routingSteps.get('stepName').setValue('');
      this.routingSteps.get('procedure').setValue('');
      this.routingSteps.get('timeUOM').setValue('');
      this.routingSteps.get('plannedLabourTime').setValue('');
      this.routingSteps.get('plannedMachineTime').setValue('');
      this.routingSteps.get('plannedSetupTime').setValue('');
      this.routingSteps.get('totalPlannedTime').setValue('');
      this.routingSteps.get('stepCategory').setValue('');
      this.routingSteps.get('stepStatus').setValue('');
      this.routingSteps.get('userName').setValue('');
      this.routingSteps.get('supervisorName').setValue('');
      this.routingSteps.get('workCentre').setValue('');
  
}
}
showSuccess(i) {
  this.toastr.success('Routing created', 'Successfully');

}
showSuccessHeader(i) {
  this.findRoutingHeaderInvalidControls()
  const controls = this.routingSteps.controls;
  this.bool=false;
  for (const name in controls) {
      if (controls[name].invalid) {
          this.bool=false;
      }
      else
      {
        this.bool=true;
        }
  }
  if(this.routingHeader.valid)
  {
    this.toastr.info('Header created', '');
    this.rch=new RoutingCreateHeader(
      this.routingHeader.get('itemcode').value,
      this.routingHeader.get('itemdescription').value,
      this.routingHeader.get('versionno').value,
      this.routingHeader.get('whname').value
    )
    console.log(JSON.stringify(this.routingHeader)+"\n");
  }
  else{
    this.toastr.warning('Header Not created', '');
  }
}


showStepAdded() {
  this.findRoutingStepsInvalidControls();
  const controls = this.routingSteps.controls;
   this.bool=false;
  for (const name in controls) {
      if (controls[name].invalid) {
          this.bool=false;
      }
      else
      {
        this.bool=true;
        }
  }
  if(this.routingSteps.valid){
    this.toastr.success('Step added', '');
    this.rc=new RoutingCreate(this.routingSteps.get("stepNo").value,
    this.routingSteps.get("stepName").value,
    this.routingSteps.get("procedure").value,
    this.routingSteps.get("workCentre").value,
    this.routingSteps.get("timeUOM").value,
    this.routingSteps.get("plannedLabourTime").value,
    this.routingSteps.get("plannedMachineTime").value,
    this.routingSteps.get("plannedSetupTime").value,
    this.routingSteps.get("totalPlannedTime").value,
    this.routingSteps.get("stepType").value,
    this.routingSteps.get("stepCategory").value,
    this.routingSteps.get("stepStatus").value,
    this.routingSteps.get("userName").value,
    this.routingSteps.get("supervisorName").value,
    true)
    if(!this.routingstepList.includes(this.rc))
    this.routingstepList.push(this.rc);
    console.log(this.routingstepList.length);
    console.log(JSON.stringify(this.routingstepList)+"\n");
    
    }
  else{
    this.toastr.warning('Step not Added','');
  }

}
public findRoutingStepsInvalidControls() {
  const controls = this.routingSteps.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          console.log(name);
      }
  }
}
public findRoutingHeaderInvalidControls() {
  const controls = this.routingHeader.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          console.log(name);
      }
  }
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