import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './guards/auth.guard'
import { LoginComponent } from './components/login/login.component'
import { PasswordResetComponent } from './components/password-reset/password-reset.component'
import { HomeComponent } from './components/home/home.component'
import { CreationComponent } from './components/home/creation/creation.component'
import { ContractsComponent } from './components/home/contracts/contracts.component'
import { CustomersComponent } from './components/home/customers/customers.component'
import { ActivitiesComponent } from './components/home/activities/activities.component'
import { ProjectComponent } from './components/home/creation/project/project.component'
import { SubscriptionComponent } from './components/home/creation/subscription/subscription.component'
import { UploadComponent } from './components/home/creation/upload/upload.component'
import { PrerequisitesComponent } from './components/home/creation/project/prerequisites/prerequisites.component'
import { LoanComponent } from './components/home/creation/project/loan/loan.component'
import { InsuredComponent } from './components/home/creation/project/insured/insured.component'
import { GuaranteesComponent } from './components/home/creation/project/guarantees/guarantees.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'passwordreset/:id/:token', component: PasswordResetComponent },
    { 
    	path: '', 
    	component: HomeComponent, 
    	canActivate: [AuthGuard],
    	
    	children: [
    		{
    			path: '', redirectTo: 'creation' , pathMatch: 'full'
    		}, 
		    { 
		    	path: 'creation', component: CreationComponent,
		    	children: [
		    		{ path: '', redirectTo: 'project', pathMatch: 'full' }, 
				    { 
				    	path: 'project', 
				    	component: ProjectComponent,
				    	children: [
				    		{ path: '', redirectTo: 'prerequisites', pathMatch: 'full' }, 
						    { path: 'prerequisites', component: PrerequisitesComponent }, 
						    { path: 'loan', component: LoanComponent },
						    { path: 'insured', component: InsuredComponent },
						    { path: 'guarantees', component: GuaranteesComponent },

							{ path: 'type', component: LoanComponent },
							{ path: 'loanspecifications', component: LoanComponent },
							{ path: 'borrowers/personnalinformations', component: LoanComponent },
							{ path: 'borrowers/generalinformations', component: LoanComponent },
							{ path: 'borrowers/otherinformations', component: LoanComponent },
							{ path: 'guarantees', component: LoanComponent },
							{ path: 'commissions', component: LoanComponent },
							{ path: 'subscriberselection', component: LoanComponent },
							{ path: 'bankdetails', component: LoanComponent },
							{ path: 'bankingingormations', component: LoanComponent },

				    	]  
				    }, 
				    { path: 'subscription', component: SubscriptionComponent },
				    { path: 'upload', component: UploadComponent }
		    	] 
		    }, 
		    { 
		    	path: 'contracts', component: ContractsComponent 
		    },
		    { 
		    	path: 'customers', component: CustomersComponent 
		    },
		    { 
		    	path: 'activities', component: ActivitiesComponent
		    }
    	]
    },


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes)