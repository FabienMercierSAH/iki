import { Component, OnInit } from '@angular/core'
import { Router, ResolveStart } from '@angular/router'

import { MainTabs } from '../../../../../models/creation/maintabs.model'


import { CreationService } from '../../../../../services/creation.service'

@Component({
  selector: 'app-sub-timeline',
  templateUrl: './sub-timeline.component.html',
  styleUrls: ['./sub-timeline.component.css']
})
export class SubTimelineComponent implements OnInit {

	public currentSubStep: string

	constructor(
		public router: Router,
		public _creation: CreationService
	) { }

	ngOnInit() {
		let currentPath: string
			currentPath = this.router.url

	  	if(currentPath !== "") {
	  		this.currentSubStep = currentPath.slice(1, currentPath.length).split("/")[2]
	  	}

		this.router.events.subscribe(e => { 
		  if (e instanceof ResolveStart) {	
		  	currentPath = e.urlAfterRedirects

		  	if(currentPath !== "") {
		  		this.currentSubStep = currentPath.slice(1, currentPath.length).split("/")[2]
		  	}
		  }
		})
	}

	GoToSubStep(page: string){		
		let subStep: string = page.split("/")[3]

		if(this._creation.Get().project[subStep].isEnabled === true) {
			this.router.navigate([page])	
		}	
	}

}
