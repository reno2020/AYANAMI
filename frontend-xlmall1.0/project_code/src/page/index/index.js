/*
 * @Author: whoiszxl 
 * @Date: 2018-05-11 10:32:21 
 * @Last Modified by: whoiszxl
 * @Last Modified time: 2018-05-12 18:40:25
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');


var templateBanner  = require('./banner.string');
var navSide = require('page/common/nav-side/index.js');
var _xl = require('util/xl.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _xl.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});