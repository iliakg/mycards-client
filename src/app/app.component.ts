import {Component, OnInit} from '@angular/core'

import {AuthService} from './shared/services/auth.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit {
  constructor(private userAuth: AuthService) {
  }

  ngOnInit() {
    const userToken = localStorage.getItem('authtoken')
    if (userToken !== null) {
      this.userAuth.setToken(userToken)
    }
  }
}
