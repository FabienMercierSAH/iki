import { Project } from './project/project.model'

export class MainTabs {
	offer: Tab
	project: Project
	subscription: Tab
	upload: Tab


	constructor() {
		this.offer = new Tab
		this.project = new Project()
		this.subscription = new Tab
		this.upload = new Tab
	}

	init(): void {
		this.project.isEnabled = true
		this.project.prerequisites.isEnabled = true
	}
}

class Tab {
	isDone: boolean
	isEnabled: boolean

	constructor() {
		this.isDone = false
		this.isEnabled = false
	}
}