import { Component, Input } from '@angular/core';
import { SearchService } from '../api/api.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tv-show-episode-downloader',
  templateUrl: './tv-show-episode-downloader.component.html',
  styleUrls: ['./tv-show-episode-downloader.component.css']
})
export class TvShowEpisodeDownloaderComponent {
  private downloadLoading: boolean = false;
  private episodeInfos: Object[] = [];

  @Input() private tvShowName: string;
  @Input() private qualite: string;
  @Input() private langue: string;
  @Input() private saison: string;
  private episode: string;

  private errors: Object;
  private downloadedEpisodes: Object[] = [];

  constructor(private rssDownloader: SearchService) { }

  onDownload() {
    console.log("onDownload");
    //if (!this.downloadLoading) {
      console.log("downloadLoading true");
      this.downloadLoading = true;
      console.log(this.tvShowName, this.qualite, this.langue, this.saison, this.episode);
      this.doSearch(this.tvShowName, this.qualite, this.langue, this.saison, this.episode);
      /*console.log("waiting a litte bit");
      setTimeout(() => {
        console.log("downloadLoading false");
        this.downloadLoading = false;
      },
        15000);*/
    //} else {
    //  console.log("Telechargement en cours");
    //}
  }

  doSearch(tvShowName: string, qualite: string, langue: string, saison: string, episode: string) {
    this.errors = null;
    this.episodeInfos = [];
    this.downloadLoading = true;
    this.rssDownloader.downloadEpisode(this.tvShowName, this.qualite, this.langue, this.saison, this.episode).subscribe((data) => {
      this.episodeInfos = data;
    },
    error => {
      console.log("download error !")
      console.log(error);
      this.errors = error;
      this.downloadLoading = false;
    },
    () => {
      console.log("download OK !")
      this.downloadLoading = false;
      this.downloadedEpisodes.push(this.episodeInfos);
    } )
  }

}
