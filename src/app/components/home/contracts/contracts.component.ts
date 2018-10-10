import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MainTabs } from '../../../models/creation/maintabs.model'

import { CreationService } from '../../../services/creation.service'


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})

export class ContractsComponent implements OnInit {

	constructor(
		public router: Router,
		public _creation: CreationService
	) { }

	ngOnInit() { }

	GoToContractDetails() {
		let contract = new MainTabs
			contract.init()

			contract.offer.isEnabled = true


		this._creation.Set(contract)

		this.router.navigate(["/creation/project/prerequisites"])
	}

}
