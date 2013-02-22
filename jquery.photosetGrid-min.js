/**
 * photosetGrid v1.0.0
 * Arrange images into a flexible grid, based on Tumblr's photoset feature
 *
 * Originally designed for and used in Style Hatch premium Tumblr themes,
 * but now the plugin has been expanded for use on any site outside of Tumblr.
 *
 * Copyright 2013 Jonathan Moore / Style Hatch
 * http://stylehatch.co
 */(function(e,t,n,r){"use strict";function o(t,n){this.element=t;this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="photosetGrid",s={width:"100%",gutter:"0px",highresLinks:!0,lowresWidth:500,onInit:function(){},onComplete:function(){}};o.prototype={init:function(){this.options.onInit();this._layoutToArray(this.element,this.options);this._setupRows(this.element,this.options);this._setupColumns(this.element,this.options);this.options.onComplete()},_layoutToArray:function(t,n){n.layout?this.layout=n.layout:e(t).attr("data-layout")?this.layout=e(t).attr("data-layout"):this.layout="1";this.rows=this.layout.split("");for(var r in this.rows)this.rows[r]=parseInt(this.rows[r])},_setupRows:function(t,n){var r=e(t).find("img"),i=0;e.each(this.rows,function(e,t){var n=i,s=i+t;r.slice(n,s).wrapAll('<div class="photoset-row cols-'+t+'"></div>');i=s})},_setupColumns:function(n,r){var i=this,s=function(){function h(){i.each(function(){var t=e(this).find("img:eq(0)");e(this).find("img").each(function(){var n=e(this);n.height()<t.height()&&(t=e(this));n.width()>r.lowresWidth&&n.attr("data-highres")&&n.attr("src",n.attr("data-highres"))});var n=t.height(),i=Math.floor(n*.025);e(this).height(n-i);e(this).find("img").each(function(){var t=(n-e(this).height())*.5+"px";e(this).css({"margin-top":t})})})}var i=e(n).find(".photoset-row"),s=e(n).find("img");r.highresLinks?s.each(function(){var t;e(this).attr("data-highres")?t=e(this).attr("data-highres"):t=e(this).attr("src");e(this).wrapAll('<a href="'+t+'" class="photoset-cell highres-link" />')}):s.each(function(){e(this).wrapAll('<div class="photoset-cell" />')});var o=e(n).find(".photoset-cell"),u=e(n).find(".cols-1 .photoset-cell"),a=e(n).find(".cols-2 .photoset-cell"),f=e(n).find(".cols-3 .photoset-cell"),l=e(n).find(".cols-4 .photoset-cell"),c=e(n).find(".cols-5 .photoset-cell");e(n).css({"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box",width:r.width});i.css({clear:"left",display:"block",overflow:"hidden"});o.css({"float":"left",display:"block","line-height":"0"});s.css({width:"100%",height:"auto"});u.css({width:"100%"});a.css({width:"50%"});f.css({width:"33.3%"});l.css({width:"25%"});c.css({width:"20%"});h();e(t).on("resize",function(e){h()})};e(n).imagesLoaded(function(){s()})}};e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new o(this,t))})};var u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(t){function c(){var r=e(f),s=e(l);i&&(l.length?i.reject(o,r,s):i.resolve(o));e.isFunction(t)&&t.call(n,o,r,s)}function h(e){p(e.target,e.type==="error")}function p(t,n){if(t.src===u||e.inArray(t,a)!==-1)return;a.push(t);n?l.push(t):f.push(t);e.data(t,"imagesLoaded",{isBroken:n,src:t.src});s&&i.notifyWith(e(t),[n,o,e(f),e(l)]);if(o.length===a.length){setTimeout(c);o.unbind(".imagesLoaded",h)}}var n=this,i=e.isFunction(e.Deferred)?e.Deferred():0,s=e.isFunction(i.notify),o=n.find("img").add(n.filter("img")),a=[],f=[],l=[];e.isPlainObject(t)&&e.each(t,function(e,n){e==="callback"?t=n:i&&i[e](n)});o.length?o.bind("load.imagesLoaded error.imagesLoaded",h).each(function(t,n){var i=n.src,s=e.data(n,"imagesLoaded");if(s&&s.src===i){p(n,s.isBroken);return}if(n.complete&&n.naturalWidth!==r){p(n,n.naturalWidth===0||n.naturalHeight===0);return}if(n.readyState||n.complete){n.src=u;n.src=i}}):c();return i?i.promise(n):n};var a=e.event,f,l={_:0},c=0,h,p;f=a.special.throttledresize={setup:function(){e(this).on("resize",f.handler)},teardown:function(){e(this).off("resize",f.handler)},handler:function(t,n){var r=this,i=arguments;h=!0;if(!p){setInterval(function(){c++;if(c>f.threshold&&h||n){t.type="throttledresize";a.dispatch.apply(r,i);h=!1;c=0}if(c>9){e(l).stop();p=!1;c=0}},30);p=!0}},threshold:0}})(jQuery,window,document);