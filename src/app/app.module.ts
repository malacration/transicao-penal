import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService  } from './auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { TransicaoPenalComponent } from './container/transicao-penal/transicao-penal.component';
import { RelatorioComponent } from './container/relatorio/relatorio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StyleChangeDirective } from './style-change.directive';
import { TransformSlashePipe } from './transform-slashe.pipe';
import { MainAreaComponent } from './main-area/main-area.component';
import { TestPipe } from './test.pipe';
import { DisbaleControlDirective } from './disbale-control.directive';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    StyleChangeDirective,
    TransformSlashePipe,
    MainAreaComponent,
    TestPipe,
    DisbaleControlDirective,
    TransicaoPenalComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    CKEditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
