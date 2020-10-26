import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

user:User;
  constructor() { }

  ngOnInit() {
    this.user=new User();
    this.user.nom=localStorage.getItem("nom");
    this.user.prenom=localStorage.getItem("prenom");
    this.user.email=localStorage.getItem("email");
    this.user.password=localStorage.getItem("password");
    this.user.matricule=localStorage.getItem("matricule");
    this.user.telephone=localStorage.getItem("telephone");
  }

}
