import { AlertsService } from './../../services/alerts.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  alerta: any;

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.subscription = this.alertsService.getAlert()
        .subscribe(alerta => this.alerta = alerta);
  }

  onClose() {
    this.alerta = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
