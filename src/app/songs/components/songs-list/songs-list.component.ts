import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Song } from "../../services/songs.service";

@Component({
  selector: "songs-list",
  templateUrl: "./songs-list.component.html",
  styleUrls: ["./songs-list.component.scss"]
})
export class SongsListComponent {
  @Input()
  list: Song[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: { ...track, [prop]: !track[prop] }
    });
  }
}
