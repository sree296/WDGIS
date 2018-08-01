import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ScanComponent } from './scan/scan.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { ResultsComponent } from './results/results.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { ScanService } from './scan/scan.service';

//Define the routes
const appRoutes: Routes = [
    { path: '', component: ScanComponent, pathMatch: 'full' },
    { path: 'results', component: ResultsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ScanComponent,
    NavFooterComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
