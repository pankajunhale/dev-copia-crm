import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-edit',
  templateUrl: './routing-edit.component.html',
  styleUrls: ['./routing-edit.component.scss']
})
export class RoutingEditComponent implements OnInit {

  constructor(private router:Router) { 
  }
 
 goroutinglist(){
   this.router.navigate(['/routing/routing-list'])
 }
  ngOnInit() {
  }
  toastsubmit()
  {
  }
}
