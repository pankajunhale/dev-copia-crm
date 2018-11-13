import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { BOMList } from './BOMList';

@Component({
  selector: 'app-bomlist',
  templateUrl: './bomlist.component.html',
  styleUrls: ['./bomlist.component.scss']
})
export class BomlistComponent implements OnInit {
  bomList:BOMList;
  bomHeader:FormGroup;
  constructor(private router:Router,private fb: FormBuilder) { }
  
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
    this.bomHeader=this.fb.group({
      itemcode:['',Validators.required],
      itemdescription:new FormControl(''),
      status:new FormControl(''),
      whname:new FormControl('')
    });
  }

  searchButton()
  {
    this.bomList= new BOMList(this.bomHeader.get("itemcode").value,this.bomHeader.get("itemdescription").value,this.bomHeader.get("status").value,this.bomHeader.get("whname").value);
    console.log(JSON.stringify(this.bomList))
  }

}
