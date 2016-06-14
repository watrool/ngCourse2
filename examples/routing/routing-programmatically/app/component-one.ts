import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'component-one',
  template: `Component One<br/>
  <button (click)="onClick()">Click Me</button>
  `
})
export default class ComponentOne { 
  constructor(private _router:Router) { 
     
  }
  onClick () {
    this._router.navigate(['/component-three','Called from _router.Navigate']);
  }
}