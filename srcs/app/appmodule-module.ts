import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from 'ng-apexcharts';
import my from '@angular/common/locales/my';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    ChartComponent
  ],
schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppmoduleModule { }
