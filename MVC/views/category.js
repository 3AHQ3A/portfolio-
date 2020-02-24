class CategoryView extends BaseView {
  update() {
    let html = '';

    switch (this.model.getId()) {
      case 'mouse':
        html += `'<div class="goods left"><a data-href="item_RT70"><img src="img/goods/RT70.png"></a>
                            <p>RT70</p>
                            <p style="color:grey">Беспроводная мышь</p>
                          </div>
                          <div class="goods right"><a data-href="item_RT50"><img src="img/goods/RT50.png">
                            <p>RT50</p>
                            <p style="color:grey">Беспроводная мышь</p>
                          </div>
                          <div class="goods left"><a data-href="item_R30"><img src="img/goods/R30.png">
                            <p>R30</p>
                            <p style="color:grey">Беспроводная мышь</p>
                          </div>
                          <div class="goods right"><a data-href="item_TL90"><img src="img/goods/TL90.png">
                            <p>TL90</p>
                            <p style="color:grey">Лазерная мышь</p>
                          </div>
                          <div class="goods left"><a data-href="item_ZL50"><img src="img/goods/ZL50.png">
                            <p>ZL50</p>
                            <p style="color:grey">Лазерная мышь</p>
                          </div>
                          <div class="goods right"><a data-href="item_ML160"><img src="img/goods/ML160.png">
                            <p>ML160</p>
                            <p style="color:grey">Лазерная мышь</p>
                          </div>';`
        break;
      case 'headphones':
        html += `'<div class="goods left"><a data-href="item_G501"><img src="img/goods/G501.png">
                            <p>G501</p>
                          </div>
                          <div class="goods right"><a data-href="item_G530"><img src="img/goods/G530.png">
                            <p>G530</p>
                          </div>
                          <div class="goods left"><a data-href="item_G437"><img src="img/goods/G437.png">
                            <p>G437</p>
                          </div>
                          <div class="goods right"><a data-href="item_G528C"><img src="img/goods/G528C.png">
                            <p>G528C</p>
                          </div>
                          <div class="goods left"><a data-href="item_M615"><img src="img/goods/M615.png">
                            <p>M615</p>
                          </div>
                          <div class="goods right"><a data-href="item_M660"><img src="img/goods/M660.png">
                            <p>M660</p>
                          </div>';`
        break;
      case 'keyboard':
        html += `<div class="goods left"><a data-href="item_B800"><img src="img/goods/B800.png">
                            <p>B800</p>
                         </div>
                         <div class="goods right"><a data-href="item_B2278"><img src="img/goods/B2278.png">
                            <p>B2278</p>
                         </div>
                         <div class="goods left"><a data-href="item_B720"><img src="img/goods/B720.png">
                            <p>B720</p>
                         </div>
                         <div class="goods right"><a data-href="item_B125"><img src="img/goods/B125.png">
                            <p>B125</p>
                         </div>
                         <div class="goods left"><a data-href="item_B314"><img src="img/goods/B314.png">
                            <p>B314</p>
                         </div>
                         <div class="goods right"><a data-href="item_B880R"><img src="img/goods/B880R.png">
                            <p>B880R</p>
                         </div>';`
        break;
      case 'mousepad':
        html += `'<div class="goods left"><a data-href="item_B-080"><img src="img/goods/B-080.png">
                             <p>B-080</p>
                          </div>
                          <div class="goods right"><a data-href="item_B-088S"><img src="img/goods/B-088S.png">
                             <p>B-088S</p>
                          </div>
                          <div class="goods left"><a data-href="item_B-070"><img src="img/goods/B-070.png">
                             <p>B-070</p>
                          </div>
                          <div class="goods right"><a data-href="item_MP-80N"><img src="img/goods/MP-80N.png">
                             <p>MP-80N</p>
                          </div>
                          <div class="goods left"><a data-href="item_MP-60R"><img src="img/goods/MP-60R.png">
                             <p>MP-60R</p>
                          </div>
                          <div class="goods right"><a data-href="item_MP-50NS"><img src="img/goods/MP-50NS.png">
                             <p>MP-50NS</p>
                          </div>';`
        break;
    }

    this.container.innerHTML = html;
  }
}