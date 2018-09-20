import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { Usuario } from './autenticacao.model';

import { PresidentListPage } from '../president-list/president-list';


@IonicPage()
@Component({
  selector: 'page-autenticacao',
  templateUrl: 'autenticacao.html'
})

export class AutenticacaoPage {
  rootPresidentList = PresidentListPage;
  user = null;
  salvarService = {
    salvarFacebook: (usuario)=>{
      this.user = usuario
    }
  }
  constructor(private navCtrl: NavController, public facebook: Facebook) {
    //atribuicao do pacote do facebook
    //public facebook: Facebook,
  }

  goToPresidentList() {
    this.navCtrl.push(PresidentListPage);
  }

//metodo para chamar api do facebook e salvar no banco o usuario    
loginFacebook() {
     let permissions = new Array<string>();
     permissions = ["public_profile", "email"];

     this.facebook.login(permissions).then((response) => {
      let params = new Array<string>();

      this.facebook.api("/me?fields=name,email", params)
      .then(res => {

          //estou usando o model para criar os usuarios
          let usuario = new Usuario();
          usuario.nome = res.name;
          usuario.email = res.email;
          usuario.senha = res.id;
          usuario.login = res.email;
        
          this.logar(usuario);
      }, (error) => {
        alert(error);
        console.log('ERRO LOGIN: ',error);
      })
    }, (error) => {
      alert(error);
    });
  }

  logar(usuario: Usuario) {
    this.salvarService.salvarFacebook(usuario)
    // .then(() => {
    //     console.log('Usuario cadastrado via facebook com sucesso!');
    // })
  }
}