import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router,
    public nacvCtrl:NavController) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  irpreguntas(){
    this.nacvCtrl.navigateRoot('preguntasres');
  }
  ircatalogo(){
    this.nacvCtrl.navigateRoot('catalogo');
  }

  ngOnInit() {
  }

}
