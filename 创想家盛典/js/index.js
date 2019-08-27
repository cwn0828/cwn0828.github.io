$("#pd").css("display", "none");
$("#pr").css("display", "none");
$("#pe").css("display", "none");
$("#pm").css("display", "none");
$("#maker").css("display", "none");
$("#title").css("visibility", "hidden");
$(".music").css("visibility", "hidden");

page1.style.webkitTransition = "all ease1111 0.3s";
page2.style.webkitTransition = "all ease1111 0.3s";
page3.style.webkitTransition = "all ease1111 0.3s";
page4.style.webkitTransition = "all ease1111 0.3s";
page5.style.webkitTransition = "all ease1111 0.3s";
page6.style.webkitTransition = "all ease1111 0.3s";
page7.style.webkitTransition = "all ease1111 0.3s";
page8.style.webkitTransition = "all ease1111 0.3s";
page9.style.webkitTransition = "all ease1111 0.3s";

// 流星运动函数
function starMove() {
	// 红色流星
	$("#starA").animate({
		top: "15rem",
		left: "9rem"
	}, 1500, function() {
		$("#starA").animate({
			top: "4rem",
			left: "-2.5rem"
		}, 0);
	});
	// 黄色流星
	$("#starB").animate({
		bottom: "15rem",
		right: "9rem"
	}, 1500, function() {
		$("#starB").animate({
			bottom: "4rem",
			right: "-3rem"
		}, 0);
	});
	// 绿色流星
	$("#starC").animate({
		top: "15rem",
		right: "9rem"
	}, 1500, function() {
		$("#starC").animate({
			top: "3rem",
			right: "-3rem"
		}, 0);
	});
}

setInterval(function() {
	starMove();
}, 1500);

// 图片动画
$("#re").animate({
	left: "0"
}, 1000);
$("#rr").animate({
	right: "0"
}, 1000);
$("#hh").animate({
	bottom: "0"
}, 1000);
$("#gg").animate({
	top: "0"
}, 1000);
$("#qq").animate({
	top: "1.41rem"
}, 1000);
$("#yy").animate({
	bottom: "0"
}, 1000);
$("#ccc").animate({
	top: "0"
}, 1000);
$("#dd").animate({
	left: "0"
}, 1000);
$("#dda").animate({
	left: "1.7rem"
}, 1000, function() {
	$("#pd").animate({
		display: "block",
		width: ".8rem"
	}, 500, function() {
		$("#pr").animate({
			display: "block",
			height: "3.9rem"
		}, 500, function() {
			$("#pe").animate({
				display: "block",
				width: ".85rem"
			}, 500, function() {
				$("#pm").animate({
					display: "block",
					width: "2.95rem",
					height: "4.05rem"
				}, 500, function() {
					$("#maker").animate({
						display: "block",
						width: "4.5rem",
						right: "0"
					}, 500);
				});
			});
		});
	});
});

// title出现
setInterval(function() {
	$("#title > img").css("visibility", "visible");
	$("#title > img").addClass("animated zoomIn");
}, 3000);

setInterval(function() {
	$("#blue").css("visibility", "visible");
	$("#blue").addClass("animated zoomIn");
	$("#pink").css("visibility", "visible");
	$("#pink").addClass("animated zoomIn");
}, 3500);

// 第一页到第二页, 添加向上轻扫的手势
touch.on(page1, "swipeup", function() {
	console.log("向上轻扫");
	$("#page1").hide();
	$("#page2").show();
	$("#ww").addClass("animated bounceInLeft");
	$("#www").addClass("animated bounceInRight");
});

// 第二页到第三页, 添加向上轻扫的手势
touch.on(page2, "swipeup", function() {
	console.log("向上轻扫");
	$("#page2").hide();
	$("#page3").show();
});

// 第二页到第一页, 添加向下轻扫的手势
touch.on(page2, "swipedown", function() {
	console.log("向下轻扫");
	$("#page1").show();
	$("#page2").hide();
});

