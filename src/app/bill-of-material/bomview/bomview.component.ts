import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bomview',
  templateUrl: './bomview.component.html',
  styleUrls: ['./bomview.component.scss']
})
export class BomviewComponent implements OnInit {

  constructor(private router:Router) { }
  gobomlist(){
  this.router.navigate(['/bill-of-material/list'])
}

  ngOnInit() {
  }

}
