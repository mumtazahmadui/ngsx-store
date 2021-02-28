import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";

@Component({
  selector: "songs-favorites",
  templateUrl: "./songs-favorites.component.html"
})
export class SongsFavoritesComponent implements OnInit {
  favorites$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) { }

  ngOnInit() {
    this.favorites$ = this.store.select("playlist").pipe(
      filter(Boolean),
      map((playlist: any) => playlist.filter(track => track.favourite))
    );
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
