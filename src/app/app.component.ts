import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buscaminas-ey';
  squares = new Array(10);
  isBomb: boolean = false;
  press: boolean = false;
  count!: number;
  display: boolean = false;
  happy: boolean = true;

  ngOnInit(): void {
    this.display = false;
    this.isBomb = false;
    this.happy = true;
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i] = new Array(10);
    }
    this.randomMine();

  }

  randomMine(){
    let positionH: number;
    let positionV: number;

    for (let i = 0; i < this.squares.length; i++) {
      positionH = Math.floor(Math.random() * 10) ;
      positionV = Math.floor(Math.random() * 10) ;
      this.squares[positionH][positionV] !== 'b' ? this.squares[positionH][positionV] = 'b' : i--;
    }
  }

  boom(square: string, v: number, h:number){

    this.display = true;
    if(square === 'b'){
      this.isBomb = true;
      this.happy = false;
    }

    this.numbersBomb(v, h);

  }

  numbersBomb(v: number, h:number){
    this.count = 0;

    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        if(this.squares[i][j] === 'b'){
          if((i === v || i === v+1 || i === v-1) && (j === h || j === h+1 || j === h-1)){
            this.count++
          }
        }
      }
    }

    if(this.squares[v][h] !== 'b'){
      if(this.count === 0){
        this.openZero(v, h);
      } else {
        this.squares[v][h] = this.count;
      }
    }
  }

  reset(){
    this.ngOnInit();
  }

  openZero(v: number, h:number){
    this.squares[v][h] = 0;

    for(let i = -1; i <= 1; i++){
      for(let j = -1; j <= 1; j++){
        const row = v + i;
        const col = h + j;

        if(row >= 0 && col >= 0 && row < this.squares.length && col < this.squares[row].length){
          if(this.squares[row][col] !== 'b' && this.squares[row][col] !== 0){
            this.numbersBomb(row, col);
          }
        }
      }
    }
  }
}


