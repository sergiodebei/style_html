function checkOffset(){$(".flying").offset().top+$(".flying").height()>=$("footer").offset().top&&$(".flying").css({position:"fixed",right:"20px",bottom:$("footer").height()+20+"px"}),$(document).scrollTop()+window.innerHeight<$("footer").offset().top&&$(".flying").css({position:"fixed",right:"20px",bottom:"20px"})}document.addEventListener("touchstart",function(){},!0),$(document).ready(function(){if($("body").removeClass("fade-out"),AOS.init(),$("body").hasClass("malu")){var e=$(window).height(),i=$("header").innerHeight(),t=parseInt($(".heroslider_container").css("margin-bottom"),10),o=parseInt($(".heroslider_container").css("padding-bottom"),10),n=parseInt($(".heroslider_container").css("padding-top"),10),s=0,c=e-i;s=e-i-t-o-n,$(".heroslider_container .slide").css({height:s}),$("#heroslider").css({height:c})}if($(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").stop().animate({scrollTop:e.offset().top-$("header").innerHeight()},1e3),!1}})}),$(".flying").length){var l=50,a=200,r=400,d=$(".cd__top");$(window).scroll(function(){checkOffset(),$(this).scrollTop()>l?d.addClass("cd__is-visible"):d.removeClass("cd__is-visible cd__fade-out"),$(this).scrollTop()>a&&d.addClass("cd__fade-out")}),d.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},r)})}$(".hamburger-menu, .bodyoverlay").on("click",function(){$(".bar").toggleClass("animate");var e=$("header").innerHeight();$("nav").toggleClass("visible").css("top",e),$(".bodyoverlay").toggleClass("cover-bg")}),$("nav > ul.menu > li").first().addClass("active");var h,v=$(".menu"),f=86,m=v.find("a:not(:last-child)"),u=m.map(function(){var e=$($(this).attr("href"));return e.length?e:void 0});if($(window).on("scroll",function(){var e=$("header").innerHeight();$("nav").css("top",e),$("nav").removeClass("visible"),$(".bar").removeClass("animate"),$(".bodyoverlay").removeClass("cover-bg");var i=$(this).scrollTop()+f,t=u.map(function(){return $(this).offset().top<i?this:void 0});t=t[t.length-1];var o=t&&t.length?t[0].id:"";h!==o&&(h=o,m.parent().removeClass("active").end().filter("[href=#"+o+"]").parent().addClass("active"))}).scroll(),$(window).on("resize",function(){var e=null,i=0;$(".wwd_slide").each(function(){var t=$(this).innerHeight();t>i&&(i=t,e=$(this))}),$("#wwd_slides").css("min-height",i+"px")}).resize(),$(window).on("resize",function(){var e=null,i=0;$(".collection_slider_container").each(function(){var t=$(this).innerHeight();t>i&&(i=t,e=$(this))}),$(".cc_view").css("min-height",i+"px")}).resize(),$("#collections").length){$("#collections .collections_container .collection").first().addClass("active"),$("#view_collections .cc_menu .cc_menu_item").first().addClass("active"),$(".cc_view .collection_slider_container").first().addClass("active").css("visibility","visible");var _=0;$("#collections .collections_container .collection, #view_collections .cc_menu .cc_menu_item").click(function(e){e.preventDefault();var i=$(this),t=i.index();_!==t&&($("#collections .collections_container .collection, #view_collections .cc_menu .cc_menu_item").each(function(){$(this).hasClass("active")&&$(this).removeClass("active")}),$("#collections .collections_container .collection").eq(t).addClass("active"),$("#view_collections .cc_menu .cc_menu_item").eq(t).addClass("active"),$(".collection_slider_container.active").removeClass("active").css("visibility","hidden"),setTimeout(function(){$(".collection_slider_container").eq(t).css("visibility","visible"),$(".collection_slider_container").eq(t).addClass("active")},50),_=t)})}$(window).scroll(function(){var e=$(window).scrollTop();e>=30?$("header").addClass("scroll"):$("header").removeClass("scroll")}),$(window).on("load resize scroll",function(){$("main").css("padding-top",$("header").innerHeight())})});