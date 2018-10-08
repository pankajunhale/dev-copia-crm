import { NgModule } from "../../node_modules/@angular/core";
import { BomcreateComponent } from "./bill-of-material/bomcreate/bomcreate.component";
import { BomeditComponent } from "./bill-of-material/bomedit/bomedit.component";
import { BomlistComponent } from "./bill-of-material/bomlist/bomlist.component";
import { BomviewComponent } from "./bill-of-material/bomview/bomview.component";
import { CommonModule } from "../../node_modules/@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BomcreateComponent,
        BomeditComponent,
        BomlistComponent,
        BomviewComponent
    ]
})
export class BOMModule{
    
}