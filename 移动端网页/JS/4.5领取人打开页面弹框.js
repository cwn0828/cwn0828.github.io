$(function() {
	$('#alert').click(function() {
		showConfirm({
			text: '核对信息',
			content1: '联系人  香克斯',
			content2: '手机号  15938833799',
			content3: '收货地址  天津市 天津 河西区 新建村二期低层 12号楼 一单元 1101',
			rightText: '确认',
			rightBgColor: '#FFF', //不建议设置为白色背景
			rightColor: '#00C200',
			leftText: '取消',
			success: function() {
				showToast({
					text: '已确认'
				})
			},
			cancel: function() {
				showToast({
					text: '已取消'
				})
			}
		});
	});
});
