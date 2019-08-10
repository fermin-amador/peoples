import { Injectable, OnInit } from '@angular/core';
// import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map, mapTo } from "rxjs/operators";
import { People } from '../models/people';
// import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService implements OnInit {

  public peopleCollection: AngularFirestoreCollection<People>;
  public people: Observable<Array<People>>;
  public peopleDoc: AngularFirestoreDocument<People>;
  public peoplebyid: Observable<People>;

  constructor(public afs: AngularFirestore) {
    // this.people = afs.collection('people').valueChanges();
    this.peopleCollection = this.afs.collection<People>('people');

  }
  ngOnInit(){

    this.getPeoples();
  }

  getPeoples() {
    return this.peopleCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as People;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  getPeopleById(IdPeople){
   return this.peopleCollection.doc(IdPeople).snapshotChanges().pipe(
      map(actions => {
        const data = actions.payload.data() as People
        const id   = actions.payload.id;
        if(data)return {id, ...data };
        else false;
      }));



  }

  addPeople(people: People) {
    return this.peopleCollection.add({
      name: people.name,
      biography: people.biography,
      heroe: people.heroe
    });
  }

  updatePeople(people: People){
    return this.peopleCollection.doc(people.id).update(people);
    // return this.afs.doc('people/'+ people.id ).update(people);
  }

  deletePeople(IdPeople){
    return this.peopleCollection.doc(IdPeople).delete();
    // return this.afs.doc('people/'+ IdPeople).delete();
  }

}
