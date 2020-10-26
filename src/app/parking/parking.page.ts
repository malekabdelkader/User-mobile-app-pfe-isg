import { Component, OnInit } from '@angular/core';
import { Abonnement } from '../shared/abonnement'; // Parking interface class for Data types.
import { AbonnementService } from '../shared/abonnement.service'; // CRUD API service class
@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {
capacite:string;
totale:string;
Abonnement: Abonnement[];
hideWhenNoStudent: boolean = false; // Hide Parks data table when no Park.
noData: boolean = false;            // Showing No Park Message, when no Park in database.
preLoader: boolean = true;                   // Save Parks data in Park's array.

  constructor(    public crudApi: AbonnementService, // Inject Park CRUD services in constructor.
    ) { }

  ngOnInit() {    this.dataState(); // Initialize Park's list, when component is ready
  let s = this.crudApi.GetAbonnementsList();
  console.log(s);
  s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
    this.Abonnement = [];
    data.forEach(item => {
      let a = item.payload.toJSON();
      //console.log(a);
      a['$key'] = item.key;
     
      this.Abonnement.push(a as Abonnement);
    })
  })
    this.totale="8";
    this.capacite=localStorage.getItem("reserve");
  }
  dataState() {
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
}
