import { IBaseDataSource } from "./base.datasource";

export interface ITextDataSource extends IBaseDataSource{
    Text:string;
    Type:string;
}

export class TextDataSource implements ITextDataSource {
    Type: string;
    Text: string;
    DisplayKey: string;
    DisplayValue: string;
}