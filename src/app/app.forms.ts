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
					Values : [],
					Validators : [
						Validators.required,
						Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
					],
					Errors : {
						"required" : "L'email est requis",
						"pattern" : "L'email est invalide"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "password",
					Type : "password",
					Label : "Mot de passe",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le mot de passe est requis",
						"pattern" : "Le mot de passe est invalide"
					},
					HasHelper : false,
					Helper : ""				
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
						Values : [],
						Validators : [
							Validators.required,
							Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
						],
						Errors : {
							"required" : "L'email est requis",
							"pattern" : "L'email est invalide"
						},
						HasHelper : false,
						Helper : ""				
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
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le nouveau mot de passe est requis",
							"pattern" : "Le mot de passe est invalide"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "password2",
						Type : "password",
						Label : "Confirmation du mot de passe",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "La confirmation de mot de passe est requis",
							"pattern" : "Le mot de passe est invalide"
						},
						HasHelper : false,
						Helper : ""				
					}
				]
			}
		}
	},

	"Project" : {
		"Type" : {
			Controls : [
				{
					Name : "type",
					Type : "card_select",
					Label : "Type de projet",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le type de projet est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "kind",
					Type : "card_select",
					Label : "Nature du projet",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "La nature du projet est requis"
					},
					HasHelper : true,
					Helper : "Helper text to display in popup"				
				}
			]
		},
		"LoanSpecifications" : {
			Controls : [
				{
					Name : "kind",
					Type : "select",
					Label : "Type de prêt",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le type de prêt est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "amount",
					Type : "text",
					Label : "Montant",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le montant est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "rate",
					Type : "text",
					Label : "Taux",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le taux est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "rate",
					Type : "check",
					Label : "",
					PlaceHolder : "",
					Default : "",
					Values : [
						{ Id: 0, Label: "Fixe" },
						{ Id: 1, Label: "Variable" }

					],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Le taux est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "duration",
					Type : "text",
					Label : "Durée",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "La durée est requise"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "delay",
					Type : "text",
					Label : "Differé",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "Differé est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "frequency",
					Type : "check",
					Label : "",
					PlaceHolder : "",
					Default : "",
					Values : [
						{ Id: 0, Label: "Mensuelle" },
						{ Id: 1, Label: "Trimestrielle" },
						{ Id: 1, Label: "Semestrielle" },
						{ Id: 1, Label: "Annuelle" }

					],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "La fréquence est requise"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "loanCompoany",
					Type : "select",
					Label : "Organisme prêteur",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "L'organisme est requis"
					},
					HasHelper : false,
					Helper : ""				
				},
				{
					Name : "managementCenterAddress",
					Type : "select",
					Label : "Adresse du centre de gestion",
					PlaceHolder : "",
					Default : "",
					Values : [],
					Validators : [
						Validators.required
					],
					Errors : {
						"required" : "L'adresse du centre de gestion est requise"
					},
					HasHelper : false,
					Helper : ""				
				}
			]
		},
		"Borrowers" : {
			"PersonnalInformations" : {
				Controls : [
					{
						Name : "gender",
						Type : "radio",
						Label : "",
						PlaceHolder : "",
						Default : "",
						Values : [
							{ Id : 0, Label : "Monsieur" },
							{ Id : 1, Label : "Madame" }
						],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "La civilité est requise"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "lastName",
						Type : "text",
						Label : "Nom",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le nom est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "firstName",
						Type : "text",
						Label : "Prénom",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le prénom est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "birthday",
						Type : "date",
						Label : "Date de naissance",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "La date de naissance est requise"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "tel",
						Type : "text",
						Label : "Téléphone",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le téléphone est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "mail",
						Type : "text",
						Label : "Mail",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le mail est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "address1",
						Type : "text",
						Label : "Adresse",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "L'adresse est requise"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "address2",
						Type : "text",
						Label : "Complément d'adresse",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le complément d'adresse est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "postcode",
						Type : "text",
						Label : "Code postal",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le code postal est requis"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "city",
						Type : "text",
						Label : "Ville",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "La ville est requise"
						},
						HasHelper : false,
						Helper : ""				
					},
					{
						Name : "country",
						Type : "text",
						Label : "Pays",
						PlaceHolder : "",
						Default : "",
						Values : [],
						Validators : [
							Validators.required
						],
						Errors : {
							"required" : "Le pays est requis"
						},
						HasHelper : false,
						Helper : ""				
					}
				]
			},
			"ProfessionalInformations" : {},
			"OtherInformations" : {}
		},		
		"Garantees" : {},
		"Commissions" : {},
		"SubriberSelection" : {},
		"BankDetails" : {},
		"BankingInformations" : {}
	}
	
}