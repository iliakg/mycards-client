import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {AuthLayoutComponent} from './auth-layout/auth-layout.component'
import {RegistrationComponent} from './registration/registration.component'
import {LoginComponent} from './login/login.component'


const authRoutes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    SharedModule
  ],
  declarations: [
    AuthLayoutComponent,
    RegistrationComponent,
    LoginComponent
  ],
  exports: [
    RouterModule
  ]
})

export class AuthModule {
}
