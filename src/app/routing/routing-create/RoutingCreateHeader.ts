
export class RoutingCreateHeader
{
    constructor(itemcode: string,itemdescription: string,versionNo: string,whname: string){
        this.itemcode=itemcode;
        this.itemdescription=itemdescription;
        this.versionNo=versionNo;
        this.whname=whname;
    }
    itemcode: string
    itemdescription: string
    versionNo: string
    whname: string
}