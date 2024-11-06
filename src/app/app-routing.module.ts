import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  {path:'about', component:AboutPageComponent},
  {path:'items', component:ItemsComponent},
  {path:'items/add', component:AddItemComponent},
  {path:'items/edit/:id', component:AddItemComponent},
  {path:'', redirectTo:'/items', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }