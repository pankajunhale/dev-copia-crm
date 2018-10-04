
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ListComponent} from './demand-plan/list/list.component'
import { CreateComponent } from './demand-plan/create/create.component';
import { EditComponent } from './demand-plan/edit/edit.component';
import { ViewComponent } from './demand-plan/view/view.component';
export const router: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'demandplan',component:ListComponent},
  {path: 'demandplancreate',component:CreateComponent},
  {path: 'demandplanedit',component:EditComponent},
  {path: 'demandplanview',component:ViewComponent},
  {path: "",pathMatch:"full",redirectTo:'/home'},
  // {path:"**",component:HomeComponent}
];