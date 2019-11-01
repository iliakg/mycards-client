import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {ProfileComponent} from './profile/profile.component'
import {ProfileCardsComponent} from './profile-cards/profile-cards.component'
import {SettingsComponent} from './settings/settings.component'

const profilesRoutes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'cards', component: ProfileCardsComponent},
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes),
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileCardsComponent,
    SettingsComponent
  ],
  exports: [
    RouterModule
  ]
})

export class ProfileModule {
}
