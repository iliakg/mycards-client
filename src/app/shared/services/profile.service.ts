import {EventEmitter, Injectable, Output} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'
import {publishReplay, refCount, tap} from 'rxjs/operators'

import {User} from '../interfaces'
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  // userObs: Observable<any> = null

  @Output() changeUser: EventEmitter<any> = new EventEmitter()

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  // fetchCurrentUser() {
  //   if (!this.userObs) {
  //     this.userObs = this.http.get('/api/profile').pipe(
  //       publishReplay(1),
  //       refCount()
  //     )
  //   }
  //
  //   return this.userObs
  // }

  create(data: FormData): Observable<User> {
    return this.http.post<User>('/api/registration', data)
      .pipe(
        tap(
          (response) => {
            localStorage.setItem('authtoken', response.token)
            this.auth.setToken(response.token)
          }
        )
      )
  }

  // update(data: FormData): Observable<User> {
  //   return this.http.put<User>('/api/profile', data)
  // }

  // updatePassword(data: FormData): Observable<User> {
  //   return this.http.post<User>('/api/update_password', data)
  // }

  // forgotPassword(data: FormData): Observable<any> {
  //   return this.http.post<any>('/api/forgot_password', data)
  // }
}
