

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations:[ChartsComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    
  ],
  exports: [ChartsComponent]
})
export class ChartsModule {}
