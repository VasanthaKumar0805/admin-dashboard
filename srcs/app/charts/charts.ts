
import { Component, Input, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';

@Component({
  selector: 'app-charts',
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [labels]="labels"
      [xaxis]="xaxis">
    </apx-chart>
  `,
})
export class ChartsComponent implements OnInit {
  @Input() type: 'line' | 'donut' = 'line';
  @Input() data: any;

  chart!: ApexChart;
  series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  labels: string[] = [];
  xaxis: any;

  ngOnInit() {
    if (this.type === 'line') {
      this.series = [{ name: 'Sample', data: this.data }];
      this.chart = { type: 'line', height: 200 };
      this.xaxis = { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] };
    } else {
      this.series = this.data.values;
      this.labels = this.data.labels;
      this.chart = { type: 'donut', height: 250 };
    }
  }
}
