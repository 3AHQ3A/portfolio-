class CartView extends BaseView {
	constructor(model) {
		super(model);
		this.container = document.getElementById('popup-content');
	}
	update() {
		let html = '';

		let items = this.model.getItems();



		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			if (catalogInfo[item.category][item.id] != undefined) {
				html += '<div class="item"><span class="popupText">' + catalogInfo[item.category][item.id]['name'] + ' : ' + item.id + '          ' + catalogInfo[item.category][item.id]['cost'] + '</span>';
				html += '<span class="remove" data-item="' + item.id + '"><img src="img/cross.png" class="remove"></span></div><br>';
			}
		}

		this.container.innerHTML = html;
	}
}