import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'

import {MaterialService} from '../../services/materialize.service'
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  elLoginModal: any
  loginForm: FormGroup
  loginError = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.elLoginModal = document.getElementById('login_modal')
    MaterialService.initModals(this.elLoginModal)
    // this.openProfileModal()
  }

  openProfileModal() {
    MaterialService.openModal(this.elLoginModal)
  }

  onLoginSubmit() {
    this.loginForm.disable()

    this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.loginError = false
        this.router.navigate(['/'])
      },
      error => {
        this.loginError = true

        // MaterialService.toast(error, 'error')
        this.loginForm.enable()
      }
    )
  }
}
