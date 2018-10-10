import { Component, OnInit } from '@angular/core'
import { Router, ResolveStart } from '@angular/router'

import { CreationService } from '../../../../../services/creation.service'


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

	constructor(
		public _creation: CreationService,
		public router: Router
	) { }

	ngOnInit() { }

	GoToNextStep() {
		this._creation.EnabledSubStep("project", "insured")

		this.router.navigate(["creation/project/insured"])
	}

	Cancel() {
		this._creation.ResetMain("project")
	}
}
