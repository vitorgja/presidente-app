import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PresidentListRankPage } from '../president-list-rank/president-list-rank';
import { PresidentProvider } from '../../providers/president/president';
import { VotosProvider } from '../../providers/votos/votos';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-president-list',
  templateUrl: 'president-list.html',
})
export class PresidentListPage {
  jaVotou = false;
  presidents = null;
  porra: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbPresident: PresidentProvider, public dbVotos: VotosProvider) {
    this.presidents = [
      {name: "Foo A", photo: "https://fakeimg.pl/100x100/?retina=5&text=A&font=noto", votos: 40.05, action: "good"},
      {name: "Foo B", photo: "https://fakeimg.pl/100x100/?retina=5&text=B&font=noto", votos: 19.95, action: "regular"},
      {name: "Foo C", photo: "https://fakeimg.pl/100x100/?retina=5&text=C&font=noto", votos: 25.00, action: "good"},
      {name: "Foo D", photo: "https://fakeimg.pl/100x100/?retina=5&text=D&font=noto", votos: 15.00, action: "bad"}
    ];
    
    // this.presidents = [];
    
    console.log("getAll");
    // this.dbPresident.save({name: "Foo A", photo: "https://fakeimg.pl/100x100/?retina=5&text=A&font=noto"});
    // console.info("dbPresident: ", this.dbPresident.getAll_2);
    this.porra = this.dbPresident.getAll_2();
    // console.log(this.porra);
    
    
    console.info("countVoto: ", dbVotos.countVoto(1) );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresidentListPage');
  }

  goToPresidentListRankPage(){
    this.navCtrl.push(PresidentListRankPage);
  }
  
  remover(president){
    this.dbPresident.remove(president);
  }
  
  votar( president ){
    this.jaVotou = true;
    this.dbVotos.save({
      "president_key": president.$key,
      uid: "string facebook",
      email: "string email facebook"
    })
  }
  getVotos( president ){
    let foo = this.dbVotos.getAll();
    this.c;
    //console.log("All Votos: ", foo.subscribe(a=>this.c = a.map(b=>b)) )
    //president.$key
  }  
  calcVotos( votos ){
    if ( votos < 10) return "bad";
    else if ( votos < 20) return "regular";
    else if ( votos < 40) return "good";
    else if ( votos >= 40) return "verygood";
  }
  // foo(){
  //   /*
  //   this.dbPresident.get("6hCEFHnxvUSCdLlWicgc").catch( r => {
  //     console.log("My DB.get: ", r);
  //   });
  //   */
  
  //   this.dbPresident.save({name:"Joao", tel:"foo bar"})
  //     .then(() =>{
  //     console.log("FOO: ") 
  //     })
  //     .catch(e =>{
  //       console.log("DEU PAU AQUII: ", e.getMessage())
  //     });

  // }
  
  gerarPresidentes(){
    let listaPresidents = [
      {candidato: "Lula", vice: "Fernando Haddad", chapa: "", coligacao: "PT, PCdoB, PCO e Pros", foto: ""},
      {candidato: "Jair Bolsonaro (PSL)", vice: "General Mourão (PRTB)", chapa: "", coligacao: "PSL e PRTB", foto: "https://firebasestorage.googleapis.com/v0/b/president-app-774ab.appspot.com/o/imagens%2Fpresidenciaveis%2Ffotos%2Fbolsonaro.png?alt=media&token=8b382f91-74bf-474b-b722-5949e0fb1b56"},
      {candidato: "Marina Silva (Rede)", vice: "Eduardo Jorge (PV)", chapa: "", coligacao: "Rede e PV", foto: ""},
      {candidato: "Ciro Gomes (PDT)", vice: "Kátia Abreu (PDT)", chapa: "", coligacao: "PDT e Avante", foto: ""},
      {candidato: "Geraldo Alckmin (PSDB)", vice: "Ana Amélia (PP)", chapa: "", coligacao: "PSDB, DEM, PP, PRB, PR, SD, PSD, PTB e PPS", foto: ""},
      {candidato: "Alvaro Dias (Podemos)", vice: "Paulo Rabello de Castro (PSC)", chapa: "", coligacao: "Podemos, PSC, PTC e PRP", foto: ""},
      {candidato: "Henrique Meirelles (MDB)", vice: "Germano Rigotto (PMDB)", chapa: "", coligacao: "MDB e PHS", foto: ""},
      {candidato: "Guilherme Boulos (Psol)", vice: "Sônia Guajajara (Psol)", chapa: "", coligacao: "Psol e PCB", foto: ""},
      {candidato: "João Amoêdo (Novo)", vice: "Christian Lohbauer (Novo)", chapa: "", coligacao: "Novo", foto: ""},
      {candidato: "João Goulart Filho (PPL)", vice: "Léo Alves (PPL)", chapa: "", coligacao: "PPL", foto: ""},
      {candidato: "Vera Lúcia (PSTU)", vice: "Herz Dias (PSTU)", chapa: "", coligacao: "PSTU", foto: ""},
      {candidato: "Cabo Daciolo (Patriota)", vice: "Suelene Balduino Nascimento (Patriota)", chapa: "", coligacao: "Patriota", foto: ""},
      {candidato: "José Maria Eymael (DC)", vice: "Pastor Hélvio Costa (DC)", chapa: "", coligacao: "DC", foto: ""}
    ];
    
    listaPresidents.map(presidente=>{
      this.dbPresident.save(presidente);
    });
  }

}
