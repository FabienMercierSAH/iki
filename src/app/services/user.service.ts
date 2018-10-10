import { Injectable } from '@angular/core'

import { User } from '../models/user/user.model'


@Injectable({ providedIn: 'root' })
export class UserService {

	public user: User

    constructor() { }

    Set(user: User): void {
        this.user = user
    }

    Get(): Promise<User> {

    	return new Promise(
    		(resolve) => {
    			if(this.user === undefined){
    		let tempUser: string = localStorage.getItem("currentUser")
    		
    		if(tempUser !== undefined && tempUser !== null){
    			this.user = JSON.parse(tempUser)
    			resolve(this.user)
    		}
    		else{
    			resolve(this.user)
    		}
    	}
    	else {
    		resolve(this.user)
    	}
    		}
    	)
    	
    }
}