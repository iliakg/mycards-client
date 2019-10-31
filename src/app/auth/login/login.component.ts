import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {AuthService} from '../../shared/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  form: FormGroup
  loginError = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.form.disable()

    this.auth.login(this.form.value).subscribe(
      () => {
        this.loginError = false
        this.router.navigate(['/'])
      },
      error => {
        this.loginError = true

        // MaterialService.toast(error, 'error')
        this.form.enable()
      }
    )
  }
}
