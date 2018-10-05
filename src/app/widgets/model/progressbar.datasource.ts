import { IBaseDataSource } from "./base.datasource";

export interface IProgressBarDataSource extends IBaseDataSource{
    Text:string;
}

export class ProgressBarDataSource implements IProgressBarDataSource {
    Text: string;
    DisplayKey: string;
    DisplayValue: string;
}