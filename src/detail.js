require('css/detail.less');
var $ = require('jquery');
import { goodsSlide } from 'goodsSlide';
import { preview } from 'preview'
import { cascade } from 'cascade'
import { order } from 'order'

var goodsId = $('.goods').attr('mygoodsId')
var Slide = new goodsSlide($('.goods-slide'))
var Preview = new preview($('.mouse-bord'), $('.goods-preview'), $('.goods-preview').find('img'), $('.img-group'), $('.hover-bg'))
var Cascade = new cascade()
var Order = new order($('.goods-order'), $('.goods').attr('isladder'))
var BaseUrl = '/index.php'
var GetQueryString = function(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  	var r = window.location.search.substr(1).match(reg);
  	if(r!=null)return  unescape(r[2]); return null;
}

Slide.init()
Preview.init()
Order.init()

$('.like').on('click', function() { // 点赞请求
	var that = this
	$.ajax({
		type: 'POST',
		url: BaseUrl,
		data: {
			ctl: 'Goods_Goods',
			goods_id: GetQueryString('gid'),
			met: 'collectGoods',
			typ: 'json'
		},
		success: function(data) {
			if (data.status === 200) {
				$(that).find('i').css('color', '#ff6d33')
				$(that).find('span').text(+$(that).find('span').text() + 1)
				Public.tips.success(data.msg);
			} else {
				if (data.cmd_id === -1) {
					$('#login_content').show()
				} else {
					Public.tips.error(data.msg);
				}
			}
		}
	})
})
$('.goBuy').click(function(){ // 下单
	if(+$('.goods').attr('data-isuser') === 1)
    {
        Public.tips.warning('不能购买自己商店的商品！');
        return false;
    }
	$.ajax({
		type: 'POST',
		url: BaseUrl,
		data: {
			ctl: 'Buyer_CartExt',
			met: 'addCart',
			typ: 'json',
			goods_norms: Order.getData(),
			common_id: goodsId,
			is_buy: 1,
		},
		success: function (a) {
            if (a.status == 250)
            {
                if (a.cmd_id === -1) {
                	$('#login_content').show()
                } else {
                	Public.tips.error(a.msg);
                }
            }
            else
            {
            	if (a.status === 200) {
            		window.location.href = a.data.url
            	}
            }
        },
        failure: function (a) {
            Public.tips.error('操作失败！');
            //$.dialog.alert("操作失败！");
        }
	})
})
$('.addCart').click(function(){ // 添加到购物车
	if(+$('.goods').attr('data-isuser') === 1)
    {
        Public.tips.warning('不能购买自己商店的商品！');
        return false;
    }
	$.ajax({
		type: 'POST',
		url: BaseUrl,
		data: {
			ctl: 'Buyer_CartExt',
			met: 'addCart',
			typ: 'json',
			goods_norms: Order.getData(),
			common_id: goodsId
		},
		success: function (data){
            if (data.status == 250){
                 if (data.cmd_id === -1) {
                	$('#login_content').show()
                } else {
                	Public.tips.error(data.msg);
                }
            }
            else{
                //加入购物车成功后，修改购物车数量
                $.ajax({
                    type: "GET",
                    url: SITE_URL + "?ctl=Buyer_Cart&met=getCartGoodsNum&typ=json",
                    data: {},
                    dataType: "json",
                    success: function(data){
                        $('#cart_num').html(data.data.cart_count);
                    }
                });

                $.dialog({
                    title: "<?=__('加入购物车')?>",
                    height: 100,
                    width: 250,
                    lock: true,
                    drag: false,
                    content: 'url: '+ SITE_URL + '?ctl=Buyer_Cart&met=add&typ=e'
                });
            }
        },
        failure: function (data){
            Public.tips.error('操作失败！');
        }
	})
})

$('.buy-group').on('click', 'a', function(){
	if ($.cookie('key')) {
		window.location = './index.php?ctl=Publish_Wx&met=index&gid=' + GetQueryString('gid')
	} else {
		$('#login_content').show()
	}
})
$('.goods').click(function(){
	$(this).find('.jiathis_style').hide()
	$(this).find('.list-table').hide()
})
$('.share').on('click', function(event) {
	var $ele = $(this).find('.jiathis_style')
	$ele.is(':hidden') && event.stopPropagation();
	$ele.is(':hidden') ? $ele.show() : $ele.hide()
})
$('.goods-table').on('click', '.btn', function(event) {
	var $ele = $(this).next()
	$ele.is(':hidden') && event.stopPropagation();
	$ele.is(':hidden') ? $ele.show() : $ele.hide()
})
