import { Component } from '@angular/core';
import {User} from '../shared/user';
import { UserService } from '../shared/user.service'; // CRUD API service class
import { Router } from '@angular/router';

 @Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
invalide:string="";
user:User;
Users:User[];
  constructor( public crudApi: UserService,private router: Router ) {}
  keys:string[] = new Array(100)  ;

 n:number; 
  ngOnInit() {
   var i=0;
   this.user=new User();
    let s = this.crudApi.GetUsersList();
    console.log(s);

    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Users = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
i++;
        console.log(a);
        a['$key'] = item.key;
console.log(item.key);
this.keys[i]=item.key;
        this.Users.push(a as User);
      })
    })
    
   console.log("started");
  }
  Searchannonce(user) {
    let email=this.user.email;
    let password=this.user.password;
    this.n=0;
    let b=0;
    
     for (let us of this.Users)
    {
     this.n=this.n+1;
      if((email==us.email)&&(password==us.password))
      {
        
        localStorage.setItem("nom",us.nom);
        localStorage.setItem("prenom",us.prenom);
        localStorage.setItem("matricule",us.matricule);
        localStorage.setItem("email",us.email);
        localStorage.setItem("password",us.password);
        localStorage.setItem("telephone",us.telephone);
        localStorage.setItem("id",us.id);
        localStorage.setItem("key",this.keys[b+1]);
         this.router.navigate(['abonnement']);
         this.user.email=null;
         this.user.password=null;
      }
      else{
        b=b+1;
      }
      
    } 
    if(this.n==b)
    {
this.invalide="* Email ou Mot de passe incorrecte!";
    }
  }

}
