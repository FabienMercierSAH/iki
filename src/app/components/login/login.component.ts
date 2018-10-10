import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs/operators'

import { AuthenticationService } from '../../services/authentication.service'
import { UserService } from '../../services/user.service'
import { UtilitiesService } from '../../services/utilities.service'

import { Login, ResetPassword } from '../../models/auth/auth.model'

import { FORMS } from '../../app.forms'


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup = new FormGroup({})
    loading: boolean
    submitted: boolean
    returnUrl: string
    
    forgottenForm: FormGroup = new FormGroup({})
    loadingForgottenForm: boolean 
    submittedForgottenForm: boolean 
    forgetForm: boolean
    mailSent: boolean = false

    error: any = {type: '', message: ''}

    formlogin: any
    formforget: any
    user: Login = new Login
    forgetPass: ResetPassword = new ResetPassword

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private _user: UserService,
        private _utilities: UtilitiesService
    ) {
        if(this.authenticationService.isLogged() !== null && this.authenticationService.isLogged() !== undefined) {
            this.router.navigate(["/"])                            
        }

    }

    ngOnInit() {
        this.forgetForm = false
        this.loading = false
        this.submitted = false
        this.loadingForgottenForm = false
        this.submittedForgottenForm = false

        this.formlogin = FORMS.Auth.Login 
        this.formforget = FORMS.Auth.Password.Reset 

        this.loginForm = this.formBuilder.group({})
        this.formlogin.Controls
            .forEach( 
                item => {

                    this.loginForm.addControl(item.Name, this.formBuilder.control([]))

                    let valids: Array<any> = []
                    item.Validators
                        .forEach(
                            v => {
                                valids.push(v)
                            }
                        )
                    this.loginForm.controls[item.Name].setValidators(Validators.compose(valids))

                    this.loginForm.controls[item.Name].setValue(item.Default)

                }
            )

        this.forgottenForm = this.formBuilder.group({})
        this.formforget.Controls
            .forEach( 
                item => {

                    this.forgottenForm.addControl(item.Name, this.formBuilder.control([]))

                    let valids: Array<any> = []
                    item.Validators
                        .forEach(
                            v => {
                                valids.push(v)
                            }
                        )
                    this.forgottenForm.controls[item.Name].setValidators(Validators.compose(valids))

                    this.forgottenForm.controls[item.Name].setValue(item.Default)

                }
            )

        this.authenticationService.logout()

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'

    }

    //#######################    
    //##       Login       ##
    //#######################

    get f() { return this.loginForm.controls }

    onSubmit() {
        this.submitted = true
        this.error = {type: '', message: ''}

        if (this.loginForm.invalid) {
            return
        }

        if (this.loading === true) {
            return
        }

        this.loading = true

        Object.keys(this.loginForm.controls).forEach(key => {
            this.user[key] = this.loginForm.get(key).value
        })

        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                    this._user.Set(data)

                    this.router.navigate([this.returnUrl])
                },
                error => {
                    this.error = error
                    this.loading = false
                    this.submitted = false

                    if(this.error !== null && this.error !== undefined && this.error.type == 'login'){
                        this.loginForm.get('username').patchValue('')
                        this.loginForm.get('password').patchValue('')
                    }

                    if(this.error !== null && this.error !== undefined && this.error.type == 'login'){
                        this.loginForm.get('password').patchValue('')
                    }
                })
    }



    //#######################    
    //## Forgotten passord ##
    //#######################

    get ff() { return this.forgottenForm.controls }

    OpenPasswordFogotten() {
        this.forgetForm = true
        this.loginForm.get('password').patchValue('')
        this.forgottenForm.get('emailForForgottenPassword').patchValue('')
        this.error = {type: '', message: ''}
        this.mailSent = false
    }

    CancelForgottenPassword() {
        this.forgetForm = false
    }

    backToLogin() {
        this.forgetForm = false
    }

    onSubmitforgottenForm() {
        this.submittedForgottenForm = true
        this.error = {type: '', message: ''}

        if (this.forgottenForm.invalid) {
            return
        }

        if (this.loadingForgottenForm === true) {
            return
        }

        Object.keys(this.forgottenForm.controls).forEach(key => {
            this.forgetPass[key] = this.forgottenForm.get(key).value
        })

        this.loadingForgottenForm = true
        this.authenticationService.resetPassword(this.forgetPass.emailForForgottenPassword)
            .pipe(first())
            .subscribe(
                data => {
                    if(data && data.state === true) {
                        this.loadingForgottenForm = false
                        this.submittedForgottenForm = false
                        this.mailSent = true
                    }
                },
                error => {
                    this.error = error
                    this.loadingForgottenForm = false
                    this.submittedForgottenForm = false
                    
                })
    }
}