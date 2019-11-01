import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {User} from '../../shared/interfaces'
import {ProfileService} from '../../shared/services/profile.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit {
  $currentUser: Observable<User>

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.$currentUser = this.profileService.fetchCurrentUser()
  }
}
