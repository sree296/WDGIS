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
  environments : string[];
  formSubmittedFlag = false;
  scanInfo = {};
  ipAddress = "" ;
  uploadedFile = "";
  

  scanEnv = "XBOX"; //selecting default value as  XBOX

  constructor(private api: ScanService) {
    this.environments = ["XBOX", "HVA", "CORE", "UST"]
  }
  
  TriggerScan(scanInfo) {    
    this.api.TriggerQualysScans(scanInfo)
  }

  ngOnInit() {
  }

  submitScan(scanForm: NgForm) : void{
    this.formSubmittedFlag  = true;
  } 
}
