import { Component, OnInit } from '@angular/core'
import { Router, ResolveStart } from '@angular/router'

import { CreationService } from '../../../../../services/creation.service'


@Component({
  selector: 'app-insured',
  templateUrl: './insured.component.html',
  styleUrls: ['./insured.component.css']
})
export class InsuredComponent implements OnInit {

	constructor(
		public _creation: CreationService,
		public router: Router
	) { }

	ngOnInit() { }

	GoToNextStep() {
		this._creation.EnabledSubStep("project", "guarantees")

		this.router.navigate(["creation/project/guarantees"])
	}

	Cancel() {
		this._creation.ResetMain("project")		
	}
}
