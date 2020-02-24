class AppController {
	constructor() {
		this.mainModel = new MainModel();
		this.mainView = new MainView(this.mainModel);

		this.categoryModel = new CategoryModel();
		this.categoryView = new CategoryView(this.categoryModel);

		this.itemModel = new ItemModel();
		this.itemView = new ItemView(this.itemModel);

		this.cartModel = new CartModel();
		this.cartView = new CartView(this.cartModel);
		this.cartModel.setView(this.cartView);

		this.setupListeners();
		this.switchToStateFromURLHash();
	}

	setupListeners() {
		window.onhashchange = this.switchToStateFromURLHash.bind(this);

		const self = this;

		const config = {
			childList: true
		};
		var target = document.getElementById('content');
		const observer = new MutationObserver(() => {
			let a = document.getElementsByTagName('a');
			for (let i = 0; i < a.length; i++) {
				a[i].onclick = self.linkOnClickHandler.bind(self);
			}
		});
		observer.observe(target, config);

		const cartObserver = new MutationObserver(() => {
			let cartEls = document.getElementsByClassName('ToCartButton');
			for (let i = 0; i < cartEls.length; i++) {
				cartEls[i].onclick = function (e) {
					self.cartModel.addItem(e.target);
				}
			}
		});
		cartObserver.observe(target, config);

		const itemObserver = new MutationObserver(() => {
			let cartEls = document.getElementsByClassName('remove');
			for (let i = 0; i < cartEls.length; i++) {
				cartEls[i].onclick = function (e) {
					self.cartModel.removeItem(e.target);
				}
			}
		});
		itemObserver.observe(target, config);
	}

	linkOnClickHandler(e) {
		const url = e.currentTarget.getAttribute('data-href');
		this.switchToState(url);
	}

	switchToMainPage() {
		this.switchToState('contents');
	}

	switchToState(newState) {
		location.hash = newState;
	}

	switchToStateFromURLHash() {
		let URLHash = window.location.hash;

		let stateStr = URLHash.substr(1);

		let model = this.getCurrentModel(stateStr);
		model.updateView();
		window.scrollTo(0, 0);
	}

	getCurrentModel(stateStr) {
		if (stateStr != "") {
			let parts = stateStr.split("_")

			if (parts[0] == 'category') {
				let id = parts[1] !== undefined ? parts[1] : 1;
				this.categoryModel.setId(id);
				return this.categoryModel;
			}

			if (parts[0] == 'item') {
				let id = parts[1] !== undefined ? parts[1] : 1;
				this.itemModel.setId(id);
				return this.itemModel;
			}

			return this.mainModel;
		}

		return this.mainModel;
	}
}