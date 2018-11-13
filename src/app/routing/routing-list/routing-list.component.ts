import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoutingList } from './RoutingList';

@Component({
  selector: 'app-routing-list',
  templateUrl: './routing-list.component.html',
  styleUrls: ['./routing-list.component.scss'],
})
export class RoutingListComponent implements OnInit {
  routingHeader: FormGroup;
  routingList: RoutingList;
  constructor(private router: Router,private fb: FormBuilder,private toastr:ToastrService) { }
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
    this.routingHeader = this.fb.group({
      itemcode:['',Validators.required],
      itemdescription:[''],
      versionno:[''],
      whname:['']
    });
  }
  searchButton()  {
  this.routingList= new RoutingList(this.routingHeader.get('itemcode').value,this.routingHeader.get('itemdescription').value,this.routingHeader.get('versionno').value,this.routingHeader.get('whname').value);
    console.log(JSON.stringify(this.routingList));
  }
}
