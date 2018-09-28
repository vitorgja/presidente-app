import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/*
  Generated class for the PresidentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PresidentProvider {
  private PATH = '/president/';
  
  constructor(public db: AngularFireDatabase) {
    console.log('Hello PresidentProvider Provider');
  }

    
    
  getAll_2(){
    return this.db.list(this.PATH);
  }  
  
  
  // get(key: string) {
  //   return this.db.object(this.PATH + key).snapshotChanges()
  //     .map(c => {
  //       return { key: c.key, ...c.payload.val() };
  //     });
  // }

  save(president: any) {
    return new Promise((resolve, reject) => {
      if (president.key) {
        this.db.list(this.PATH)
          .update(president.key, {
            candidato:  president.candidato, 
            vice:       president.vice, 
            chapa:      president.chapa, 
            coligacao:  president.coligacao, 
            foto:       president.foto
          })
            
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push( {
            candidato:  president.candidato, 
            vice:       president.vice, 
            chapa:      president.chapa, 
            coligacao:  president.coligacao, 
            foto:       president.foto
          })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
