import { CommonModule } from '@angular/common';
import { ChartsModule } from '../charts/charts.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    ChartsModule,
    NgModule,
    CommonModule
  ]
})
export class DashboardModule {} 
