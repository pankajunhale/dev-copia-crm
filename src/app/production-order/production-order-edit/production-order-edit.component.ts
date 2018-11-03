import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-production-order-edit',
  templateUrl: './production-order-edit.component.html',
  styleUrls: ['./production-order-edit.component.scss']
})
export class ProductionOrderEditComponent implements OnInit {
  
  constructor(private toastr:ToastrService) { 

  }
 
  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Item Updated', 'Item #22');
  }
  showSubmit() {
    this.toastr.success('Production Order Updated', 'Production Order #22');
  }
  showDelete() {
    this.toastr.error('Step Deleted', 'Step #22');
  }
}
