import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bomcreate',
  templateUrl: './bomcreate.component.html',
  styleUrls: ['./bomcreate.component.scss']
})
export class BomcreateComponent implements OnInit {
  constructor(private router:Router) { }
  
  gobomlist(){
    this.router.navigate(['/bill-of-material/list'])
  }
  ngOnInit() {

  }
}
