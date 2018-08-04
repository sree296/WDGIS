import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  topUsers : any[];

  constructor() {
    this.topUsers = [
      {
        "name" : "Mark Mary",
        "scanCount" : 211
      },
      {
        "name" : "Mary John",
        "scanCount" : 201
      },
      {
        "name" : "John Mark",
        "scanCount" : 189
      },
      {
        "name" : "Chris Heli",
        "scanCount" : 164
      },
      {
        "name" : "David Siej",
        "scanCount" : 142
      }
    ]
   }

  ngOnInit() {
  }

}
