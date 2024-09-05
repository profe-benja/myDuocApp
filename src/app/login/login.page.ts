import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public correo: string;
  public password: any;

  constructor(private navCtrl: NavController) {
    this.correo = '';
    this.password = '';
  }

  login(){
    if (this.correo == 'admin@gmail.com' && this.password == '12345') {
      // alert('es admin');
      this.navCtrl.navigateForward('/home');
    } else {
      alert('error no esta en la base de datos');
    }
  }
}
