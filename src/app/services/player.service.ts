import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from './../models/player.models';


const apiURL = "https://www.balldontlie.io/api/v1/players";


@Injectable()

export class PlayerService {

  constructor(private http:HttpClient) { }

  getAllPlayers():Observable<Player[]>{
    return this.http.get<Player[]>(apiURL);  
    }


}
