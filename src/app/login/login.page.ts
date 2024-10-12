import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public nacvCtrl:NavController ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo' : new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })
   }

  ngOnInit() {
  
  }
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');
    var usuario = usuarioString ? JSON.parse(usuarioString) : null;
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresar', 'true');
      this.nacvCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        message: 'Los datos que ingreaste no son correctos',
        header: 'Datos Incorrectos',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

}
