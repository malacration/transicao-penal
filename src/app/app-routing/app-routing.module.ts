import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { TransicaoPenalComponent } from '../container/transicao-penal/transicao-penal.component';
import { RelatorioComponent } from '../container/relatorio/relatorio.component';
import { MainAreaComponent } from '../main-area/main-area.component';


const appRoutes:Routes=[
  {path:'mainarea', redirectTo: '/transicao-penal', pathMatch:'full'},
  {path:'mainarea', component:MainAreaComponent , pathMatch:'full'},
  {path:'transicao-penal', component:TransicaoPenalComponent, pathMatch:'full'},
  {path:'relatorio', component:RelatorioComponent, pathMatch:'full'},
  {path:'', redirectTo: '/transicao-penal', pathMatch:'full'},
  {path:'**', redirectTo: '/transicao-penal'},
];


@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)
  ],
  exports:[
   RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
