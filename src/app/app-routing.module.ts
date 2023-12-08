import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './auth.guard';
import {userGuard} from './userguard.guard'
import { HistoryComponent } from './components/history/history.component';
import { CommandsComponent } from './components/commands/commands.component';

const routes: Routes = [
  {
    path:'login' , 
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'list',
    component:ListComponent,
    canActivate: [authGuard]
  },
  {
    path:'add',
    component:AddComponent,
    canActivate: [authGuard]
  },
  {
    path:'edit/:id',
    component:EditComponent,
    canActivate: [authGuard]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate: [userGuard]
  },
  {
    path:'history',
    component:HistoryComponent,
    canActivate: [userGuard]
  },
  {
    path:'commands',
    component:CommandsComponent,
    canActivate: [authGuard]
  },
  {path:'**' , redirectTo:'products' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
