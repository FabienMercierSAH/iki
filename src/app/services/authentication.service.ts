import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { User } from '../models/user/user.model'

import { CONFIG } from '../app.constants'


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<User> {
        return this.http.post<any>(`${CONFIG.API[CONFIG.ENV]}/auth/login`, { username, password })
            .pipe(
                map(
                    user => {
                        // login successful if there's a jwt token in the response
                        if (user && user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify(user))
                        }

                        return user
                    }
                )
            )
    }

    logout(): void {
        localStorage.removeItem('currentUser')
    }

    isLogged(): any {
        return localStorage.getItem('currentUser')
    }

    resetPassword(email: string) {
         return this.http.post<any>(`${CONFIG.API[CONFIG.ENV]}/users/resetpassword`, { email })
            .pipe(
                map(
                    resp => {
                        return resp
                    }
                )
            )
    }

    resetValidity(id: number, token: string) {
         return this.http.get<any>(`${CONFIG.API[CONFIG.ENV]}/users/resetvalidation/${id}/${token}`)
            .pipe(
                map(
                    resp => {
                        return resp
                    }
                )
            )
    }

    changePassword(id: number, token: string, password: string) {
        console.log(id, token, password);
         return this.http.post<any>(`${CONFIG.API[CONFIG.ENV]}/users/changepassword`, { id, token, password })
            .pipe(
                map(
                    resp => {
                        return resp
                    }
                )
            )
    }
}