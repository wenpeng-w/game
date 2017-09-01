;(function () {
	var scroll;
	var MG_LR = 54;
	var screen_w = document.body.clientWidth;
	var wrapper = document.querySelector('.scroll_wrapper');
	var content = document.querySelector('.scroll_content');
	var item_w = document.querySelector('.scroll_content span').offsetWidth;
	var item_len = document.querySelectorAll('.scroll_content span').length;
	console.log(screen_w);
	content.style.width = (item_w * item_len + MG_LR) + 'px';
	
	setTimeout(function () {
		scroll = new BScroll(wrapper, {
	    scrollX: true,
	    click: true
		});
	},500)
	
	var i = 0;
	function switchTab (_type) {
		if (_type === 'prev' && i > 0) {
			i -= 1;
		} else if (_type === 'next' && (item_w * item_len + MG_LR) - (item_w * (i)) > screen_w) {
			i += 1;
		}
		scroll.scrollToElement(content, 1000, item_w * i, 0, 1000);
	}
	
	// 点击事件
	$(".scroll_wrapper .review-tab-btn").on("click", function () {
		var _this = this;
		var _type = _this.getAttribute("data-type");
		switchTab(_type);
	})
	
})()