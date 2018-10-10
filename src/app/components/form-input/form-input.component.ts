import { Component, OnInit, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { FormGroup } from '@angular/forms'

@Component({
	selector: 'app-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.css'],
	providers: [ 
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormInputComponent),
			multi: true
		}
	]
})
export class FormInputComponent implements OnInit {

	@Input() item: object
  	@Input() form: FormGroup
  	@Input() isSubmit: boolean

	_value: any = ''

	constructor() {}

	ngOnInit() {}

  	propagateChange: any = () => {}
  
	writeValue(value: any) {
		if( value ){
			this._value = value 
		}
	}

	registerOnChange(fn) {
		this.propagateChange = fn
	}
	registerOnTouched(fn: () => void): void { }

	onChange(event){
		this.propagateChange(event.target.value)
	}
  
}
