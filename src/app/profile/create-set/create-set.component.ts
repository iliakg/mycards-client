import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {User} from '../../shared/interfaces'
import {ProfileService} from '../../shared/services/profile.service'

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html'
})

export class CreateSetComponent implements OnInit {
  $currentUser: Observable<User>

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.$currentUser = this.profileService.fetchCurrentUser()
  }
}
