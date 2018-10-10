import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ResolveStart } from '@angular/router'

import { CreationService } from '../../../services/creation.service'


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

	public currentView: string

	constructor(
		private router: Router,
        private route: ActivatedRoute,
        public _creation: CreationService
	) { }

	ngOnInit() {
		this.router.events.subscribe(e => { 
		  if (e instanceof ResolveStart) {	
		  	let currentPath: string = e.urlAfterRedirects

		  	if(currentPath !== "") {
		  		this.currentView = currentPath.slice(1, currentPath.length).split("/")[0]
		  	}
		  }
		})
	}

	GoToView(view) {
		if(this.currentView !== view){
			this.currentView = view

			if(view === "creation") {
				this._creation.New()
			}

			this.router.navigate([view])			
		}
	}

}
