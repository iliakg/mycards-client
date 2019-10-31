import {Component, OnInit} from '@angular/core'

import {AuthService} from '../../shared/services/auth.service'

@Component({
  templateUrl: './application-layout.component.html'
})

export class ApplicationLayoutComponent implements OnInit {
  isAuthenticated = false

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated()
  }
}
