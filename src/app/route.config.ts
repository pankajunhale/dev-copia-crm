import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ListComponent} from './demand-plan/list/list.component'
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

export const router: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'demandplan',component:ListComponent},
  {path: 'demandplan/list',component:ListComponent},
  {path: 'demandplan/create',component:CreateComponent},
  {path: 'demandplan/edit',component:EditComponent},
  {path: 'demandplan/view',component:ViewComponent},
  {path: 'routing/routing-list',component:RoutingListComponent},
  {path: 'routing/routing-create',component:RoutingCreateComponent},
  {path: 'routing/routing-edit',component:RoutingEditComponent},
  {path: 'routing/routing-view',component:RoutingViewComponent},
  {path: 'bill-of-material/list',component:BomlistComponent},
  {path: 'bill-of-material/create',component:BomcreateComponent},
  {path: 'bill-of-material/edit',component:BomeditComponent},
  {path: 'bill-of-material/view',component:BomviewComponent},
  {path: 'bill-of-material/view',component:BomviewComponent},
  {path: 'production-order/create',component:ProductionOrderCreateComponent},
  {path: 'production-order/edit',component:ProductionOrderEditComponent},
  {path: 'production-order/list',component:ProductionOrderListComponent},
  {path: 'production-order/view',component:ProductionOrderViewComponent},
  {path: "",pathMatch:"full",redirectTo:'/home'},
  {path:"**",component:HomeComponent}
];