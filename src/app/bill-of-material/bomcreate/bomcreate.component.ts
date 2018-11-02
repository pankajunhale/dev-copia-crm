import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bomcreate',
  templateUrl: './bomcreate.component.html',
  styleUrls: ['./bomcreate.component.scss']
})
export class BomcreateComponent implements OnInit {
  constructor(private router:Router,private toastr:ToastrService) { }
  
  gobomlist(){
    this.router.navigate(['/bill-of-material/list'])
  }
  ngOnInit() {

  }

  showSuccess() {
    this.toastr.success('BOM #406852','Bill Created');
  }
  showSuccessHeader() {
    this.toastr.info( 'Header Created','');
  }
  showAdded() {
    this.toastr.success('Material Added', 'Material: Medium level raw material');
  }
  showDelete() {
    this.toastr.error('Material Deleted', 'Material: Medium level raw material');
  }
}
