import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';


const routes: Routes = [
  {
    path:'page1',component:MainComponent
  },
  {
    path:'page2',component:Main2Component
  },
  {
    path:'form',component:FormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
