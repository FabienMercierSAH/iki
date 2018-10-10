import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { CreationService } from '../../../../services/creation.service'


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

	constructor(
		public router: Router,
		public _creation: CreationService
	) { }

	ngOnInit() { }

	GoToNextStep() {
		this._creation.EnabledMainStep("subscription")
	}

}
