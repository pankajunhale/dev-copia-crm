import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BOMCreateHeader } from './BOMCreateHeader';

@Component({
  selector: 'app-bomcreate',
  templateUrl: './bomcreate.component.html',
  styleUrls: ['./bomcreate.component.scss']
})
export class BomcreateComponent implements OnInit {
  headerBOMCreateForm:FormGroup;
  model : BOMCreateHeader;
  constructor(private fb: FormBuilder,private router:Router,private toastr:ToastrService,) { }
  gobomlist(){
    this.router.navigate(['/bill-of-material/list'])
  }
  ngOnInit() {
    this.headerBOMCreateForm = this.fb.group({
      itemCode:['',Validators.required],
      itemDescription:[''],
      quantity:[''],
      buom:[''],
      bomVersion:[''],
      bomNumber:[''],
      bomStatus:[''],
      whName:[''],
      bomLevel:[''],
    })
  }
  getHeader()
    {
      this.model = new BOMCreateHeader(this.headerBOMCreateForm.get('itemCode').value,
                  this.headerBOMCreateForm.get('itemDescription').value,
                  this.headerBOMCreateForm.get('quantity').value,
                  this.headerBOMCreateForm.get('buom').value,
                  this.headerBOMCreateForm.get('bomVersion').value,
                  this.headerBOMCreateForm.get('bomNumber').value,
                  this.headerBOMCreateForm.get('bomStatus').value,
                  this.headerBOMCreateForm.get('whName').value,
                  this.headerBOMCreateForm.get('bomLevel').value)

      console.log(JSON.stringify(this.model))
      this.toastr.info( 'Header Created','');
    }



  showSuccess() {
    this.toastr.success('BOM #406852','Bill Created');
  }
  showAdded() {
    this.toastr.success('Material Added', 'Material: Medium level raw material');
  }
  showDelete() {
    this.toastr.error('Material Deleted', 'Material: Medium level raw material');
  }
}
