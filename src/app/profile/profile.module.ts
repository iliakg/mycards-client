import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {ProfileComponent} from './profile/profile.component'

const profilesRoutes: Routes = [
  {path: '', component: ProfileComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes),
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    RouterModule
  ]
})

export class ProfileModule {
}
