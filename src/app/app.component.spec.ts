import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let service: AppComponent;

  beforeEach(async () => {

    let service = new AppComponent();
    
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'buscaminas-ey'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('buscaminas-ey');
  });

  it('should calculate the correct number of bombs', () => {
    const app = new AppComponent();
    app.squares = [
      ['b', 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    app.numbersBomb(0, 0);
    expect(app.squares[0][0]).toBe('b');

    app.numbersBomb(1, 1);
    expect(app.squares[1][1]).toBe(1);

    app.numbersBomb(2, 2);
    expect(app.squares[2][2]).toBe(0);
  });

});
