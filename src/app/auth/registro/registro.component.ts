import { Component, OnInit } from '@angular/core';
import { IonItem, IonButton, IonInput, IonInputPasswordToggle, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonInputPasswordToggle, IonIcon, RouterModule],
})
export class RegistroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
