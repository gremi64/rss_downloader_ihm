import { Component, Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

@Injectable() 
export class SearchService {
  apiRoot:string = 'http://192.168.1.2:8082/v1/'; //getTvShow
  results:Object[];
  loading:boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string):Observable<Object[]> {
    console.log("getTvShow in progress");
    let apiURL = this.apiRoot+'getTvShow';
    console.log("apiURL="+apiURL);
    console.log(this.http);
    return this.http.get(apiURL)
      .map(
        res => { // Success
          console.log(res.json());
          return res.json();
        }
      );
  }
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class TestComponent {
  private loading: boolean = false;
  private tvShowList: Object[];
  private searchField: FormControl;

  constructor(private rssDownloader: SearchService) {
    this.doSearch("");
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(800)
        .distinctUntilChanged()
        .do( term => {
          console.log("value has changed into : " + term)
        })
        .subscribe();
        
  }

  doSearch(term:string) {
    this.loading = true;
    //console.log("Recherche de '" + term + "'");
    this.rssDownloader.search(term).subscribe( (data) => {
      this.loading = false;
      this.tvShowList = data;
    })
    
  }

}
