import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bomedit',
  templateUrl: './bomedit.component.html',
  styleUrls: ['./bomedit.component.scss']
})
export class BomeditComponent implements OnInit {

  constructor(private router:Router) { }
   gobomlist(){
   this.router.navigate(['/bill-of-material/list'])
 }
  ngOnInit() {
  }

}
