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
import { StoreRequestListComponent } from './store-request/store-request-list/store-request-list.component';
import { StoreRequestCreateComponent } from './store-request/store-request-create/store-request-create.component';
import { StoreRequestEditComponent } from './store-request/store-request-edit/store-request-edit.component';
import { StoreRequestViewComponent } from './store-request/store-request-view/store-request-view.component';
import { StoreIssueListComponent } from './store-issue/store-issue-list/store-issue-list.component';
import { StoreIssueCreateComponent } from './store-issue/store-issue-create/store-issue-create.component';
import { StoreIssueEditComponent } from './store-issue/store-issue-edit/store-issue-edit.component';
import { StoreIssueViewComponent } from './store-issue/store-issue-view/store-issue-view.component';
import { MrpRunComponent } from './mrp/mrp-run/mrp-run.component';
import { MrpListComponent } from './mrp/mrp-list/mrp-list.component';
import { PurchaseRequisitionListComponent } from './purchase-requisition/purchase-requisition-list/purchase-requisition-list.component';
import { ReturnToStoreListComponent } from './return-to-store/return-to-store-list/return-to-store-list.component';
import { ReturnToStoreCreateComponent } from './return-to-store/return-to-store-create/return-to-store-create.component';
import { PurchaseRequisitionCreateComponent } from './purchase-requisition/purchase-requisition-create/purchase-requisition-create.component';
import { PurchaseRequisitionEditComponent } from './purchase-requisition/purchase-requisition-edit/purchase-requisition-edit.component';
import { PurchaseRequisitionViewComponent} from './purchase-requisition/purchase-requisition-view/purchase-requisition-view.component';
import { ReturnToStoreEditComponent } from './return-to-store/return-to-store-edit/return-to-store-edit.component';
import { ReturnToStoreViewComponent } from './return-to-store/return-to-store-view/return-to-store-view.component';

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
  {path: 'store-request/store-request-list',component:StoreRequestListComponent},
  {path: 'store-request/store-request-create',component:StoreRequestCreateComponent},
  {path: 'store-request/store-request-edit',component:StoreRequestEditComponent},
  {path: 'store-request/store-request-view',component:StoreRequestViewComponent},
  {path: 'store-issue/store-issue-list',component:StoreIssueListComponent},
  {path: 'store-issue/store-issue-create',component:StoreIssueCreateComponent},
  {path: 'store-issue/store-issue-edit',component:StoreIssueEditComponent},
  {path: 'store-issue/store-issue-view',component:StoreIssueViewComponent},
  {path: 'mrp/run',component:MrpRunComponent},
  {path: 'mrp/list',component:MrpListComponent},
  {path: 'purchase-requisition/list',component:PurchaseRequisitionListComponent},
  {path: 'return-to-store/return-to-store-list',component:ReturnToStoreListComponent},
  {path: 'return-to-store/return-to-store-create',component:ReturnToStoreCreateComponent},
  {path: 'return-to-store/return-to-store-edit',component:ReturnToStoreEditComponent},
  {path: 'return-to-store/return-to-store-view',component:ReturnToStoreViewComponent},
  {path: 'purchase-requisition/create',component:PurchaseRequisitionCreateComponent},
  {path: 'purchase-requisition/edit',component:PurchaseRequisitionEditComponent},
  {path: 'purchase-requisition/view',component:PurchaseRequisitionViewComponent},
  {path: "",pathMatch:"full",redirectTo:'/home'},
  {path:"**",component:HomeComponent}
];