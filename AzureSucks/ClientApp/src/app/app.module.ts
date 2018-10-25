import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { BarChartModule } from '@swimlane/ngx-charts';
import { LeaderBoardChartComponent } from './leader-board-chart/leader-board-chart.component';
import { ChiliCardComponent } from './chili-card/chili-card.component';
import { LeaderBoardListComponent } from './leader-board-list/leader-board-list.component';
import { FaceOffComponent } from './face-off/face-off.component';
import { FlameBadgeComponent } from './flame-badge/flame-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LeaderBoardChartComponent,
    ChiliCardComponent,
    LeaderBoardListComponent,
    FaceOffComponent,
    FlameBadgeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatRippleModule,
    BarChartModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
