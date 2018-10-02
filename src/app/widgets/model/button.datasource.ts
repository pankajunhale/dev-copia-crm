import { IBaseDataSource } from "./base.datasource";

export interface IAutoCompleteDataSource extends IBaseDataSource{
    IsDisable:Boolean;
    Text:String;
}

export class AutoCompleteDataSource implements IAutoCompleteDataSource {
    IsDisable: Boolean;
    Text: String;
    DisplayKey: string;
    DisplayValue: string;
}