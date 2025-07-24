import { Component ,input} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
teamsChartData = [10, 20, 30, 40, 50];
usersChartData = [5, 15, 25, 35, 45];
formationData = {
  labels: ['Created', 'Assigned', 'Confirmed'],
  values: [25, 35, 40],
};

}
