import { Component, OnInit } from '@angular/core';
import {Abonnement} from '../shared/abonnement';
import { AbonnementService } from '../shared/abonnement.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  show:string;
  x:number;
  a:number;
  codee:number;
today:Date;
time:string;
expire:string;
capacite:string;
hideWhenNoStudent: boolean = false; // Hide Parks data table when no Park.
noData: boolean = false;            // Showing No Park Message, when no Park in database.
preLoader: boolean = true;  
  // Define FormGroup to user's form
  abonnement:Abonnement;
  constructor(
    public crudApi:AbonnementService,  // CRUD API services
    private router: Router
  ) { }
  ngOnInit() {
    this.capacite=localStorage.getItem("reserve");
    console.log(this.capacite);
    this.show=null;

    this.crudApi.GetAbonnementsList();  // Call ModifierClientsList() before main form is being called
    this.abonnement=new Abonnement();

   this.a=1000000 + Math.round(Math.random()*(100000-999999));
    this.today = new Date();
    this.time = this.today.getFullYear() + "/"+this.today.getMonth() + "/"+this.today.getDay();
    let nextmonth=this.today.getMonth()+1;
    this.expire = this.today.getFullYear() + "/"+ nextmonth+ "/"+this.today.getDay() + "  "+ +this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    console.log(this.time);
    console.log(this.expire);
    this.abonnement.code=this.a;
    this.abonnement.etat="off";
    this.abonnement.mode="2019/06/21"
    this.abonnement.email=localStorage.getItem("email");
   // this.abonnement.mode=this.time;

  }  dataState() {
    this.crudApi.GetAbonnementsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        console.log(data.length);
        localStorage.setItem("reserve",data.length.toString());
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })

  }
  submitAbonnementData() {
    this.dataState();
    this.capacite=localStorage.getItem("reserve");
    if((this.abonnement.expiration==null)||(this.abonnement.mode==null)){
this.show=" * Tous les champs sont obligatoires"
this.capacite=localStorage.getItem("reserve");
    }else if(this.capacite=="8"){
      this.show="Parking Plein !";
      alert("Parking Plein !");
      this.capacite="8"
      this.capacite=localStorage.getItem("reserve");
    }
    else if((this.capacite!="8")&&(this.abonnement.expiration!=null)&&(this.abonnement.mode!=null)){
    this.crudApi.AjouterAbonnement(this.abonnement); // Submit user data using CRUD API
    this.router.navigate(['abonnement']);
    this.abonnement.code=null;
    this.abonnement.mode=null;
    this.abonnement.expiration=null;}
  };
 




}