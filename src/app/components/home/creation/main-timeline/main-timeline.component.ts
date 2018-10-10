import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ResolveStart } from '@angular/router'

import { MainTabs } from '../../../../models/creation/maintabs.model'

import { CreationService } from '../../../../services/creation.service'

@Component({
  selector: 'app-main-timeline',
  templateUrl: './main-timeline.component.html',
  styleUrls: ['./main-timeline.component.css']
})
export class MainTimelineComponent implements OnInit {

	public currentMainStep: string 
	public currentSubStep: string 
	public main: MainTabs	

	constructor(
		private router: Router,
        private route: ActivatedRoute,
        public _creation: CreationService
	) { }

	ngOnInit() {
		this.main = this._creation.Get()

		let currentPath: string
			currentPath = this.router.url

	  	if(currentPath !== "") {
	  		this.currentMainStep = currentPath.slice(1, currentPath.length).split("/")[1]
	  		this.currentSubStep = currentPath.slice(1, currentPath.length).split("/")[2]
	  	}

	  	this._creation.CheckSubAllowed(this.currentSubStep)

		this.router.events.subscribe(e => { 
		  if (e instanceof ResolveStart) {	
		  	currentPath = e.urlAfterRedirects

		  	if(currentPath !== "") {
		  		this.currentMainStep = currentPath.slice(1, currentPath.length).split("/")[1]
		  	}

		  }
		})
	}

	GoToMainStep(page: string){		
		let mainStep: string = page.split("/")[2]

		if(this.currentMainStep !== mainStep){
			if(this._creation.Get()[mainStep].isEnabled === true) {
				this.router.navigate([page])	
			}			
		}
	}
}

