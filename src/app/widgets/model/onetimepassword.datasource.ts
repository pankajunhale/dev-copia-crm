import { IBaseDataSource } from "./base.datasource";

export interface IOneTimePasswordDataSource extends IBaseDataSource{
OtpId:Number;
OtpDisplayMessage:string;
OtpTries:Number;//Max Attemps
OtpExpiry:Number;//Minutes
ResendFlag:string;
ResendTries:Number;
DispayTimer:string;
}

export class OneTimePasswordDataSource implements IOneTimePasswordDataSource {
    DispayTimer: string;
    OtpId: Number;
    OtpDisplayMessage: string;
    OtpTries: Number;
    OtpExpiry: Number;
    ResendFlag: string;
    ResendTries: Number;
    DisplayKey: string;
    DisplayValue: string;
}