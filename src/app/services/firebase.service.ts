import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Profile {
  id?: string;
  name: string;
  pass: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Profile[]>{
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Profile[]>;
  }
}
