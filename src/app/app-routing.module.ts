import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {FormComponent} from './form/form.component';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import { ObsExempleComponent } from './obs-exemple/obs-exemple.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'update/:id', component: FormComponent},
  {path: 'obsExemple', component: ObsExempleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
