export interface Album {
    id: number;
    artist: string;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: [
        trackNumber: number,
        trackName: string,
        trackLength: string,
        trackPrice: number
    ];
}
