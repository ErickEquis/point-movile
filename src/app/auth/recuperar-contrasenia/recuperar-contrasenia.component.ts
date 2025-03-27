import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonItem, IonInput, IonIcon, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonIcon, IonButton, RouterModule],
})
export class RecuperarContraseniaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
