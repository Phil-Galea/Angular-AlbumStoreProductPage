import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operator/map';
import { Album } from './product-description/album';

@Injectable()
export class ProductService {

  private _http: Http;
  private _albumUrl: string = '../assets/album.json';

  constructor() { }

  getAlbum(id: number): Album {
    //return this._http.get(this._albumUrl).forEach();
    return this._http.get(this._albumUrl).subscribe(response => response.json);
  }

}
