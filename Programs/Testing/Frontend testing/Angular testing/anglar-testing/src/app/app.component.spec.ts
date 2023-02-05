import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

describe('AppComponent', () => {
  let app:any;
  let child:any;
  
  // life cycle function which get called 
  // before each it 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,ChildComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    const fixture1 = TestBed.createComponent(ChildComponent);
    child = fixture1.componentInstance;
  });
  
  // component reference created..
  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    // app is a reference of component 
    expect(app).toBeTruthy();   // reference created or not
    expect(true).toBeTruthy(); 
  });

  // checking title variable value 
  it(`should have as title 'anglar-testing'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    expect(app.title).toEqual('anglar-testing');
  });

  // checking span tag value. 
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // dom or html code ready
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('anglar-testing app is running!');
  });

 // testing for angular property and functions  
 it(`Angular property and function testing`, () => {
  // const fixture = TestBed.createComponent(AppComponent);
  // const app = fixture.componentInstance;
  expect(app.id).toEqual(100);
  expect(app.name).toEqual("Ravi Kumar");
  expect(app.result).toBeTruthy();
  expect(app.num.length).toEqual(6);
  expect(app.num[0]).toEqual(10);
  let result = app.sayHello("Ravi");
  expect(result).toContain("Ravi");
 
});


it(`Child component testing from app component`, () => {
  // const fixture = TestBed.createComponent(AppComponent);
  // const app = fixture.componentInstance;
  expect(child.msg).toEqual("child component");
  
 
});
});
