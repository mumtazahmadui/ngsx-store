import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";

@Component({
  selector: "songs-listened",
  templateUrl: "./songs-listened.component.html"
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) { }

  ngOnInit() {
    this.listened$ = this.store.select("playlist").pipe(
      filter(Boolean),
      map((playlist: any) => playlist.filter(track => track.listened))
    );
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
