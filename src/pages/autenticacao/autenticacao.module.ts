import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutenticacaoPage } from './autenticacao';

@NgModule({
  declarations: [
    AutenticacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AutenticacaoPage),
  ],
})
export class AutenticacaoPageModule {}







export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Usuario extends Model {
    codigo: number;
    nome: string;
    email: string;
    login: string;
    senha: string;
}