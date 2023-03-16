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
      console.log(positionH + ' ' + positionV )
      this.squares[positionH][positionV] !== 'b' ? this.squares[positionH][positionV] = 'b' : i--;
    }
  }

  boom(square: string, v: number, h:number){

    console.log(`square: ${square} V: ${v}, H: ${h}`)
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
          console.log(i + ' ' + j)
          if((i === v || i === v+1 || i === v-1) && (j === h || j === h+1 || j === h-1)){
            console.log('cerca')
            this.count ++
          } else {
            console.log('lejos')
          }
        }
      }
    }
    if(this.squares[v][h] !== 'b'){
      this.squares[v][h] = this.count;
      console.log('contador', this.count)
      // if(this.count === 0){
      //   this.openZero(v,h)
      // }
    } 
  }

  reset(){
    this.ngOnInit();
  }

  openZero(v: number, h:number){
    console.log('paso a 0')
    this.squares[v][h] = 0
    let isZero = true;
    // debugger
    while(isZero){
      isZero = false;
        if(this.squares[v+1][h] === 0){
          this.squares[v+1][h] = 0
          isZero = true
        }
        if(this.squares[v-1][h] === 0){
          this.squares[v-1][h] = 0
          isZero = true
        }
        if(this.squares[v][h+1] === 0){
          this.squares[v][h+1] = 0
          isZero = true
        }
        if(this.squares[v][h-1] === 0){
          this.squares[v][h-1] = 0
          isZero = true
        }
        if(this.squares[v+1][h+1] === 0){
          this.squares[v+1][h+1] = 0
          isZero = true
        }
        if(this.squares[v-1][h-1] === 0){
          this.squares[v-1][h-1] = 0
          isZero = true
        }
        if(this.squares[v+1][h-1] === 0){
          this.squares[v+1][h-1] = 0
          isZero = true
        }
        if(this.squares[v-1][h+1] === 0){
          this.squares[v-1][h+1] = 0
          isZero = true
        }
    }
  }
}


