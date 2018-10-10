import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { CreationService } from '../../../../services/creation.service'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

	constructor(
		public router: Router,
		public _creation: CreationService
	) { }

	ngOnInit() { }

	GoToNextStep() {
		this._creation.EnabledMainStep("upload")
	}
}
