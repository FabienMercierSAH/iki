import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule }    from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend.service'

import { AppComponent }  from './app.component'
import { routing } from './app.routing'

import { JwtInterceptorService }  from './helpers/jwt.interceptor.service'
import { ErrorInterceptorService } from './helpers/error.interceptor.service'
import { LoginComponent } from './components/login/login.component'
import { PasswordResetComponent } from './components/password-reset/password-reset.component'
import { HomeComponent } from './components/home/home.component'
    import { MainHeaderComponent } from './components/home/main-header/main-header.component'
    import { MainMenuComponent } from './components/home/main-menu/main-menu.component'
    import { CreationComponent } from './components/home/creation/creation.component'
        import { MainTimelineComponent } from './components/home/creation/main-timeline/main-timeline.component'
        import { ProjectComponent } from './components/home/creation/project/project.component'
            import { SubTimelineComponent } from './components/home/creation/project/sub-timeline/sub-timeline.component'
            import { PrerequisitesComponent } from './components/home/creation/project/prerequisites/prerequisites.component'
            import { LoanComponent } from './components/home/creation/project/loan/loan.component'
            import { InsuredComponent } from './components/home/creation/project/insured/insured.component'
            import { GuaranteesComponent } from './components/home/creation/project/guarantees/guarantees.component'
        import { OfferComponent } from './components/home/creation/offer/offer.component'
        import { SubscriptionComponent } from './components/home/creation/subscription/subscription.component'
        import { UploadComponent } from './components/home/creation/upload/upload.component'
    import { ContractsComponent } from './components/home/contracts/contracts.component'
    import { CustomersComponent } from './components/home/customers/customers.component'
    import { ActivitiesComponent } from './components/home/activities/activities.component';
import { UserProfilComponent } from './components/home/user-profil/user-profil.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MainTimelineComponent,
        SubTimelineComponent,
        MainHeaderComponent,
        MainMenuComponent,
        ProjectComponent,
        OfferComponent,
        SubscriptionComponent,
        UploadComponent,
        CreationComponent,
        ContractsComponent,
        CustomersComponent,
        ActivitiesComponent,
        PrerequisitesComponent,
        LoanComponent,
        InsuredComponent,
        GuaranteesComponent,
        PasswordResetComponent,
        UserProfilComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }