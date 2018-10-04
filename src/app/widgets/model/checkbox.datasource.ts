import { IBaseDataSource } from "./base.datasource";

export interface ICheckBoxDataSource extends IBaseDataSource{
    IsChecked:boolean;
}

export class CheckBoxDataSource implements ICheckBoxDataSource {
    IsChecked: boolean;
    DisplayKey: string;
    DisplayValue: string;    
}