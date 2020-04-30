import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [HttpClient]
})
export class GameComponent implements OnInit {

  public house: string;

  constructor(private sortService: SortService) { }

  ngOnInit() {
  }

  public sort(): void {
    this.sortService.sortHouse().subscribe(res => this.house = res);
  }

  public reset(): void {
    this.house = null;
  }

}
