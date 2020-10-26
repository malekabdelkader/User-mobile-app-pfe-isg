import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  user:User;
  show:string;
  constructor(    private crudApi: UserService,       // Inject CRUD API in constructor
    ) { }

  ngOnInit() {
    this.show="";
    const id = localStorage.getItem("key");
    this.crudApi.GetUser(id).valueChanges().subscribe(data => {
      console.log(data);
    })
    this.user=new User();
    this.user.nom=localStorage.getItem("nom");
    this.user.prenom=localStorage.getItem("prenom");
    this.user.email=localStorage.getItem("email");
    this.user.password=localStorage.getItem("password");
    this.user.telephone=localStorage.getItem("telephone");
    this.user.matricule=localStorage.getItem("matricule");

    this.user.telephone=this.user.telephone;
    this.user.password=this.user.password;
    this.user.email= this.user.email;
    this.user.matricule=this.user.matricule;

  }
  updateForm() {
    if((this.user.email==null)||(this.user.password==null)||(this.user.matricule==null)||(this.user.telephone==null)){
      alert("Case Vide existante !")
      this.show="Case vide existant !";
    }else {
     this.crudApi.ModifierUser(this.user);       // Update user data using CRUD API
    localStorage.setItem("nom",this.user.nom);
    localStorage.setItem("prenom",this.user.prenom);
    localStorage.setItem("email",this.user.email);
    localStorage.setItem("password",this.user.password);
    localStorage.setItem("matricule",this.user.matricule);
    localStorage.setItem("telephone",this.user.telephone);
    window.location.replace('profile');   }
                // Navigate to user's list page when user data is updated
  }
}


