import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database'; //FirebaseListObservable


/*
  Generated class for the VotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VotosProvider {
  private PATH = '/votos/';
  public grouped = null;
  
  constructor(public db: AngularFireDatabase, public fs: AngularFirestore) {
    console.log('Hello PresidentProvider Provider');
  }

    
    
  getAll(){
    return this.db.list(this.PATH);
  }  
  
  
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(voto: any) {
    return new Promise((resolve, reject) => {
      if (voto.key) {
        this.db.list(this.PATH)
          .update(voto.key, { president_key: voto.president_key, uid: voto.uid, email: voto.email })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ president_key: voto.president_key, uid: voto.uid, email: voto.email })
          .then(() => resolve());
      }
    })
  }

  remove(voto: Voto) {
    return this.db.list(this.PATH).remove(voto.key);
  }
  
  countVoto(president_key){
    let foo = this.fs.collection(this.PATH);
    console.log("foo", foo);
    
    // this.db.list(this.PATH)
    //   .subscribe(keys => this.grouped = this.groupBy(keys, votos => votos.president_key));
    // // console.log("A: ", this.grouped);
       // console.log("this.grouped.get(): ", this.grouped.get("1").length  )
        // return this.grouped.get(president_key);
    return 999;
  }
  
  
  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
  }

}
export interface Voto {
  key?: string,
  president_key: string;
  uid: string;
  email: string
}



/*

        const pets = [
            {type:"Dog", nam
            e:"Spot"},
            {type:"Cat", name:"Tiger"},
            {type:"Dog", name:"Rover"}, 
            {type:"Cat", name:"Leo"}
        ];
        
        const grouped = groupBy(pets, pet => pet.president_key);*/