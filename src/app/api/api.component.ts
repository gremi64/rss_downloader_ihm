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
  apiRoot:string = 'http://192.168.1.2:8082/v1/';
  results:Object[];
  loading:boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  getTvShow():Observable<Object[]> {
    console.log("getTvShow in progress");
    let apiURL = this.apiRoot+'getTvShow';
    console.log("apiURL="+apiURL);
    return this.http.get(apiURL)
      .map(
        res => { // Success
          console.log(res.json());
          return res.json();
        }
      );
  }

  downloadEpisode(tvShowName:string, qualite:string, langue:string, saison:string, episode:string):Observable<Object[]> {
    //http://localhost:8082/v1/downloadTvShow?tvShowName=test&qualite=HD720P&langue=VOSTFR&saison=3&episode=episode
    console.log("downloading of " + tvShowName + "/" + qualite + "/" + langue + "/s" + saison + "/e" + episode + " in progress");
    let apiURL = this.apiRoot + 'downloadTvShow?tvShowName='+ tvShowName +'&qualite=' + qualite + '&langue=' + langue + '&saison=' + saison + '&episode=' + episode;
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

  constructor(private rssDownloader: SearchService) {
    this.doSearch();
  }

  ngOnInit() { }

  doSearch() {
    this.loading = true;
    this.rssDownloader.getTvShow().subscribe( (data) => {
      this.loading = false;
      this.tvShowList = data;
    })
    
  }

}
