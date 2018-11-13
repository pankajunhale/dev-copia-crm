import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutingEdit } from './RoutingEdit';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-routing-edit',
  templateUrl: './routing-edit.component.html',
  styleUrls: ['./routing-edit.component.scss']
})
export class RoutingEditComponent implements OnInit {
  relist:Array<RoutingEdit>;
  re:RoutingEdit;
  routingData:FormGroup;


  constructor(private router:Router,private toastr:ToastrService,private fb:FormBuilder) { 

  }
 
 goroutinglist(){
   this.router.navigate(['/routing/routing-list'])
 }
  ngOnInit() {
      this.relist=new Array<RoutingEdit>();
      this.re = new RoutingEdit("10",
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
      this.relist.push(this.re);
      
      this.re = new RoutingEdit("20",
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
      this.relist.push(this.re);
      
      this.re = new RoutingEdit("30",
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
      this.relist.push(this.re);
      this.re = new RoutingEdit("40",
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
      this.relist.push(this.re);
  
      this.re = new RoutingEdit("50",
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
      this.relist.push(this.re);
  
      this.re = new RoutingEdit("60",
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
      this.relist.push(this.re);
  
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
      this.re=this.relist[i];
      this.routingData.get('stepNo').setValue(this.re.stepNo);
      this.routingData.get('stepName').setValue(this.re.stepName);
      this.routingData.get('procedure').setValue(this.re.procedure);
      this.routingData.get('workCentre').setValue(this.re.workCentre);
      this.routingData.get('plannedLabourTime').setValue(this.re.plannedLabourTime);
      this.routingData.get('plannedMachineTime').setValue(this.re.plannedMachineTime);
      this.routingData.get('plannedSetupTime').setValue(this.re.plannedSetupTime);
      this.routingData.get('totalPlannedTime').setValue(this.re.totalPlannedTime);
      this.routingData.get('timeUOM').setValue(this.re.timeUOM);
      this.routingData.get('stepType').setValue(this.re.stepType);
      this.routingData.get('stepCategory').setValue(this.re.stepCategory);
      this.routingData.get('stepStatus').setValue(this.re.stepStatus);
      this.routingData.get('userName').setValue(this.re.userName);
      this.routingData.get('supervisorName').setValue(this.re.supervisorName);
      console.log(JSON.stringify(this.re));
    }
  showSuccess() {
    this.toastr.success('Item Updated', "Step No. # "+this.re.stepNo);
    
  }
  showSubmit(i : number) {
    this.toastr.success('Routing Updated', '');
  
    this.re=new RoutingEdit(this.routingData.get("stepNo").value,
    this.routingData.get("stepName").value,
    this.routingData.get("procedure").value,
    this.routingData.get("workCentre").value,
    this.routingData.get("timeUOM").value,
    this.routingData.get("plannedLabourTime").value,
    this.routingData.get("plannedMachineTime").value,
    this.routingData.get("plannedSetupTime").value,
    this.routingData.get("totalPlannedTime").value,
    this.routingData.get("stepType").value,
    this.routingData.get("stepCategory").value,
    this.routingData.get("stepStatus").value,
    this.routingData.get("userName").value,
    this.routingData.get("supervisorName").value,
    true)
    this.relist.splice(i,0,this.re)
  }
  showDelete(i: number) {
    this.toastr.error('Step Deleted', "Step No. # "+this.re.stepNo);
    this.relist.splice(i,1)

  }
}