// page3动画效果
$("#g1").addClass("box-animated-up");
$("#g1").css("animation-duration", "3s");
$("#g2").addClass("box-animated-left");
$("#g2").css("animation-duration", "5s");
$("#g3").addClass("box-animated-left");
$("#g3").css("animation-duration", "4s");
$("#g4").addClass("box-animated-up");
$("#g4").css("animation-duration", "5s");
$("#g5").addClass("box-animated-up");
$("#g5").css("animation-duration", "8s");
$("#i1").addClass("box-animated-up");
$("#i2").addClass("box-animated-up");
$("#i2").css("animation-duration", "3s");
$("#i3").addClass("box-animated-up");

// 第三页到第四页, 添加向上轻扫的手势
touch.on(page3, "swipeup", function() {
console.log("向上轻扫");
$("#page3").hide();
$("#page4").show();
// page4动画效果
// $("#font1").css("visibility", "hidden");
// $("#font2").css("visibility", "hidden");
$("#swiper-container").hide();

// 字体动画
// $("#font1").css("visibility", "visible");
$("#font1").css("animation-duration", "2s");

// $("#font2").css("visibility", "visible");
$("#font2").css("animation-delay", ".5s");
$("#font2").css("animation-duration", "2s");
// bgCircle动画
$("#bgCircle > img").animate({
	width: "110%",
	height: "100%",
	margin: "0",
	left: "-.9rem",
	bottom: "0",
}, 1000);
// 人物头像动画
$("#f1").animate({
	width: "1.5rem",
	top: "1.7rem",
	left: "2.6rem"
}, 1200);
$("#f4").animate({
	width: "1.5rem",
	top: "5.7rem",
	left: ".7rem"
}, 1400);
$("#f7").animate({
	width: "1.6rem",
	bottom: "4.3rem",
	right: ".8rem"
}, 1600);
$("#f5").animate({
	width: "1.3rem",
	top: "5.6rem",
	right: ".8rem"
}, 2000);
$("#f3").animate({
	width: "1.6rem",
	top: "3.2rem",
	right: ".8rem"
}, 2200);
$("#f8").animate({
	width: "1.55rem",
	bottom: "2.9rem",
	left: "2.8rem"
}, 2600);
$("#f6").animate({
	width: "1.45rem",
	bottom: "4.3rem",
	left: "1.2rem"
}, 2800);
$("#f2").animate({
	width: "1.8rem",
	top: "3.2rem",
	left: ".4rem"
}, 3000, function() {
	setInterval(function() {
		$("#f9").animate({
			opacity: "1"
		}, 800, function() {
			$("#f9").animate({
				opacity: "0.3"
			});
		});
	}, 1500);
});
setTimeout(function() {
	$("#bgcover").css("transform", "scale(0)");
}, 2000);
// function() 
// 	// bgLine动画
// 	// $("#bgLine > img").animate({
// 	$("#bgcover").animate({
// 		width: "0",
// 		height: "0"
// 
// 	}, 1500,
// });
});

// 第三页到第二页, 添加向下轻扫的手势
touch.on(page3, "swipedown", function() {
	console.log("向下轻扫");
	$("#page2").show();
	$("#page3").hide();
});

// 给每个头像添加点击事件
// var them = document.getElementsByClassName("them")[0];
var lastIndex = 0;
// 记录图片左移
var pn = 0;
// var swiperC = document.getElementById("swiper-container");
right.onclick = function() {
	// 总共八个图, 代表第八个图出去了
	if (pn == length) {
		container.style.left = "0px";
		// 记录到了哪一张图
		pn = 0;
	}
	pn++;
	configMove();
};

