import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { User } from '../../../models/user/user.model'

import { AuthenticationService } from '../../../services/authentication.service'
import { UserService } from '../../../services/user.service'


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

	public user: User = new User

	constructor(
		public _auth: AuthenticationService,
		public router: Router,
		public _user: UserService
	) { }

	ngOnInit() {
		this._user.Get().then( user => {
			this.user = user
		})
	}

	logout(): void {
        this._auth.logout()

        this.router.navigate(["login"])
    }

}
