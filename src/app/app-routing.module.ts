import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListingComponent } from './data-listing/data-listing.component';

const routes: Routes = [
  {path:'', component:DataListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
