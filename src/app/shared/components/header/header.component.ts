import {Component, OnInit} from '@angular/core'

import {MaterialService} from '../../services/materialize.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  elLoginModal: any

  constructor() {
  }

  ngOnInit() {
    this.elLoginModal = document.getElementById('login_modal')
    MaterialService.initModals(this.elLoginModal)
    // this.openProfileModal()
  }

  openProfileModal() {
    MaterialService.openModal(this.elLoginModal)
  }
}
