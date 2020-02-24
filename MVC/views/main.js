class MainView extends BaseView {
   update() {
      let html = `<div class="goods left"><a data-href="category_mouse"><img src="img/mause_logo.png"></a>
		               <p>мыши</p>
                    </div>
                    <div class="goods right"><a data-href="category_keyboard"><img src="img/keyboard_logo.png"></a>
                       <p>клавиатуры</p>
                    </div>
                    <div class="goods left"><a data-href="category_headphones"><img src="img/headphones_logo.png"></a>
                       <p>гарнитура</p>
                    </div>
                    <div class="goods right"><a data-href="category_mousepad"><img src="img/mausepad_logo.png"></a>
                       <p>коврики для мыши</p>
                    </div>`
      this.container.innerHTML = html;
   }
}