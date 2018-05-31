import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { LabelComponent } from './label/label.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
  { path: 'page-3', component: Page3Component },
  { path: 'page-4', component: Page4Component },
  { path: 'page-5', component: Page5Component },
  { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
