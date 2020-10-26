import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import { UserService } from '../shared/user.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms'; // Reactive form services
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit{
x:number;
emaill:string;
user:User;
Users:User[];
showww:string;
show:string;
showw:string;
message:string;
confirm:string;

  // Define FormGroup to user's form
  constructor(
    public crudApi: UserService,  // CRUD API services
    private router: Router

  ) { }
  keys:string[] = new Array(100)  ;

  submitUserData(user) {
  
    this.message="";
    if((this.user.email==null)||(this.user.matricule==null)||(this.user.nom==null)||(this.user.password==null)||(this.user.prenom==null)||(this.user.telephone==null)){
      this.show=" * Tous les champs sont obligatoires";
      }
else if(this.confirmemail()=="exist"){
  this.message="email existant !";
 }
else if(this.user.password!==this.confirm){
      this.showw="La confirmation du mot de passe ne correspond pas"
    }
    else{
    this.user.grade="Abonné";
    this.crudApi.AjouterUser(this.user); // Submit user data using CRUD API
    this.router.navigate(['home']);
    this.user.email=null;
    this.user.nom=null;
    this.user.prenom=null;
    this.user.password=null;
    this.user.telephone=null;
    this.user.matricule=null;
    this.confirm=null;
    this.show=null;
    this.showww="Ajouté Avec Succes";

    }
  };
  confirmemail(){
    let exist="exist";
  let  eemail=this.user.email
    for (let us of this.Users)
    {
      if(this.user.email==us.email){
     return(exist)
     }}
  }
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
       //console.log(a);
       a['$key'] = item.key;
console.log(item.key);
this.keys[i]=item.key;
       this.Users.push(a as User);
     })
   })
   
  console.log("started");
    this.showww=null;
    this.showw=null;
    this.show=null;
    this.message=null;

    this.crudApi.GetUsersList();  // Call ModifierClientsList() before main form is being called
    this.user=new User();
  }

}





/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}*/
