import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ReportComponent } from './report/report.component';
import { ApproveViewComponent } from './approve-view/approve-view.component';
import { ListComponent } from './list/list.component';
import { MainIndexOneComponent } from './main-index-one/main-index-one.component';
import { MainIndexTwoComponent } from './main-index-two/main-index-two.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'approve', component: ApproveViewComponent },
  { path: 'main-one', component: MainIndexOneComponent },
  { path: 'main-two', component: MainIndexTwoComponent },
  { path: 'list', component: ListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'view', component: ViewComponent },
  { path: '**', component: ViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ReportComponent,
    ApproveViewComponent,
    ListComponent,
    MainIndexOneComponent,
    MainIndexTwoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
