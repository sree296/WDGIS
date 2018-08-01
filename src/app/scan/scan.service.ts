import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { log } from 'util';

@Injectable()
export class ScanService {
    baseUri = "api/Home";

    httOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
        //withCredentials : true
    };

    constructor(private http: HttpClient) {}

    TriggerQualysScans(scanInfo) {
        console.log(scanInfo)
        this.http.post(this.baseUri, scanInfo, this.httOptions).subscribe(
            res => {console.log(res);}, err => {console.log("Error Occured");}
        );
    }
}