left.onclick = function() {
	// 第一张
	if (pn == 0) {
		container.style.left = length * -width + "px";
		// 更新位置
		pn = length;
	}
	pn--;
	configMove();
};
$(".them").click(function() {
	initSwiper();
	console.log($(this).index());
	pn = $(this).index();
	$(".swiper-wrapper").animate({
		left: -pn * $("#swiper-container").width()
	}, 1);
	$("#swiper-container").removeClass("animated zoomOut");
	$("#swiper-container").addClass("animated zoomIn");
	// swiperC.className = "animated zoomIn";

	$("#swiper-container").css("display", "block");
	$("#font").css("display", "none");
	$(".them").css("display", "none");
	$("#f9").css("display", "none");
});
$("#close").click(function() {
	// console.log("点击");
	$("#swiper-container").removeClass("animated zoomIn");
	$("#swiper-container").addClass("animated zoomOut");
	setTimeout(function() {
		$("#swiper-container").css("display", "none");
	}, 1000)
	// $("#swiper-container").css("display", "none");
	$("#font").css("display", "block");
	$(".them").css("display", "block");
	$("#f9").css("display", "block");
	// swiperC.className = "animated zoomOut";
	$("#font1").removeClass("animated fadeInLeft");
	$("#font2").removeClass("animated fadeIn");
});

// 第四页到第五页, 添加向上轻扫的手势
touch.on(page4, "swipeup", function() {
	console.log("向上轻扫");
	$("#page4").hide();
	$("#page5").show();

	// page5动画效果
	$("#detail").hide();

	$("#tamen").animate({
		opacity: "1"
	}, 1500, function() {
		$("#person10").animate({
			height: "1.55rem"
		}, 300, function() {
			$("#person9").animate({
				height: "1.55rem"
			}, 300, function() {
				$("#person8").animate({
					height: "1.55rem"
				}, 300, function() {
					$("#person7").animate({
						height: "1.55rem"
					}, 300, function() {
						$("#person6").animate({
							height: "1.55rem"
						}, 300, function() {
							$("#person5").animate({
								height: "1.55rem"
							}, 300, function() {
								$("#person4").animate({
									height: "1.55rem"
								}, 300, function() {
									$("#person3").animate({
										height: "1.55rem"
									}, 300, function() {
										$("#person2").animate({
											height: "1.55rem"
										}, 300, function() {
											$("#person1").animate({
												height: "1.55rem"
											}, 300, function() {
												$("#person2").animate({
													right: ".3rem",
													top: "3.1rem"
												}, 300, function() {
													$("#person1").animate({
														right: "2.4rem",
														top: "2.5rem",
													}, 300, function() {
														setInterval(function() {
															$("#tap").animate({
																opacity: "1"
															}, 300, function() {
																$("#tap").animate({
																	opacity: "0.3"
																});
															});
														}, 1000);
													});
													$("#bgPerson1").animate({
														height: "3rem"
													});
												});
												$("#bgPerson2").animate({
													height: "3rem"
												});
											});
											$("#person3").animate({
												left: ".6rem",
												top: "3.2rem"
											}, 300);
											$("#bgPerson3").animate({
												height: "3rem"
											});
										});
										$("#person4").animate({
											left: "2.1rem",
											top: "5.1rem"
										}, 300);
										$("#bgPerson4").animate({
											height: "3rem"
										});
									});
									$("#person5").animate({
										right: "2rem",
										top: "5.7rem"
									}, 300);
									$("#bgPerson5").animate({
										height: "3rem"
									});
								});
								$("#person6").animate({
									left: ".4rem",
									bottom: "4rem"
								}, 300);
								$("#bgPerson6").animate({
									height: "3rem"
								});
							});
							$("#person7").animate({
								right: "3rem",
								bottom: "3.2rem"
							}, 300);
							$("#bgPerson7").animate({
								height: "3rem"
							});
						});
						$("#person8").animate({
							right: ".5rem",
							bottom: "4.1rem"
						}, 300);
						$("#bgPerson8").animate({
							height: "3rem"
						});
					});
					$("#person9").animate({
						left: "1.6rem",
						bottom: ".5rem"
					}, 300);
					$("#bgPerson9").animate({
						height: "3rem"
					});
				});
				$("#person10").animate({
					right: "1.2rem",
					bottom: "1.2rem"
				}, 300);
				$("#bgPerson10").animate({
					height: "3rem"
				});
			});
		});
	});
});

