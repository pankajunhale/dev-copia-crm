
export class BOMCreateHeader
{
    constructor(ItemCode: string,ItemDescription: string,Quantity: string,Buom: string,BOMVersion: string,BOMNumber: string, BOMStatus: string, WHName: string, BOMLevel: string){
            this._ItemCode=ItemCode
            this._ItemDescription=ItemDescription
            this._Quantity=Quantity
            this._Buom=Buom
            this._BOMVersion=BOMVersion
            this._BOMNumber=BOMNumber
            this._BOMStatus=BOMStatus
            this._WHName=WHName
            this._BOMLevel=BOMLevel
        }


            _ItemCode: string
            _ItemDescription: string
            _Quantity: string
            _Buom: string
            _BOMVersion: string
            _BOMNumber: string
            _BOMStatus: string
            _WHName: string
            _BOMLevel: string
    
}