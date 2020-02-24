class CartModel extends BaseModel {
	constructor() {
		super();
		this.view = null;
		this.items = [];
	}

	setView(view) {
		this.view = view;
	}


	addItem(el) {
		let newItem = {
			id: el.getAttribute('data-item-id'),
			category: el.getAttribute('data-category')
		};
		this.items.push(newItem);
		this.view.update();
	}

	getItems() {
		return this.items;
	}

	removeItem(el) {
		this.items.remove(item);
		this.view.update();
	}
}