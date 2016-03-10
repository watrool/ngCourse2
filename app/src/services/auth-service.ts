import {provide} from 'angular2/core';

export default class AuthService {

}

export const AUTH_PROVIDERS: Array<any> = [
  provide(AuthService, {useClass: AuthService})
];
