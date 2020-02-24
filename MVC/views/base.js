class BaseView {
	constructor(model) {
		this.model = model;
		this.model.setView(this);
		this.container = document.getElementById('content');
	}
}