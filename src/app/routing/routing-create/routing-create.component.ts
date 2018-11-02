import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-routing-create',
  templateUrl: './routing-create.component.html',
  styleUrls: ['./routing-create.component.scss']
})
export class RoutingCreateComponent implements OnInit {
  routingCreateForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private toastr:ToastrService) { }
  goroutinglist(){
    this.router.navigate(['/routing/routing-list'])
  }
  ngOnInit() {
    this.routingCreateForm = this.fb.group({
      itemcode:['',Validators.required],
      itemdescription:[''],
      versionno:[''],
      whname:[''],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  get aliases() {
    return this.routingCreateForm.get('aliases') as FormArray;
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
}