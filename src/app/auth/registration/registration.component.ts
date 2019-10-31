import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'

import {ProfileService} from '../../shared/services/profile.service'
import {ResponseError} from '../../shared/interfaces'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
  formErrors: ResponseError[] = []
  form: FormGroup

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.form.disable()

    this.profileService.create(this.form.value).subscribe(
      () => {
        this.formErrors = []
        this.router.navigate(['/'])
      },
      errorResponse => {
        this.formErrors = errorResponse.error.errors
        this.form.enable()
      }
    )
  }
}
