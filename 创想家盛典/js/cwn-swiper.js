var swiperContainer = document.getElementById("swiper-container");
var container = document.getElementsByClassName("swiper-wrapper")[0];
var swiperItems = document.getElementsByClassName("swiper-item");
var left = document.getElementById("swiper-button-left");
var right = document.getElementById("swiper-button-right");

// 记录图片的个数(不包含补的图 - 1)
var length = swiperItems.length - 1;
// 轮播图最大容器的宽度
var width = swiperContainer.clientWidth;

// 初始化轮播图宽度
function initSwiper() {
	// container和图片张数保持一致
	container.style.width = width * (length + 1) + "px";
	// 循环设置每个item的宽度和最大的swiperContainer宽度一致
	for (var i = 0; i < swiperItems.length; i++) {
		swiperItems[i].style.width = width + "px";
	}
}
initSwiper();

// 动画前的配置
function configMove() {
	// 让container动画
	// container.offsetLeft : 左偏移大小
	console.log(container.offsetLeft);
	var t = 0,
		b = container.offsetLeft,
		c = -width * pn - b, // 最终值 - 初始值
		d = 100;
	Tween.move(container, "left", t, b, c, d);
}