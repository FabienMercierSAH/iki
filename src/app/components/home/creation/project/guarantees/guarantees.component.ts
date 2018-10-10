import { Component, OnInit } from '@angular/core'
import { Router, ResolveStart } from '@angular/router'

import { CreationService } from '../../../../../services/creation.service'


@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css']
})
export class GuaranteesComponent implements OnInit {

	constructor(
		public _creation: CreationService,
	) { }

	ngOnInit() { }

  	GoToNextStep() {
		this._creation.EnabledMainStep("subscription")
	}

	Cancel() {
		this._creation.ResetMain("project")
	}
}
