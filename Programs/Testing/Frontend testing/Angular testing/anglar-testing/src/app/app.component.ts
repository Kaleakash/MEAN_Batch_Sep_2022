import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglar-testing';
  id:number =100;
  name:string ="Ravi Kumar";
  result:boolean = true;
  num:Array<number>=[10,20,30,40,50,60];

  sayHello(name:string):string {
    return "Welcome to Angular Testing "+name;
  }

  
}
