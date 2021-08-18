import { Component, OnInit, OnChanges,AfterContentInit, AfterViewInit, AfterContentChecked,AfterViewChecked,OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <hr>
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <hr>
    <app-clases></app-clases>
    <hr>
    <app-ng-switch></app-ng-switch>

<hr>
    <p [appResaltado]="'violet'">
        Hola mundo desde app.comonent
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, AfterContentInit,
 AfterViewInit, AfterContentChecked,AfterViewChecked,OnDestroy,DoCheck

{

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges():void{
    console.log("ngOnChanges");
  }

  ngAfterContentInit():void{
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit():void{
      console.log("ngAfterViewInit");
  }


  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy():void{
    console.log("ngOnDestroy");
  }

  ngDoCheck():void{
    console.log("ngDoCheck");
  }


}
