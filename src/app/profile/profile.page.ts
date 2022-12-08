import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  notes = [];
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
    });

  }

  ngOnInit() {
  }

  openNote(note) {
  }
}
