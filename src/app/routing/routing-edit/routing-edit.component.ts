import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routing-edit',
  templateUrl: './routing-edit.component.html',
  styleUrls: ['./routing-edit.component.scss']
})
export class RoutingEditComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { 

  }
 
 goroutinglist(){
   this.router.navigate(['/routing/routing-list'])
 }
  ngOnInit() {
  }
   
  showSuccess() {
    this.toastr.success('Item Updated', 'Item #22');
  }
  showSubmit() {
    this.toastr.success('Routing Updated', 'Routing #22');
  }
  showDelete() {
    this.toastr.error('Step Deleted', 'Step #22');
  }
}
