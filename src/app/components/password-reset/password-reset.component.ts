import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { combineLatest } from 'rxjs'
import { first } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

	public isTokenValid: boolean
	public loading: boolean
	public success: boolean
	public userId: number
	public token: string
	error: any = {type: '', message: ''}
	forgetForm: FormGroup
	submitted: boolean


	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		public router: Router,
		public _auth: AuthenticationService
	) { }

	ngOnInit() {
		this.loading = true
		this.isTokenValid = false
		this.success = false

		this.forgetForm = this.formBuilder.group({
            password1: ['', Validators.required],
            password2: ['', Validators.required]
        })

		const urlParams = combineLatest(
	      this.activatedRoute.params,
	      this.activatedRoute.queryParams,
	      (params, queryParams) => ({ ...params, ...queryParams})
	    )

	    // Subscribe to the single observable, giving us both
	    urlParams.subscribe(routeParams => {

	    	this.userId = routeParams.id
	    	this.token = routeParams.token
        	this._auth.resetValidity(this.userId, this.token)
        		.pipe(first())
	            .subscribe(
	                data => {
	                    console.log(data)

	                    if(data && data.state === true){
	                    	this.isTokenValid = true
	                    	this.loading = false
	                    }
	                },
	                error => {
	                	this.loading = false
	                    console.log(error)        
	                    this.error = error            
	                })

        	
        	
	    })
	}

	get f() { return this.forgetForm.controls; }

    onSubmit() {
        this.submitted = true
        this.error = {type: '', message: ''}

        if (this.forgetForm.invalid) {
        	console.log("invalid");
            return
        }

        if (this.loading === true) {
        	console.log("loading true");
            return
        }

        if(this.f.password1.value !== this.f.password2.value){
        	this.error = { type: '', message: 'Les mots de passe ne sont pas identiques' }
        	console.log("pas identique");
        	return
        }

        this.loading = true
        this._auth.changePassword(this.userId, this.token, this.f.password1.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(data && data.state === true){
                    	this.success = true
                    	
                    }
                    else{
                    	this.error = { type: '', message: 'Problème durant le changement de mot de passe. Veuillez réessayer' }
                    }
                },
                error => {
                    this.error = error
                    this.loading = false
                    this.submitted = false
                }
            )
    }

    backToLogin() {
    	this.router.navigate(["/login"])
    }
}
