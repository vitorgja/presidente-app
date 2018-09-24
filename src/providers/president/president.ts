import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the PresidentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PresidentProvider {
  private PATH = 'president';

  constructor(public db: AngularFireDatabase) {
    console.log('Hello PresidentProvider Provider');
  }
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(contact: any) {
    console.log("Provider President: ", contact);
    this.db.list(this.PATH)
      .push({ name: contact.name, tel: contact.tel })
      .then(r => console.log(r));

    return;

    // return new Promise((resolve, reject) => {
    //   if (contact.key) {
    //     this.db.list(this.PATH)
    //       .update(contact.key, { name: contact.name, tel: contact.tel })
    //       .then(() => resolve())
    //       .catch((e) => reject(e));
    //   } else {
    //     this.db.list(this.PATH)
    //       .push({ name: contact.name, tel: contact.tel })
    //       .then(() => resolve());
    //   }
    // })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
