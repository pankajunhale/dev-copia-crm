import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  demandPlanCreateForm: FormGroup;

 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.demandPlanCreateForm = new FormGroup({
    //   planName: new FormControl(null),
    //   planNo: new FormControl(null),
    //   forMrp: new FormControl(null),
    //   beName: new FormControl(null),
    //   status: new FormControl(null),
      
    // });

    this.demandPlanCreateForm = this.fb.group({
      planName:['',Validators.required],
      planNo:[''],
      forMrp:[''],
      beName:[''],
      status:[''],
      versionno:[''],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })



    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.demandPlanCreateForm.value);
  }

  updateValue(){
    this.demandPlanCreateForm.setValue({
      planName: 'ABC Plan',
      planNo: '26574102',
      forMrp: '20000',
      beName: 'Chinmay',
      status: 'Select',
      versionno: '15852'
    })
  }

  get aliases() {
    return this.demandPlanCreateForm.get('aliases') as FormArray;
  }
} 
