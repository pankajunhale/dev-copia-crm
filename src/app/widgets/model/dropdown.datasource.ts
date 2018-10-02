import { IBaseDataSource } from "./base.datasource";

export interface IDropdownDataSource extends IBaseDataSource{

}

export class DropdownDataSource implements IDropdownDataSource {
    DisplayKey: string;
    DisplayValue: string;
}