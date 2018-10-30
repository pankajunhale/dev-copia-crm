import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-view',
  templateUrl: './routing-view.component.html',
  styleUrls: ['./routing-view.component.scss']
})
export class RoutingViewComponent implements OnInit {

  constructor(private router:Router) { }
goroutinglist(){
  this.router.navigate(['/routing/routing-list'])
}
  ngOnInit() {
  }

}
