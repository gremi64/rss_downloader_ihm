import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowEpisodeDownloaderComponent } from './tv-show-episode-downloader.component';

describe('TvShowEpisodeDownloaderComponent', () => {
  let component: TvShowEpisodeDownloaderComponent;
  let fixture: ComponentFixture<TvShowEpisodeDownloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowEpisodeDownloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowEpisodeDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
