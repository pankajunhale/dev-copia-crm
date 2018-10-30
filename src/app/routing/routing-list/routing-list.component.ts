import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-list',
  templateUrl: './routing-list.component.html',
  styleUrls: ['./routing-list.component.scss']
})
export class RoutingListComponent implements OnInit {

  constructor(private router: Router) { }
 goroutingcreate(){
   this.router.navigate(['/routing/routing-create'])
 }
 goroutingedit(){
  this.router.navigate(['/routing/routing-edit'])
}
 goroutingview(){
  this.router.navigate(['/routing/routing-view'])
}
  ngOnInit() {
  }

}
