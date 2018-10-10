import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { CreationService } from '../../../../../services/creation.service'


@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.css']
})
export class PrerequisitesComponent implements OnInit {

	constructor(
		public _creation: CreationService,
		public router: Router
	) { }

	ngOnInit() {}

	GoToNextStep() {
		this._creation.EnabledSubStep("project", "loan")

		this.router.navigate(["creation/project/loan"])
	}

	Cancel() {
		this._creation.ResetMain("project")
	}
}
