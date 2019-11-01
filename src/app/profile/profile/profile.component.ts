import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {Observable} from 'rxjs'

import {AuthService} from '../../shared/services/auth.service'
import {ProfileService} from '../../shared/services/profile.service'
import {User} from '../../shared/interfaces'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  $currentUser: Observable<User>

  constructor(
    private auth: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.$currentUser = this.profileService.fetchCurrentUser()
  }

  avatarPath(id) {
    return `/assets/images/avatars/${id % 65}.png`
  }

  logout(e: Event) {
    e.preventDefault()
    this.auth.logout()
    this.router.navigate(['/auth/login'])
  }
}
