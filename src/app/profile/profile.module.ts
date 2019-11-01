import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {ProfileComponent} from './profile/profile.component'
import {FavoritesComponent} from './favorites/favorites.component'
import {ProfileCardsComponent} from './profile-cards/profile-cards.component'
import {SettingsComponent} from './settings/settings.component';
import { CreateSetComponent } from './create-set/create-set.component'

const profilesRoutes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'cards', component: ProfileCardsComponent},
  {path: 'create-set', component: CreateSetComponent},
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes),
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    FavoritesComponent,
    ProfileCardsComponent,
    SettingsComponent,
    CreateSetComponent
  ],
  exports: [
    RouterModule
  ]
})

export class ProfileModule {
}
