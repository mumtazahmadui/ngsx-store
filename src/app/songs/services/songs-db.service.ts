import { InMemoryDbService } from "angular-in-memory-web-api";

export class SongsDbService implements InMemoryDbService {
  createDb() {
    const playlist = [
      {
        id: 1,
        artist: "Oasis",
        track: "Half The World Away",
        listened: false,
        favourite: true
      },
      {
        id: 2,
        artist: "Pink Floyd",
        track: "Wish You Were Here",
        listened: true,
        favourite: false
      },
      {
        id: 3,
        artist: "Blink-182",
        track: "All The Small Things",
        listened: false,
        favourite: true
      },
      {
        id: 4,
        artist: "Third Eye Blind",
        track: "Get Me Out Of Here",
        listened: true,
        favourite: false
      },
      {
        id: 5,
        artist: "The Chainsmokers",
        track: "Closer",
        listened: false,
        favourite: false
      },
      {
        id: 6,
        artist: "Sia",
        track: "Cheap Thrills",
        listened: true,
        favourite: true
      },
      {
        id: 7,
        artist: "Birdy",
        track: "Wild Horses",
        listened: false,
        favourite: true
      },
      {
        id: 8,
        artist: "Stereophonics",
        track: "Local Boy In The Photograph",
        listened: false,
        favourite: false
      }
    ];
    return { playlist };
  }
}
