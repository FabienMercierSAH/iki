export class Login {
	username: string
	password: string

	constructor() {
		this.username = ""
		this.password = ""
	}
}

export class ResetPassword {
	emailForForgottenPassword: string

	constructor() {
		this.emailForForgottenPassword = ""
	}
}