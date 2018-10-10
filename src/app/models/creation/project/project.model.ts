export class Project {
	guarantees: ProjectStep
	insured: ProjectStep
	loan: ProjectStep
	prerequisites: ProjectStep

	isDone: boolean
	isEnabled: boolean

	constructor() {
		this.guarantees = new ProjectStep
		this.insured = new ProjectStep
		this.loan = new ProjectStep
		this.prerequisites = new ProjectStep
		this.isDone = false
		this.isEnabled = false
	}
}

class ProjectStep {
	isDone: boolean
	isEnabled: boolean

	constructor() {
		this.isDone = false
		this.isEnabled = false
	}
}