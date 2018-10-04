import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { ICheckBoxDataSource,CheckBoxDataSource } from '../model/checkbox.datasource';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() CheckBoxList:Array<ICheckBoxDataSource>;
  @Output() OnCheckBoxSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public OnChecked(item:CheckBoxDataSource):void
  {    
    console.log(item);
    this.OnCheckBoxSelect.emit(item);
  }
}
