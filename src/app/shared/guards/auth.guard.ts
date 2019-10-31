import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router'
import {Observable, of} from 'rxjs'

import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkPermissions()
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkPermissions()
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkPermissions()
  }

  private checkPermissions() {
    if (this.auth.isAuthenticated()) {
      return of(true)
    } else {
      this.router.navigate(['/auth/login'])
      return of(false)
    }
  }
}
