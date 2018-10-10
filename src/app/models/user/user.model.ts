export class User {
	id: number
	email: string
	firstName: string
	lastName: string
	avatar: string
	token: string

	constructor() {
		this.id = null
		this.email = ""
		this.firstName = ""
		this.lastName = ""
		this.avatar = ""
		this.token = ""
	}
}