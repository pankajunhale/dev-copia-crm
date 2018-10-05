import { IBaseDataSource } from "./base.datasource";

export interface IChartsDataSource extends IBaseDataSource{
}

export class ChartsDataSource implements IChartsDataSource {
    
    DisplayKey: string;
    DisplayValue: string;
}