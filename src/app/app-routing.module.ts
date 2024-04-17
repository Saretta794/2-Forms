import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsempioUnoComponent } from './components/esempio-uno/esempio-uno.component';
import { EsempioDueComponent } from './components/esempio-due/esempio-due.component';
import { EsempioTreComponent } from './components/esempio-tre/esempio-tre.component';
import { EsempioQuattroComponent } from './components/esempio-quattro/esempio-quattro.component';

const routes: Routes = [
  {path: 'es-1', component:EsempioUnoComponent},
  {path: 'es-2', component:EsempioDueComponent},
  {path: 'es-3', component:EsempioTreComponent},
  {path: 'es-4', component:EsempioQuattroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
