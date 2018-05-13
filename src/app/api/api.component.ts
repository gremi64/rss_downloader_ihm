import { Component, Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable() 
export class SearchService {
  apiRoot:string = 'http://192.168.1.2:8082/v1/'; //getTvShow
  results:Object[];
  loading:boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    console.log("getTvShow in progress");
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiRoot+'getTvShow';
      console.log("apiURL="+apiURL);
      console.log(this.http);
      this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
          console.log(res.json());
          this.results = res.json();
          resolve();
        },
        msg => { // Error
          reject(msg);
        }
      )
    });
    return promise;
  }
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class TestComponent {
  private loading: boolean = false;

  constructor(private rssDownloader: SearchService) {
  }

  doSearch(term:string) {
    this.loading = true;
    //console.log("Recherche de '" + term + "'");
    this.rssDownloader.search(term).then( () => this.loading = false);
  }

}
