import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

	constructor(
		public formbuilder: FormBuilder
	) { }

	createGroup(inputsForm: Array<any>): Promise<FormGroup> {
		return new Promise<FormGroup>((resolve, reject) => { 
			const group = this.formbuilder.group({})
			inputsForm.forEach(control => group.addControl(control.Name, this.formbuilder.control([])))
			resolve(group)
		})		
	}
}
