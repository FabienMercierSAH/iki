import { Injectable } from '@angular/core'
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements HttpInterceptor {

  constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let testUser = { id: 1, email: 'test', username: 'test@test.com', password: 'test', firstName: 'Test', lastName: 'User', resetToken: '123abc456def' }

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/auth/login') && request.method === 'POST') {
                if (request.body.username === testUser.username && request.body.password === testUser.password) {
                    // if login details are valid return 200 OK with a fake jwt token
                    let body = {
                        id: testUser.id,
                        email: testUser.email,
                        username: testUser.username,
                        firstName: testUser.firstName,
                        lastName: testUser.lastName,
                        token: 'fake-jwt-token'
                    }
                    return of(new HttpResponse({ status: 200, body }))
                } else {
                    if (request.body.username !== testUser.username) {
                        return throwError({ error: { message: { type: "login", message: "L’e-mail renseigné ne correspond à aucun profil." } } })
                    } else {
                        return throwError({ error: { message: { type: "password", message: 'Le mot de passe renseigné incorrect.' } } })
                    }
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: [testUser] }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // send reset password email
            if (request.url.endsWith('/users/resetpassword') && request.method === 'POST') {
                if (request.body.emailForForgottenPassword === testUser.username) {
                    let body = {
                        state: true
                    }

                    return of(new HttpResponse({ status: 200, body }))
                } else {
                    if (request.body.emailForForgottenPassword !== testUser.username) {
                        return throwError({ error: { message: { type: "email", message: "L’e-mail renseigné ne correspond à aucun profil." } } })
                    }
                }
            }

             // check password changing token validity
            if (request.url.match(/\/users\/resetvalidation\/([0-9]+)\/([0-9]+)/) && request.method === 'GET') {
                
                let id = request.url.match(/\/users\/resetvalidation\/([0-9]+)\/([0-9]+)/)[1]
                let token = request.url.match(/\/users\/resetvalidation\/([0-9]+)\/([a-z0-9]+)/)[2]
                
                if (id.toString() === testUser.id.toString() && token.toString() === testUser.resetToken.toString()) {
                    let body = {
                        state: true
                    }
                    return of(new HttpResponse({ status: 200, body }))
                } else {
                    return throwError({ error: { message: { type: "invalid", message: "Le lien n'est plus valide, merci de renouveler votre demande en cliquant de nouveau sur mot de passe oublié." } } })
                }
            }

            // new password
            if (request.url.endsWith('/users/changepassword') && request.method === 'POST') {
                let reqId: string = request.body.id
                let reqToken: string = request.body.token
                if (reqId === testUser.id.toString() && reqToken === testUser.resetToken.toString() && testUser.resetToken.toString() !== "") {
                    let body = {
                        state: true
                    }

                    return of(new HttpResponse({ status: 200, body }))
                } else {
                    return throwError({ error: { message: { type: "err", message: "Opération non autorisée." } } })                    
                }
            }

            // pass through any requests not handled above
            return next.handle(request)
            
        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendService,
    multi: true
}

