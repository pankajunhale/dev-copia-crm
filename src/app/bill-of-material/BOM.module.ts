import { NgModule } from "@angular/core";
import { BomcreateComponent } from "./bomcreate/bomcreate.component";
import { BomeditComponent } from "./bomedit/bomedit.component";
import { BomlistComponent } from "./bomlist/bomlist.component";
import { BomviewComponent } from "./bomview/bomview.component";
import { CommonModule } from "@angular/common";

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