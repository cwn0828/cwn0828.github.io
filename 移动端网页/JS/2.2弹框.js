$(function() {
	$('#alert').click(function() {
		showAlert({
			text: '幸运礼品',
			tips: '每个品质的礼品都有可能升级为幸运礼品',
			btnText: '知道了',
			top: '24%',
			zindex: 5,
			color: '#00C200',
			bgColor: '#FFF',
		});
	});
});