import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutingEdit } from './RoutingEdit';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-routing-edit',
  templateUrl: './routing-edit.component.html',
  styleUrls: ['./routing-edit.component.scss']
})
export class RoutingEditComponent implements OnInit {
  rv:RoutingEdit;
  rvlist:Array<RoutingEdit>;
  routingData:FormGroup;
  constructor(private router:Router,private toastr:ToastrService,private fb:FormBuilder) { 

  }
 
 goroutinglist(){
   this.router.navigate(['/routing/routing-list'])
 }
 ngOnInit() {
  this.rvlist=new Array<RoutingEdit>();
  this.rv = new RoutingEdit("10",
  "Boil water",
  "Add 3 cups of luke warm to container",
  "Wash Basin",
  "Seconds",
  "00:10",
  "00:20",
  "00:30",
  "01:00",
  "NOLPG",
  "Water",
  "1",
  "Roshan",
  "Abhay",
  true,
  )
  this.rvlist.push(this.rv);

  
  this.rv = new RoutingEdit("20",
  "Ignite Stove",
  "Ignite the Stove using lighter",
  "Stove",
  "Seconds",
  "00:10",
  "00:00",
  "00:05",
  "0:15",
  "LPG",
  "Fire",
  "2",
  "Abhay",
  "Swati",
  true,
  )
  this.rvlist.push(this.rv);

  
  this.rv = new RoutingEdit("30",
  "Make Masala",
  "Mix ginger clove blackpepper cardammon and cinneman and grind them ",
  "Kitchen",
  "Minutes",
  "01:00",
  "01:20",
  "02:30",
  "04:50",
  "NOLPG",
  "Grinder",
  "1",
  "Swati",
  "Roshan",
  true,
  )
  this.rvlist.push(this.rv);
  this.rv = new RoutingEdit("40",
  "Add Masala and Milk",
  "Add the Masala to the boiling water , after it boils again add milk",
  "Stove",
  "Minutes",
  "01:00",
  "01:20",
  "00:30",
  "03:20",
  "LPG",
  "Stove",
  "2",
  "Roshan",
  "Abhay",
  true,
  )
  this.rvlist.push(this.rv);

  this.rv = new RoutingEdit("50",
  "Add Tea leaves",
  "Once the ingredients starts boiling add tea leaves to it",
  "Stove",
  "Minutes",
  "00:30",
  "00:00",
  "00:00",
  "00:30",
  "LPG",
  "Stove",
  "1",
  "Abhay",
  "Swati",
  true,
  )
  this.rvlist.push(this.rv);

  this.rv = new RoutingEdit("60",
  "Add Sugar",
  "Once the ingredients starts boiling add Sugar to it",
  "Stove",
  "Minutes",
  "00:10",
  "00:00",
  "00:00",
  "00:10",
  "LPG",
  "Stove",
  "2",
  "Swati",
  "Roshan",
  true,
  )
  this.rvlist.push(this.rv);

  this.routingData=this.fb.group({
    stepNo:new FormControl(''),
    stepName:[''],
    procedure:[''],
    workCentre:[''],
    timeUOM:[''],
    plannedLabourTime:[''],
    plannedMachineTime:[''],
    plannedSetupTime:[''],
    totalPlannedTime:[''],
    stepType:[''],
    stepCategory:[''],
    stepStatus:[''],
    userName:[''],
    supervisorName:[''],
  })
  
}


stepClicker(i: number)
{
  this.rv=this.rvlist[i];
  this.routingData.get('stepNo').setValue(this.rv.stepNo);
  this.routingData.get('stepName').setValue(this.rv.stepName);
  this.routingData.get('procedure').setValue(this.rv.procedure);
  this.routingData.get('workCentre').setValue(this.rv.workCentre);
  this.routingData.get('plannedLabourTime').setValue(this.rv.plannedLabourTime);
  this.routingData.get('plannedMachineTime').setValue(this.rv.plannedMachineTime);
  this.routingData.get('plannedSetupTime').setValue(this.rv.plannedSetupTime);
  this.routingData.get('totalPlannedTime').setValue(this.rv.totalPlannedTime);
  this.routingData.get('timeUOM').setValue(this.rv.timeUOM);
  this.routingData.get('stepType').setValue(this.rv.stepType);
  this.routingData.get('stepCategory').setValue(this.rv.stepCategory);
  this.routingData.get('stepStatus').setValue(this.rv.stepStatus);
  this.routingData.get('userName').setValue(this.rv.userName);
  this.routingData.get('supervisorName').setValue(this.rv.supervisorName);
  console.log(JSON.stringify(this.rv));
}
   
  showSuccess() {
    this.toastr.success('Item Updated', 'Item #22');
  }
  showSubmit() {
    this.toastr.success('Routing Updated', 'Routing #22');
  }
  showDelete() {
    this.toastr.error('Step Deleted', 'Step #22');
  }
}
