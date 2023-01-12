import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"login",component:LoginComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"items",component:ItemsComponent},
  {path:'createItem',component:CreateItemComponent},
   {path:"models",component:ModelsComponent},
   {path:"nav",component:NavbarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
