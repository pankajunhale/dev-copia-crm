import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bomlist',
  templateUrl: './bomlist.component.html',
  styleUrls: ['./bomlist.component.scss']
})
export class BomlistComponent implements OnInit {

  constructor(private router:Router) { }
  
  gobomcreate(){
    this.router.navigate(['/bill-of-material/create'])
    }
  gobomedit(){
  this.router.navigate(['/bill-of-material/edit'])
  }
  gobomview(){
    this.router.navigate(['/bill-of-material/view'])
    }
  ngOnInit() {
  }

}
