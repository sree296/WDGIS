import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  position: number;
  date: string;
  IPAddress : string;
  scanId : string;
  resultURL: string;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, date: "07/20/2018", IPAddress: "127.0.0.1, 121.1.1.1", scanId: "12723", resultURL: 'https://ondemandscanning/scan/12723' },
  { position: 2, date: "08/20/2018", IPAddress: "127.0.0.20, 121.1.1.2", scanId: "12725", resultURL: 'https://ondemandscanning/scan/12725' },
];


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  displayedColumns: string[] = ['position', 'date', 'IPAddress', 'scanId', 'resultURL'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}