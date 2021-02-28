import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Store } from "../../store";

export interface Song {
  id: number;
  name: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {
  getPlaylist$ = this.http
    .get("/api/playlist")
    .pipe(tap(value => this.store.set("playlist", value)));

  constructor(private http: HttpClient, private store: Store) {}

  toggle(event: any) {
    this.http
      .put<Song>(`/api/playlist/${event.track.id}`, event.track)
      .subscribe((track: Song) => {
        const value = this.store.value.playlist;
        const playlist = value.map((song: Song) => {
          if (event.track.id === song.id) {
            return { ...song, ...event.track };
          }
          return song;
        });
        this.store.set("playlist", playlist);
      });
  }
}
