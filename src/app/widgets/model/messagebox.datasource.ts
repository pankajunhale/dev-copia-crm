import { IBaseDataSource } from "./base.datasource";

export interface IMessageBoxDataSource extends IBaseDataSource{
MessageText:string;
}

export class MessageBoxDataSource implements IMessageBoxDataSource {
    MessageText: string;
    DisplayKey: string;
    DisplayValue: string;
}