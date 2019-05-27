var st_timer = null;
$(function(){
	showInit();
});


function showInit(){
	//透明黑色背景
	checkShowInit = true;
	$("<div id='st_mask' onclick='closeMask()'></div>").appendTo("body").css({
		'width' : '100%',
		'height' : '100%',
		'background' : 'rgba(0,0,0,.4)',
		'position' : 'fixed',
		'left' : '0','top' : '0',
		'display' : 'none',
		'z-index' : '1'
	});
	//--------------------------------在body最后添加Confirm的节点
	$("<div id='st_confirmBox'></div>").appendTo("body").css({
		'width' : '100%',
		'position' : 'fixed',
		'left' : '0',
		'top' : '24%',
		'text-align' : 'center',
		'display' : 'none',
		'z-index' : '2',
	});
	$("<div id='st_confirm'></div>").appendTo("#st_confirmBox").css({
		'width' : '4.8rem',
		'height' : '6rem',
		'margin' : '0 auto',
		'background' : '#fff',
		'border-radius' : '5px',
		'overflow' : 'hidden',
		'padding-top' : '.3rempx',
		'text-align' : 'center',

	});
	$("<span id='st_confirm_text'></span>").appendTo("#st_confirm").css({
		'background' : '#fff',
		'overflow' : 'hidden',
		'text-align' : 'center',
		'display' : 'block',
		'padding' : '.3rem .8rem .3rem',
		
	});
	$("<span id='st_confirm_content1'></span>").appendTo("#st_confirm").css({
		'color' : '#727272',
		'font-size' : '.3rem',
		'overflow' : 'hidden',
		'text-align' : 'left',
		'display' : 'block',
		'padding-left' : '.5rem',
		'line-height' : '.65rem',
	});
	$("<span id='st_confirm_content2'></span>").appendTo("#st_confirm").css({
		'color' : '#727272',
		'font-size' : '.3rem',
		'overflow' : 'hidden',
		'text-align' : 'left',
		'display' : 'block',
		'padding-left' : '.5rem',
		'line-height' : '.65rem',
	});
	$("<span id='st_confirm_content3'></span>").appendTo("#st_confirm").css({
		'color' : '#727272',
		'font-size' : '.3rem',
		'overflow' : 'hidden',
		'text-align' : 'left',
		'display' : 'block',
		'padding-left' : '.5rem',
		'padding-right' : '.3rem',
		'padding-bottom' : '1.1rem',
		'line-height' : '.45rem',
	});
	$("<span class='st_confirm_btn cancel'></span>").appendTo("#st_confirm").css({
		'background' : '#fff',
		'color' : '#8d8d8d',
		'padding' : '.8rem',
		'padding-top' : '.4rem',
		'text-align' : 'center',
		'display' : 'block',
		'width' : '50%',
		'margin' : '0 auto',
		'float' : 'left',
		'box-sizing' : 'border-box',
		'border-top' : '1px solid #cfcfcf',
		'overflow' : 'hidden',
		'text-overflow' : 'ellipsis',
		'white-space' : 'nowrap'
	});
	$("<span class='st_confirm_btn success'></span>").appendTo("#st_confirm").css({
		'background' : '#1b79f8',
		'color' : '#fff',
		'padding' : '.8rem',
		'padding-top' : '.4rem',
		'padding-bottom' : '0',
		'text-align' : 'center',
		'display' : 'block',
		'width' : '50%',
		'margin' : '0 auto',
		'float' : 'left',
		'box-sizing' : 'border-box',
		'border-top' : '1px solid #cfcfcf',
		'overflow' : 'hidden',
		'text-overflow' : 'ellipsis',
		'white-space' : 'nowrap'
	});
	$("<div></div>").appendTo("#st_confirm").css({
		'clear' : 'both',
		'display' : 'block',
	});

	//--------------------------------在body最后添加Alert节点
	$("<div id='st_alertBox'></div>").appendTo("body").css({
		'width' : '100%',
		'position' : 'fixed',
		'left' : '0',
		'top' : '24%',
		'text-align' : 'center',
		'display' : 'none',
		'z-index' : '2',
	});
	$("<div id='st_alert'></div>").appendTo("#st_alertBox").css({
		'width' : '5.6rem',
		'height' : '6.5rem',
		'margin' : '0 auto',
		'background' : '#fff',
		'border-radius' : '7px',
		'overflow' : 'hidden',
		'padding-top' : '.2rem',
		'text-align' : 'center',
	});
	$("<span id='st_alert_text'></span>").appendTo("#st_alert").css({
		'background' : '#fff',
		'font-weight' : 'bold',
		'font-size' : '.36rem',
		'overflow' : 'hidden',
		'padding-top' : '.5rem',
		'text-align' : 'center',
		'display' : 'block',
		'padding' : '.15rem .08rem .3rem',
	});
	$("<span id='st_alert_img'></span>").appendTo("#st_alert").css({
		'background' : '#EBEBEB',
		'width' : '4.9rem',
		'height' : '3.3rem',
		'padding-top' : '.3rem',
		'text-align' : 'center',
		'display' : 'block',
		'margin-left' : '.36rem',
	});
	$("<span id='st_alert_tips'></span>").appendTo("#st_alert").css({
		'background' : '#fff',
		'font-size' : '.22rem',
		'color' : '#999999',
		'overflow' : 'hidden',
		'text-align' : 'center',
		'display' : 'block',
		'padding' : '.25rem .08rem .3rem',
	});
	$("<span id='st_alert_btn' onclick='closeMask()'></span>").appendTo("#st_alert").css({
		'background' : '#1b79f8',
		'color' : '#00C200',
		'padding' : '.8rem',
		'padding-top' : '.3rem',
		'text-align' : 'center',
		'display' : 'block',
		'width' : '72%',
		'margin' : '0 auto',
		'border-radius' : '2px',
		'border-top' : '1px solid #D2D3D5',
		'overflow' : 'hidden',
		'text-overflow' : 'ellipsis',
		'white-space' : 'nowrap'
	});

	//---------------------------------在body最后添加Toast节点
	$("<div id='st_toastBox'></div>").appendTo("body").css({
		'width' : '100%',
		'position' : 'fixed',
		'left' : '0',
		'bottom' : '10%',
		'text-align' : 'center',
		'display' : 'none'
	});
	$("<span id='st_toastContent'></span>").appendTo("#st_toastBox").css({
		'color' : '#fff',
		'background' : 'rgba(0,0,0,.8)',
		'padding' : '4px 12px',
		'border-radius' : '4px',
		'max-width' : '80%',
		'display' : 'inline-block'
	});

}
function showToast(obj){
	if(!obj.text){
		return false;
	}
	clearTimeout(st_timer);
	$('#st_toastBox').hide();

	var text = obj.text;
	var time = parseInt(obj.time ? obj.time : 2300);
	var speed = obj.speed ? obj.speed : 'normal';
	var bottom = obj.bottom ? obj.bottom : '10%';
	if(obj.zindex){
		var zindex = parseInt(obj.zindex);
		$('#st_mask').css({'z-index':zindex-1});
		$('#st_toastBox').css({'z-index' : zindex});
	}else{
		$('#st_mask').css({'z-index' : 1});
		$('#st_toastBox').css({'z-index' : 2});
	}

	$('#st_toastBox').css({'bottom' : bottom});

	$('#st_toastContent').text(text);
	$('#st_toastBox').fadeIn(speed);
	st_timer = setTimeout(function(){
		$('#st_toastBox').fadeOut();
	},time);
	
}