// 第四页到第三页, 添加向下轻扫的手势
touch.on(page4, "swipedown", function() {
	console.log("向下轻扫");
	$("#page3").show();
	$("#page4").hide();
});

// 给每个图片添加点击事件
$(".persons").click(function() {
	console.log(((($(this).index()) + 1) / 2 - 1));
	$("#showDetail").animate({
		left: -((($(this).index()) + 1) / 2 - 1) * $("#detail").width()
	}, 100, function() {
		$("#detail").show();
		$("#detail").addClass("animated jackInTheBox");
		$(".show").show();
	});
});
$("#false").click(function() {
	// $("#detail").fadeOut(1000);
	$("#detail").fadeOut("slow");
})

// 第五页到第六页, 添加向上轻扫的手势
touch.on(page5, "swipeup", function() {
	console.log("向上轻扫");
	$("#page5").hide();
	$("#page6").show();

	// page6动画效果
	$("#ttw").hide();
	$("#ttww").hide();
	$("#xwn").hide();
	$("#thc").hide();
	$("#hp").hide();
	$("#jy").hide();
	$("#jd").hide();
	$("#twq").hide();
	$("#wp").hide();

	$("#t1").animate({
		top: "1rem",
		left: ".5rem"
	}, 1000);
	$("#t2").animate({
		top: ".9rem",
		right: ".6rem"
	}, 1000, function() {
		$("#t3").animate({
			top: "3.5rem",
			right: "0"
		}, 1000, function() {
			setInterval(function() {
				$("#t3").animate({
					right: "-1rem"
				}, 1500, function() {
					$("#t3").animate({
						right: "0"
					}, 1500);
				});
			}, 3000);
		});
	});
	$("#t4").animate({
		top: ".6rem",
		left: "-.5rem"
	}, 1000);
	$("#t5").animate({
		top: ".85rem",
		left: "2.1rem"
	}, 1000);
	$("#t6").animate({
		top: ".9rem",
		right: "-1.1rem"
	}, 1000);
	$("#t7").animate({
		top: "4.5rem",
		left: "1rem"
	}, 3000, function() {
		setInterval(function() {
			$("#t7").animate({
				top: "5rem",
				left: "1.5rem"
			}, 1500, function() {
				$("#t7").animate({
					top: "4.5rem",
					left: "1rem"
				}, 1500);
			});
		}, 3000);
	});
	$("#t8").animate({
		width: ".35rem",
		bottom: "1.7rem",
		right: ".2rem"
	}, 1000, function() {
		setInterval(function() {
			$("#t8").animate({
				right: "-1rem"
			}, 1500, function() {
				$("#t8").animate({
					right: ".2rem"
				}, 1500);
			});
		}, 3000);
		$("#ttw").fadeIn(2500);
		$("#ttww").fadeIn(5000);
		$("#wp").fadeIn(1000, function() {
			$("#xwn").fadeIn(1000, function() {
				$("#jy").fadeIn(1000, function() {
					$("#thc").fadeIn(1000, function() {
						$("#twq").fadeIn(1000, function() {
							$("#hp").fadeIn(1000, function() {
								$("#jd").fadeIn(1000);
							});
						});
					});
				});
			});
		});
	});
});

