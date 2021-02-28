import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { SongsDbService } from "./services/songs-db.service";
import { SongsFavoritesComponent } from "./components/songs-favorites/songs-favorites.component";
import { SongsListenedComponent } from "./components/songs-listened/songs-listened.component";
import { SongsPlaylistComponent } from "./components/songs-playlist/songs-playlist.component";
import { SongsService } from "./services/songs.service";
import { SongsListComponent } from "./components/songs-list/songs-list.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(SongsDbService)
  ],
  declarations: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsListComponent
  ],
  providers: [SongsService],
  exports: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ]
})
export class SongsModule {}
