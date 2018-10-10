import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CreationService } from '../../../../../services/creation.service'

import { FORMS } from '../../../../../app.forms'


@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.css']
})
export class PrerequisitesComponent implements OnInit {

	controlsForm: any
	typeForm: FormGroup = new FormGroup({})

	constructor(
		private formBuilder: FormBuilder,
		public _creation: CreationService,
		public router: Router
	) { }

	ngOnInit() {
		this.controlsForm = FORMS.Project.Type
		console.log(this.controlsForm)

		this.controlsForm.Controls
            .forEach( 
                item => {

                    this.typeForm.addControl(item.Name, this.formBuilder.control([]))

                    let valids: Array<any> = []
                    item.Validators
                        .forEach(
                            v => {
                                valids.push(v)
                            }
                        )
                    this.typeForm.controls[item.Name].setValidators(Validators.compose(valids))

                    this.typeForm.controls[item.Name].setValue(item.Default)

                }
            )
	}

	GoToNextStep() {
		this._creation.EnabledSubStep("project", "loan")

		this.router.navigate(["creation/project/loan"])
	}

	Cancel() {
		this._creation.ResetMain("project")
	}
}
