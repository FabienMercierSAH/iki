import { Component, OnInit, AfterViewInit } from '@angular/core'


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit, AfterViewInit {

	public isUserLogged: boolean = false 

	ngOnInit() {
		this.isLogged()
	}

	ngAfterViewInit() {
		setTimeout(() => {
            this.isLogged()
        });
		
	}

	isLogged(): boolean {
		return localStorage.getItem("currentUser") !== null
	}

}