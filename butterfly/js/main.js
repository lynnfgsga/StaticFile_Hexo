$((function(){const t=void 0!==GLOBAL_CONFIG.Snackbar,e=$("#nav"),i=$("#rightside"),a=$("body");var n=$("#blog_name").width(),s=$(".menus").width(),o=$("#sidebar").width();function c(t){var i;1===t?i=n+s>e.width()-o-20:2===t&&(i=n+s>e.width()-20),i?r():(e.find(".toggle-menu").removeClass("is-visible-inline"),e.find(".menus_items").removeClass("is-invisible"),e.find("#search_button span").removeClass("is-invisible"))}function r(){e.find(".toggle-menu").addClass("is-visible-inline"),e.find(".menus_items").addClass("is-invisible"),e.find("#search_button span").addClass("is-invisible")}function d(){window.innerWidth<768?r():c(2)}function l(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout((function(){c(2)}),400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var t=window.setInterval((function(){e.hasClass("fixed")?c(1):c(2)}),100);setTimeout((function(){clearInterval(t)}),400)}d(),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",(function(){$("#sidebar").hasClass("tocOpenPc")&&e.hasClass("fixed")?c(1):d()})),GLOBAL_CONFIG_SITE.isPost&&window.innerWidth>1024&&$("#toggle-sidebar").hasClass("on")&&setTimeout((function(){h()}),400),$("#toggle-sidebar").on("click",(function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),t?l():h()}));var u=$(".toggle-menu"),f=$("#mobile-sidebar-menus"),m=$("#mobile-toc-button"),g=$("#menu_mask");function p(t){if(sidebarPaddingR(),$("body").css("overflow","hidden"),g.fadeIn(),"menu"===t){u.removeClass("close").addClass("open"),f.css("transform","translate3d(-100%,0,0)");var e=f.children();for(let t=0;t<=e.length;t++){const i=t/5+.2;e.eq(t).css("animation","sidebarItem "+i+"s")}}"toc"===t&&(m.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function v(t){$("body").css({overflow:"","padding-right":""}),g.fadeOut(),"menu"===t&&(u.removeClass("open").addClass("close"),f.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===t&&(m.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}u.on("click",(function(){p("menu")})),m.on("click",(function(){p("toc")})),g.on("click touchstart",(function(t){u.hasClass("open")&&v("menu"),m.hasClass("open")&&v("toc")})),$(window).on("resize",(function(t){u.is(":visible")||u.hasClass("open")&&v("menu")}));window.matchMedia("(max-width: 1024px)").addListener((function(t){t.matches?$("#sidebar").hasClass("tocOpenPc")&&l():($("#toggle-sidebar").hasClass("on")&&h(),m.hasClass("open")&&v("toc"))})),$("#scroll_down").on("click",(function(){scrollToDest("#content-inner")})),$("#bookmark-it").on("click",(function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(t){var e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(e)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}}));const b=$("figure.highlight");if(b.length){const e=GLOBAL_CONFIG.highlightCopy,i=GLOBAL_CONFIG.highlightLang,a=GLOBAL_CONFIG_SITE.isHighlightShrink;(e||i||void 0!==a)&&b.prepend('<div class="highlight-tools"></div>');const n=$(".highlight-tools");var C,w;if(!0===a?n.append('<i class="fas fa-angle-down code-expand code-closed"></i>'):!1===a&&n.append('<i class="fas fa-angle-down code-expand"></i>'),$(document).on("click",".highlight-tools >.code-expand",(function(){var t=$(this).parent().nextAll();$(this).hasClass("code-closed")?(t.css("display","block"),$(this).removeClass("code-closed")):(t.css("display","none"),$(this).addClass("code-closed"))})),i)b.each((function(){"plain"!==(C=w=$(this).attr("class").split(" ")[1])&&void 0!==C||(w="Code"),$(this).find(".highlight-tools").append('<div class="code-lang">'+w+"</div>")}));if(e){n.append('<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');$(document).on("click",".highlight-tools>.copy-button",(function(){var e=$(this).parents("figure.highlight");e.addClass("copy-true");var i=window.getSelection(),a=document.createRange();a.selectNodeContents(e.find("table .code pre")[0]),i.removeAllRanges(),i.addRange(a);i.toString();!function(e,i){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),t?snackbarShow(GLOBAL_CONFIG.copy.success):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,(function(){setTimeout((function(){$(i).prev(".copy-notice").animate({opacity:0},650)}),400)}))}catch(e){if(!t)return $(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1},650,(function(){setTimeout((function(){$(i).prev(".copy-notice").animate({opacity:0},650)}),400)})),!1;snackbarShow(GLOBAL_CONFIG.copy.success)}else t?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),i.removeAllRanges(),e.removeClass("copy-true")}))}}GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each((function(t,e){var i=$(e);if(i.attr("alt")){var a=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(a)}}));var y=$(".justified-gallery"),_=!1;if(y.length){_=!0;var O=y.find("img");O.unwrap(),O.length&&O.each((function(t,e){$(e).attr("data-src")&&$(e).attr("src",$(e).attr("data-src")),$(e).wrap("<div></div>")})),$("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.justifiedGallery.css}">`),loadScript(""+GLOBAL_CONFIG.justifiedGallery.js,(function(){L(y)}));var L=function(t){t.each((function(t,e){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})}))}}var k=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox)$("#article-container img:not(.gallery-group-img)").not($("a>img")).each((function(t,e){var i=$(e).attr("data-src")?$(e).attr("data-src"):$(e).attr("src");$(e).wrap(`<a href="${i}" data-fancybox="group" data-caption="${$(e).attr("alt")}" class="fancybox"></a>`)})),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});else if(k){const t=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));t.on("open",(function(e){var i="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";t.update({background:i})}))}var G=0,I=!0,x="function"==typeof chatBtnHide,A="function"==typeof chatBtnShow;if($(window).scroll(throttle((function(t){var a=$(this).scrollTop(),n=function(t){var e=t>G;return G=t,e}(a);a>56?(n?(e.hasClass("visible")&&e.removeClass("visible"),A&&!0===I&&(chatBtnHide(),I=!1)):(e.hasClass("visible")||e.addClass("visible"),x&&!1===I&&(window.chatBtnShow(),I=!0)),e.addClass("fixed"),"0"===i.css("opacity")&&i.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&e.removeClass("fixed").removeClass("visible"),i.css({opacity:"",transform:""}))}),200)),$("#go-up").on("click",(function(){scrollToDest("body")})),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar){$(".toc-child").hide(),$(window).scroll(throttle((function(t){var e=$(this).scrollTop();B(e),N(e),S(e)}),100)),$(".toc-link").on("click",(function(t){window.innerWidth<=1024?v("toc"):(t.preventDefault(),scrollToDest($(this).attr("href")))}));var B=function(t){var e=$("#article-container").height(),i=$(window).height(),a=t/(e>i?e-i:$(document).height()-i),n=Math.round(100*a),s=n>100?100:n<=0?0:n;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},F=GLOBAL_CONFIG.isanchor,N=function(t){if(0===$(".toc-link").length)return!1;var e=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";e.each((function(){var e=$(this);t>e.offset().top-25&&(i="#"+$(this).attr("id"))})),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,n,s=$(".toc-link.active");if(i&&s.attr("href")!==i){F&&(n=i,window.history.replaceState&&n!==window.location.hash&&window.history.replaceState(void 0,void 0,n)),$(".toc-link").removeClass("active");var o=$('.toc-link[href="'+i+'"]');o.addClass("active");var c=o.parents(".toc-child"),r=c.length>0?c.last():o;(a=r.closest(".toc-item").find(".toc-child")).is(":visible")||a.fadeIn(400),r.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},S=function(t){if($(".toc-link").hasClass("active")){var e=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}}$("#readmode").click((function(){$("body").toggleClass("read-mode")})),$("#font_plus").click((function(){a.css("font-size",parseFloat(a.css("font-size"))+1)})),$("#font_minus").click((function(){a.css("font-size",parseFloat(a.css("font-size"))-1)})),$("#mobile-sidebar-menus .menus-expand").on("click",(function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))})),$(window).on("touchmove",(function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")})),$("#rightside_config").on("click",(function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")}));var T=GLOBAL_CONFIG.copyright;if(void 0!==T&&(document.body.oncopy=function(t){let e;t.preventDefault();const i=window.getSelection(0).toString();return e=i.length>45?i+"\n\n\n"+T.languages.author+"\n"+T.languages.link+window.location.href+"\n"+T.languages.source+"\n"+T.languages.info:i,t.clipboardData?t.clipboardData.setData("text",e):window.clipboardData.setData("text",e)}),$("#darkmode").click((function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme()})),GLOBAL_CONFIG.runtime){var D,j=$("#webinfo-runtime-count"),z=j.attr("publish_date"),P=function(){var t=new Date(z),e=(new Date).getTime()-t.getTime(),i=Math.floor(e/864e5);j.text(i+" "+GLOBAL_CONFIG.runtime_unit)};P(),clearInterval(D),D=setInterval(P,1e4)}$("#article-container table").not($("figure.highlight > table")).each((function(){$(this).wrap('<div class="table-wrap"></div>')})),GLOBAL_CONFIG.baiduPush&&function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}();var E=$(".hide-button");E.length&&E.on("click",(function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&_&&i.find(".justified-gallery").length>0&&L(i.find(".justified-gallery"))}));$("#article-container .tabs").find(".tab button").on("click",(function(t){const e=$(this),i=e.parent();if(!i.hasClass("active")){const t=e.parents(".nav-tabs").next();i.siblings(".active").removeClass("active"),i.addClass("active");const a=e.attr("data-href");t.find("> .tab-item-content").removeClass("active"),t.find("> "+a).addClass("active");const n=t.find(a).find(".justified-gallery");_&&n.length>0&&L(n)}})),$(".card-category-list-item.parent a").on("click",(function(t){if($(event.target).hasClass("card-category-list-icon")){var e=$(this);return e.find(".card-category-list-icon").toggleClass("expand"),e.parent().next().toggle(),!1}}))}));