import { Validators } from '@angular/forms'

export const FORMS = {
	
	"Auth" : {
		"Login" : {
			Controls : [
				{
					Name : "username",
					Type : "text",
					Label : "Mon adresse e-mail professionnelle",
					PlaceHolder : "",
					Default : "",
					Validators : [
						Validators.required,
						Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
					],
					Errors : {
						"required" : "L'email est requis",
						"pattern" : "L'email est invalide"
					}				
				},
				{
					Name : "password",
					Type : "password",
					Label : "Mot de passe",
					PlaceHolder : "",
					Default : "",
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le mot de passe est requis",
						"pattern" : "Le mot de passe est invalide"
					}				
				}
			]
		},
		"Password" : {
			"Reset" : {
				Controls : [
					{
						Name : "emailForForgottenPassword",
						Type : "text",
						Label : "Mon adresse e-mail professionnelle",
						PlaceHolder : "",
						Default : "",
						Validators : [
							Validators.required,
							Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
						],
						Errors : {
							"required" : "L'email est requis",
							"pattern" : "L'email est invalide"
						}				
					}
				]
			},
			"Changing" : {
				Controls : [
					{
						Name : "password1",
						Type : "password",
						Label : "Nouveau mot de passe",
						PlaceHolder : "",
						Default : "",
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le nouveau mot de passe est requis",
							"pattern" : "Le mot de passe est invalide"
						}				
					},
					{
						Name : "password2",
						Type : "password",
						Label : "Confirmation du mot de passe",
						PlaceHolder : "",
						Default : "",
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "La confirmation de mot de passe est requis",
							"pattern" : "Le mot de passe est invalide"
						}				
					}
				]
			}
		}
	}
	
}