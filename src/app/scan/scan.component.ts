import { Component, OnInit } from '@angular/core';
import { ScanService } from './scan.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ScanInfo } from './scan.info';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {  
  environments : string[]
  scanInfo = {}

  constructor(private api: ScanService) {
    this.environments = ["XBOX", "HVA", "CORE", "UST"]
  }
  
  TriggerScan(scanInfo) {    
    this.api.TriggerQualysScans(scanInfo)
  }

  ngOnInit() {
  }

  submitScan(scanForm: NgForm) : void{
    console.log(scanForm.value);
  } 
}
