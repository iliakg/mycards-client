import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {FavoriteListComponent} from './favorite-list/favorite-list.component'

const favoritesRoutes: Routes = [
  {path: '', component: FavoriteListComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(favoritesRoutes),
    SharedModule
  ],
  declarations: [
    FavoriteListComponent
  ],
  exports: [
    RouterModule
  ]
})

export class FavoritesModule {
}
