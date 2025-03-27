import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonItem, IonInput, IonButton, IonInputPasswordToggle, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonInputPasswordToggle, IonIcon, RouterModule],
})
export class LogInComponent  implements OnInit {

  constructor() {}

  ngOnInit() {}

}
