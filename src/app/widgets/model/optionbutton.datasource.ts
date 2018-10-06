import { IBaseDataSource } from "./base.datasource";

export interface IOptionButtonDataSource extends IBaseDataSource{

}

export class OptionButtonDataSource implements IOptionButtonDataSource {
    DisplayKey: string;
    DisplayValue: string;
}