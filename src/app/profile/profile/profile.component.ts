import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {AuthService} from '../../shared/services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  logout(e: Event) {
    e.preventDefault()
    this.auth.logout()
    this.router.navigate(['/auth/login'])
  }
}
