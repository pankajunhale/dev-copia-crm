import { Component } from '@angular/core';
import { ICheckBoxDataSource,CheckBoxDataSource } from './widgets/model/checkbox.datasource';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  MyData:Array<ICheckBoxDataSource> = new Array<ICheckBoxDataSource>();
  
  MySubData:Array<ICheckBoxDataSource> = new Array<ICheckBoxDataSource>();
  MyFilterData:Array<ICheckBoxDataSource> = new Array<ICheckBoxDataSource>();
  

  constructor(){
    for (let index = 1; index < 4; index++) {
      let obj:ICheckBoxDataSource = new CheckBoxDataSource();
      obj.DisplayKey =  index.toString();
      obj.DisplayValue = "State " + index.toString();
      obj.IsChecked = false;
      this.MyData.push(obj);      
    }
    for (let index = 1; index < 4; index++) {
      let obj:ICheckBoxDataSource = new CheckBoxDataSource();
      obj.DisplayKey =  index.toString();
      obj.DisplayValue = "City " + index.toString();
      obj.IsChecked = false;
      this.MySubData.push(obj);      
    }
}
 
public SelectCheckValue(data:CheckBoxDataSource)
{
this.MyFilterData = this.MySubData.filter(item=>{
  return (item.DisplayKey == data.DisplayKey && data.IsChecked)
})
}
}