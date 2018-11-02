import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

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
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
