import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownComponent } from './widgets/dropdown/dropdown.component';
import { OptionbuttonComponent } from './widgets/optionbutton/optionbutton.component';
import { CheckboxComponent } from './widgets/checkbox/checkbox.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';
import { MessageboxComponent } from './widgets/messagebox/messagebox.component';
import { AutocompleteComponent } from './widgets/autocomplete/autocomplete.component';
import { FileuploadComponent } from './widgets/fileupload/fileupload.component';
import { ProgressbarComponent } from './widgets/progressbar/progressbar.component';
import { OnetimepasswordComponent } from './widgets/onetimepassword/onetimepassword.component';
import { ButtonComponent } from './widgets/button/button.component';
import { ChartsComponent } from './widgets/charts/charts.component';
import { PiChartComponent } from './widgets/charts/pi-chart/pi-chart.component';
import { BarChartComponent } from './widgets/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './widgets/charts/doughnut-chart/doughnut-chart.component';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import {router} from './route.config'
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { ListComponent } from './demand-plan/list/list.component';
import { CreateComponent } from './demand-plan/create/create.component';
import { EditComponent } from './demand-plan/edit/edit.component';
import { ViewComponent } from './demand-plan/view/view.component';
import { RoutingListComponent } from './routing/routing-list/routing-list.component';
import { RoutingCreateComponent } from './routing/routing-create/routing-create.component';
import { BomlistComponent } from './bill-of-material/bomlist/bomlist.component';
import { BomcreateComponent } from './bill-of-material/bomcreate/bomcreate.component';
import { BomeditComponent } from './bill-of-material/bomedit/bomedit.component';
import { BomviewComponent } from './bill-of-material/bomview/bomview.component';
import { RoutingEditComponent } from './routing/routing-edit/routing-edit.component';
import { RoutingViewComponent } from './routing/routing-view/routing-view.component';
import { ProductionOrderCreateComponent } from './production-order/production-order-create/production-order-create.component';
import { ProductionOrderEditComponent } from './production-order/production-order-edit/production-order-edit.component';
import { ProductionOrderListComponent } from './production-order/production-order-list/production-order-list.component';
import { ProductionOrderViewComponent } from './production-order/production-order-view/production-order-view.component';
import { MrpRunComponent } from './mrp/mrp-run/mrp-run.component';
import { MrpListComponent } from './mrp/mrp-list/mrp-list.component';
import { PurchaseRequisitionListComponent } from './purchase-requisition/purchase-requisition-list/purchase-requisition-list.component';
import { PurchaseRequisitionCreateComponent } from './purchase-requisition/purchase-requisition-create/purchase-requisition-create.component';
import { PurchaseRequisitionEditComponent } from './purchase-requisition/purchase-requisition-edit/purchase-requisition-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    OptionbuttonComponent,
    CheckboxComponent,
    PaginationComponent,
    CalendarComponent,
    MessageboxComponent,
    AutocompleteComponent,
    FileuploadComponent,
    ProgressbarComponent,
    OnetimepasswordComponent,
    ButtonComponent, 
    ChartsComponent,
    PiChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    TextboxComponent,
    AboutComponent,
    LeftNavbarComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    RoutingListComponent,
    RoutingCreateComponent,
    BomlistComponent,
    BomcreateComponent,
    BomeditComponent,
    BomviewComponent,
    RoutingEditComponent,
    RoutingViewComponent,
    ProductionOrderCreateComponent,
    ProductionOrderEditComponent,
    ProductionOrderListComponent,
    ProductionOrderViewComponent,
    MrpRunComponent,
    MrpListComponent,
    PurchaseRequisitionListComponent,
    PurchaseRequisitionCreateComponent,
    PurchaseRequisitionEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   


