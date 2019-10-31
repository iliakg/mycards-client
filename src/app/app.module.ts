import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {ApplicationLayoutComponent} from './layouts/application-layout/application-layout.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {SharedModule} from './shared/shared.module'
import {AuthGuard} from './shared/guards/auth.guard'

const appRoutes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: '', component: ApplicationLayoutComponent, children: [
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {path: 'not-found', component: NotFoundComponent}
    ]
  },
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ApplicationLayoutComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
