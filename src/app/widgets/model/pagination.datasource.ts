import { IBaseDataSource } from "./base.datasource";

export interface IPaginationDataSource extends IBaseDataSource{
CurrentPageIndex:Number;
PageSize:Number;
First:string;
Next:string;
Previous:string;
Last:string;
TotalCount:string;
}

export class PaginationDataSource implements IPaginationDataSource {
    TotalCount: string;
    CurrentPageIndex: Number;
    PageSize: Number;
    First: string;
    Next: string;
    Previous: string;
    Last: string;
    DisplayKey: string;
    DisplayValue: string;
}