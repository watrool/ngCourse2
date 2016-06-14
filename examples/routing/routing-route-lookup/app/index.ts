import {bootstrap} from '@angular/platform-browser-dynamic'
import {RouteConfig, provideRouter} from '@angular/router'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {provide} from '@angular/core'
import {SimpleRouting} from './app.component'
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentThree from './component-three';
const routes:RouteConfig = [
  {
    path: '/component-one',useAsDefault: true, component: ComponentOne, index: true,
    children: [
      { path: '/',  component: ComponentTwo, useAsDefault: true, index: true },
      { path: '/my-path/:message',  component: ComponentThree, useAsDefault: false }
    ]
},
  {path: '/component-two', useAsDefault: false, component: ComponentTwo},
  {path: '/component-three/:message', useAsDefault: false, component: ComponentThree}
  ]
bootstrap(SimpleRouting, [provideRouter(routes), provide(LocationStrategy, {useClass: HashLocationStrategy})]);