import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bomedit',
  templateUrl: './bomedit.component.html',
  styleUrls: ['./bomedit.component.scss']
})
export class BomeditComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { }
   gobomlist(){
   this.router.navigate(['/bill-of-material/list'])
 }
  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Material Updated', 'Material: Medium level raw material');
  }
  showupdate() {
    this.toastr.success('BOM Updated', 'Material: Medium level raw material');
  }
  showDelete() {
    this.toastr.error('Material Deleted', 'Material: Medium level raw material');
  }
  showSubmit() {
    this.toastr.success('Bill Updated', 'Bill #22');
  }
}
