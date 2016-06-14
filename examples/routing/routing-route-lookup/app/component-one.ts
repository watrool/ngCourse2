import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentThree from './component-three';


@Component({
  directives: [ROUTER_DIRECTIVES]
  selector: 'component-one',
  template: `Component One
  <br/>
  
  <ul>
	  <li><a [routerLink]="['/component-two']">/component-two</a></li>
	  <li><a [routerLink]="['../component-one']">../component-one</a></li>
	  <li><a [routerLink]="['/component-three','Routed from Component One to Parent']">/component-three</a></li>
	  <li><a [routerLink]="['./my-path','Child Route']">./my-path</a></li>
	</ul>
  <div style="border: 1px solid red">
    <router-outlet></router-outlet>
  </div>
  `
})

export default class ComponentOne { 
  console.log(window.location)
}

