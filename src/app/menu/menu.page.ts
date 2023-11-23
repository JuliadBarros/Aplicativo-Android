import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  showAgendar(){
    this.navCtrl.navigateForward("agendar")
  }
  showAgendamentos(){
    this.navCtrl.navigateForward("agendamentos")
  }

  showServicos(){
    this.navCtrl.navigateForward("servicos")
  }

  showSobreNos(){
    this.navCtrl.navigateForward("sobre-nos")
  }

  showCadastro(){
    this.navCtrl.navigateForward("cadastro")
  }
}