function showAlert(obj){
	
	if(!obj.text){
		return false;
	}else{
		var text = obj.text;
		var tips = obj.tips;
		var bgColor = obj.bgColor ? obj.bgColor : '#1b79f8';
		var color = obj.color ? obj.color : '#00C200';
		var btnText = obj.btnText ? obj.btnText : '确定';
		var top = obj.top ? obj.top : '34%';

		if(obj.zindex){
			var zindex = parseInt(obj.zindex);
			$('#st_mask').css({'z-index':zindex-1});
			$('#st_alertBox').css({'z-index' : zindex});
		}else{
			$('#st_mask').css({'z-index' : 1});
			$('#st_alertBox').css({'z-index' : 2});
		}

		$('#st_alert_text').text(text);
		$('#st_alert_tips').text(tips);
		$('#st_alert_btn').css({'background' : bgColor});
		$('#st_alert_btn').css({'color':color});
		$('#st_alert_btn').text(btnText);
		$('#st_alertBox').css({'top' : top});
		$('#st_mask,#st_alertBox').show();

		if(obj.success){
			$('#st_alert_btn').off('click').on('click',function(){
				obj.success();
			});
		}
	}

}
function showConfirm(obj){
	if(!obj.text){
		return false;
	}
	var text = obj.text;
	var content1 = obj.content1;
	var content2 = obj.content2;
	var content3 = obj.content3;
	var rightText = obj.rightText ? obj.rightText : '确定';
	var rightBgColor = obj.rightBgColor ? obj.rightBgColor : '#1b79f8';
	var rightColor = obj.rightColor ? obj.rightColor : '#fff';

	var leftText = obj.leftText ? obj.leftText : '取消';
	var top = obj.top ? obj.top : '24%';
	if(obj.zindex){
		var zindex = parseInt(obj.zindex);
		$('#st_mask').css({'z-index':zindex-1});
		$('#st_confirmBox').css({'z-index' : zindex});
	}else{
		$('#st_mask').css({'z-index' : 1});
		$('#st_confirmBox').css({'z-index' : 2});
	}

	$('#st_confirm_text').text(text);
	$('#st_confirm_content1').text(content1);
	$('#st_confirm_content2').text(content2);
	$('#st_confirm_content3').text(content3);
	$('.st_confirm_btn.cancel').text(leftText);
	$('.st_confirm_btn.success').text(rightText);
	$('.st_confirm_btn.success').css({
		'background' : rightBgColor,
		'color' : rightColor,
		'border-top' : '1px solid #cfcfcf',
	});
	$('#st_confirmBox').css({'top' : top});
	$('#st_mask,#st_confirmBox').show();

	if(obj.cancel){
		$('.st_confirm_btn.cancel').off('click').on('click',function(){
			closeMask();
			obj.cancel();
		})
	}else{
		$('.st_confirm_btn.cancel').off('click').on('click',function(){
			closeMask();
		});
	}
	if(obj.success){
		$('.st_confirm_btn.success').off('click').on('click',function(){
			closeMask();
			obj.success();
		})
	}else{
		$('.st_confirm_btn.success').off('click').on('click',function(){
			closeMask();
		});
	}
}
function closeMask(){
	$('#st_mask,#st_alertBox,#st_confirmBox').hide();
}
