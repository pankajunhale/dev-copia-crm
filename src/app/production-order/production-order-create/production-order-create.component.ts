import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-production-order-create',
  templateUrl: './production-order-create.component.html',
  styleUrls: ['./production-order-create.component.scss']
})
export class ProductionOrderCreateComponent implements OnInit {
  routingCreateForm: FormGroup;
  constructor(private fb: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.routingCreateForm = this.fb.group({
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
  this.toastr.success('Order created', 'Order #22');
}
showStepAdded(i) {
  this.toastr.success('Step added', 'Step #22');
}

showSuccessHeader() {
  this.toastr.info( 'Header Created','');
}
}
