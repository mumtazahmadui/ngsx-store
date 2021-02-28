import { Component, OnInit, OnDestroy } from "@angular/core";

import { Store } from "../../../store";
import { Observable, Subscription } from "rxjs";
import { SongsService } from "../../services/songs.service";

@Component({
  selector: "songs-playlist",
  templateUrl: "./songs-playlist.component.html"
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select("playlist");
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
