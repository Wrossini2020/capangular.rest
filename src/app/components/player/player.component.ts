import { Component, OnInit } from '@angular/core';
import { Player } from './../../models/player.models';
import { PlayerService } from './../../services/player.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  n: number = 0;
  player: Player[] = [];

  constructor(private service:PlayerService) { }
  
  ngOnInit(): void {
    /*this.service.getAllPlayers()
      .subscribe((response:any)=>{
        this.player = response;
        console.log(this.player);
      });*/

      this.service.getAllPlayers()
        .subscribe((response:any)=>{
          this.player = response.data;
          console.log(this.player);
        });
  }


  


  color(valor)
  {
      if (valor) {
          return "selecionado";
      }
      return "";
  }

}