// 第五页到第四页, 添加向下轻扫的手势
touch.on(page5, "swipedown", function() {
	console.log("向下轻扫");
	$("#page4").show();
	$("#page5").hide();
});
// 第六页到第七页, 添加向上轻扫的手势
touch.on(page6, "swipeup", function() {
	console.log("向上轻扫");
	$("#page6").hide();
	$("#page7").show();
	setInterval(function() {
		$("#s3").animate({
			right: "-.3rem",
			top: "3.2rem"
		}, 2500, function() {
			$("#s3").css("right", "-.9rem");
			$("#s3").css("top", "3rem");
		});

	}, 2500)
	setInterval(function() {
		$("#s2").animate({
			left: "-2.6rem"
		}, 2500, function() {
			$("#s2").css("left", "-2.8rem");
		});
		$("#s6").animate({
			right: ".8rem"
		}, 2500, function() {
			$("#s6").css("right", ".9rem");
		});
	}, 2600)
	$("#sTitle").addClass("animated fadeIn");
	$("#sTitle").css("animation-duration", "2s");
	$("#sTitlet").addClass("animated fadeIn");
	$("#sTitlet").css("animation-delay", ".5s");
	$(".sLines").animate({
		height: "11.5rem"
	}, 2700);
	$("#wo1").addClass("animated fadeInRight");
	$("#wo1").css("animation-delay", "1s");
	$("#wo2").addClass("animated fadeInLeft");
	$("#wo2").css("animation-delay", "1.5s");
	$("#wo3").addClass("animated fadeInRight");
	$("#wo3").css("animation-delay", "2s");
});

// 第六页到第五页, 添加向下轻扫的手势
touch.on(page6, "swipedown", function() {
	console.log("向下轻扫");
	$("#page5").show();
	$("#page6").hide();
});
// 第七页到第八页, 添加向上轻扫的手势
touch.on(page7, "swipeup", function() {
	console.log("向上轻扫");
	$("#page7").hide();
	$("#page8").show();
	$("#ellemen").hide();
	$("#graduation").hide();

	$("#e1").animate({
		top: "1rem",
		left: ".5rem"
	}, 1000);
	$("#e2").animate({
		top: ".9rem",
		right: ".6rem"
	}, 1000);
	$("#e3").animate({
		top: "3rem",
		right: "1rem"
	}, 1000);
	$("#e4").animate({
		top: ".6rem",
		left: "-.5rem"
	}, 1000);
	$("#e5").animate({
		top: ".85rem",
		left: "2.1rem"
	}, 1000);
	$("#e6").animate({
		top: "0rem",
		right: "-.2rem"
	}, 1000);
	$("#partner").addClass("animated fadeInRight");
	$("#partner").css("animation-delay", ".8s");
	$("#ellemen").fadeIn(1500, function() {
		$("#graduation").fadeIn(1000);
	});

	$("#kr").addClass("animated bounceInUp");
	$("#kr").css("animation-delay", "2s");
	$("#bank").addClass("animated bounceInUp");
	$("#bank").css("animation-delay", "2.2s");
	$("#aiqiyi").addClass("animated bounceInUp");
	$("#aiqiyi").css("animation-delay", "2.4s");
});

// 第七页到第六页, 添加向下轻扫的手势
touch.on(page7, "swipedown", function() {
	console.log("向下轻扫");
	$("#page6").show();
	$("#page7").hide();
});
// 第八页到第九页, 添加向上轻扫的手势
touch.on(page8, "swipeup", function() {
	console.log("向上轻扫");
	$("#page8").hide();
	$("#page9").show();
});

// 第八页到第七页, 添加向下轻扫的手势
touch.on(page8, "swipedown", function() {
	console.log("向下轻扫");
	$("#page7").show();
	$("#page8").hide();
});

// 第九页到第八页, 添加向下轻扫的手势
touch.on(page9, "swipedown", function() {
	console.log("向下轻扫");
	$("#page8").show();
	$("#page9").hide();
});

// 音乐图标
setInterval(function() {
	$(".music").addClass("animated slideInUp");
	$(".music").css("visibility", "visible");
}, 1000)

// 音乐播放
$(".off").css("display", "none");
$(".on").click(function() {
	$(".off").css("display", "block");
	$(".on").css("display", "none");
	$(".bgMusic").trigger("play");
	$(".bgMusic").trigger("pause");
});

$(".off").click(function() {
	$(".on").css("display", "block");
	$(".off").css("display", "none");
	$(".bgMusic").trigger("play");
});
