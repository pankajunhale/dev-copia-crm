import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-routing-create',
  templateUrl: './routing-create.component.html',
  styleUrls: ['./routing-create.component.scss']
})
export class RoutingCreateComponent implements OnInit {
  routingCreateForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router) { }
  goroutinglist(){
    this.router.navigate(['/routing/routing-list'])
  }
  ngOnInit() {
    this.routingCreateForm = this.fb.group({
      itemcode:['',Validators.required],
      itemdescription:[''],
      versionno:[''],
      whname:[''],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  get aliases() {
    return this.routingCreateForm.get('aliases') as FormArray;
  }
}
