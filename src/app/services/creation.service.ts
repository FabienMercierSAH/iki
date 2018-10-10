import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { MainTabs } from '../models/creation/maintabs.model'


@Injectable({
  providedIn: 'root'
})
export class CreationService {

	public main: MainTabs = null


 	constructor(
 		public router: Router
 	) { }


	New(): void {
		this.main = new MainTabs()
		this.main.init()
	} 	

	Clear(): void {
		this.main = null
	}

	Get(): MainTabs {
		if(!this.main){
			this.New()
			
			return this.main
		}
		else{
			return this.main			
		}
	}

	Set(main): void {
		if(!this.main) {
			this.New()

			this.main = main
		}
		else {
			this.main = main
		}
		
	}

	Reset(): void {
		this.New()
	}

	ResetMain(Main: string): void {
		if(Main === "project"){
			this.New()

			this.router.navigate(["project"])
		}
		else {
			this.main[Main] = new this.main[Main].constructor

			this.router.navigate(["project"])

		}
	}

	EnabledMainStep(Main: string): void {
		this.main[Main].isEnabled = true

		this.router.navigate(["creation/" + Main])
	}

	EnabledSubStep(Main: string, Sub: string): void {
		this.main[Main][Sub].isEnabled = true
	}

	CheckSubAllowed(sub: string): void {
		let isEnabled: boolean = this.main["project"][sub] ? this.main["project"][sub].isEnabled : false

		if(!isEnabled){
			this.ResetMain("project")
		}
	}

	
}
