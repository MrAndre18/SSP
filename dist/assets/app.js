!function(e){function t(t){for(var r,s,l=t[0],o=t[1],c=t[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={0:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([3,1,2]),n()}([,,,function(e,t,n){"use strict";n.r(t),function(e){n(0),n(4),n(5),n(7),n(9),n(10);e((function(){n(11),n(12),n(13),n(14),n(15),n(18),n(19),n(20)})),e((function(){var t=e(".loader"),n=t.find(".loader-progress").find(".loader-progress__circle"),r=+n.attr("r"),a=2*Math.PI*r;if(setTimeout((function(){window.scrollTo(0,0)}),200),t.hasClass("hidden"))e("body").css("overflow","hidden"),setTimeout((function(){e("body").css("overflow","visible")}),500);else{var i=function(e){var t=Math.round(100*e),r=a-t/100*a;n.css("strokeDashoffset",r)},s=function(){e(".loaded-content").css("display","block"),n.css("strokeDashoffset",0),e("body").css("overflow","visible"),setTimeout((function(){e(".loader").addClass("hidden");var t=e(".fulpage__slider-bullet"),n=t.find(".bullet-progress__circle");e(t[0]).addClass("fulpage__slider-bullet-filling"),e(n[0]).css("strokeDashoffset",0)}),500)};e("body").css("overflow","hidden"),n.css("strokeDasharray","".concat(a," ").concat(a)),n.css("strokeDashoffset",a);var l={elem:e("img"),count:e("img").length},o={counter:0,startTime:null,endTime:null,time:null,progress:null,TAIL:{MIN_TIME:200,MAX_TIME:500,PARTS:5,BREAKPOINT:.6+.2*Math.random()}};l.elem.on("load",(function(){o.counter++,o.startTime||(o.startTime=(new Date).getTime()),o.progress=o.counter/l.count,o.progress=o.progress<o.TAIL.BREAKPOINT?o.progress:o.TAIL.BREAKPOINT,i(.5*o.progress)})),e(window).on("load",(function(){if(o.progress=o.progress<=0?o.TAIL.BREAKPOINT:o.progress,o.progress>=1)s();else{o.endTime=(new Date).getTime(),o.time=o.endTime-o.startTime,o.time=o.time>0?o.time:0;var e={time:null,partCounter:0,partTime:null,interval:null};e.time=o.time/o.progress*(1-o.progress),e.time=e.time<o.TAIL.MAX_TIME?e.time<o.TAIL.MIN_TIME?o.TAIL.MIN_TIME:e.time:o.TAIL.MAX_TIME,e.partCounter=0,e.partTime=e.time/o.TAIL.PARTS,e.interval=setInterval((function(){e.partCounter++,e.partCounter<o.TAIL.PARTS?i(o.progress+(1-o.progress)/o.TAIL.PARTS*e.partCounter):(s(),clearInterval(e.interval))}),e.partTime)}}))}}))}.call(this,n(0))},,,,,,,function(e,t,n){},function(e,t,n){(function(e){e(".feedback .more-btn").on("click",(function(t){t.preventDefault();var n=e(".feedback"),r=e(n).find(".submit-btn"),a=e(n).find(".feedback__title"),i=e(n).find(".feedback__form"),s=e(i).find(".feedback-name"),l=e(i).find(".feedback-email"),o=e(i).find(".feedback-phone"),c=e(i).find("textarea[name=message]"),u=e(n).find("input[name=agree]");if(e(n).hasClass("sended"))return e(s).find("input[name=name]").val(""),e(l).find("input[name=email]").val(""),e(o).find("input[name=phone]").val(""),e(c).val(""),e(u).prop("checked",""),e(n).removeClass("sended"),e(r).toggleClass("active"),e(a).toggleClass("active"),!0;var d=!1;return e(n).removeClass("sended"),e(s).find(".error").removeClass("active"),e(l).find(".error").removeClass("active"),e(o).find(".error").removeClass("active"),e(u).siblings("label").find(".error").removeClass("active"),e(s).find("input[name=name]").attr("required")&&!e(s).find("input[name=name]").val()&&(e(s).find(".error").addClass("active"),d=!0),e(l).find("input[name=email]").attr("required")&&!e(l).find("input[name=email]").val()&&(e(l).find(".error").addClass("active"),d=!0),e(o).find("input[name=phone]").attr("required")&&!e(o).find("input[name=phone]").val()&&(e(o).find(".error").addClass("active"),d=!0),e(u).attr("required")&&!e(u).prop("checked")&&(e(u).siblings("label").find(".error").addClass("active"),d=!0),d?void 0:(e(n).addClass("sended"),e(r).toggleClass("active"),e(a).toggleClass("active"),!0)}))}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),r=n.n(t),a=e(".bullet-progress__circle"),i=+e(a[0]).attr("r"),s=2*Math.PI*i;!function(t){e(t).each((function(t,n){e(n).css("strokeDasharray","".concat(s," ").concat(s)),e(n).css("strokeDashoffset",s)}))}(a);new r.a(".about-company__clients-slider",{loop:!0,spaceBetween:20,watchOverflow:!0,speed:600,slidesPerView:8,navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new r.a(".practices__slider",{loop:!0,loopedSlides:3,spaceBetween:20,allowSlidePrev:!1,watchOverflow:!0,initialSlide:0,speed:600,simulateTouch:!1,navigation:{nextEl:".swiper-button-next"}});var l=new r.a(".fulpage__slider",{loop:!0,effect:"fade",speed:600,simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1}});function o(t){var n;e(".fulpage__slider-bullet").each((function(n,r){if(n===t)return e(r).addClass("fulpage__slider-bullet-active"),e(r).addClass("fulpage__slider-bullet-filling"),void setTimeout((function(){c(e(r).find(".bullet-progress__circle"))}),600);(e(r).hasClass("fulpage__slider-bullet-active")||e(r).hasClass("fulpage__slider-bullet-filling"))&&(e(r).removeClass("fulpage__slider-bullet-active"),e(r).removeClass("fulpage__slider-bullet-filling"),setTimeout((function(){var t;t=e(r).find(".bullet-progress__circle"),e(t).css("strokeDashoffset",s)}),600))})),n=t,l.slideToLoop(n,600,!0),c()}function c(t){e(t).css("strokeDashoffset",0)}l.on("slideChangeTransitionStart",(function(){o(l.realIndex)})),e(".fulpage__slider-bullet").on("click",(function(t){var n;n=e(t.target).hasClass("fulpage__slider-bullet")?t.target:t.target.closest(".fulpage__slider-bullet"),o(e(n).data("bulletIndex"))}))}.call(this,n(0))},function(e,t,n){(function(e,t){e("img.svg").each((function(){var n=t(this),r=n.attr("src"),a=n.prop("attributes");e.get(r,(function(r){var i=t(r).find("svg");i=i.removeAttr("xmlns:a"),e.each(a,(function(){i.attr(this.name,this.value)})),n.replaceWith(i)}),"xml")}))}).call(this,n(0),n(0))},function(e,t,n){(function(e){var t=0;e(window).on("scroll",(function(){n()}));var n=function(){var n=e(".header");e(window).scrollTop()>e(window).height()/15?n.addClass("scrolled"):n.removeClass("scrolled"),e(window).scrollTop()>e(window).height()/3&&e(window).scrollTop()>t?n.addClass("out"):n.removeClass("out"),t=e(window).scrollTop()}}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t,r,a=n(2),i=n.n(a),s=e(".ticker-wrapper.text"),l=e(".ticker-wrapper.images");new i.a(".recognition__content").render({circular:!0,drag:!1,hoverstop:!1,scrollamount:80}),t=new i.a(s),r=new i.a(l),t.render({circular:!1,drag:!1,hoverstop:!1,scrollamount:140}),r.render({circular:!0,drag:!1,hoverstop:!1,scrollamount:180}),e(window).on("scroll",(function(){}))}.call(this,n(0))},,,function(e,t,n){(function(e){if(e(".main.events").width()||e(".main.event").width()){var t=e(".events__subscribe-block"),n=e(t).find(".filter .filter__tabs .tab-btn"),r=e(".filter .filter__discard"),a=e(t).find(".subscribe .more-btn"),i=e(t).find(".subscribe input[name=agree]"),s=e(t).find(".subscribe input[name=email]"),l=e(t).find(".subscribe .subscribe-title"),o=e(t).find(".subscribe input[name=agree] + label .error"),c=e(t).find(".subscribe input[name=email] + .error");e(n).on("click",(function(t){t.preventDefault(),e(t.delegateTarget).toggleClass("active")})),e(r).on("click",(function(){e(n).each((function(t,n){e(n).removeClass("active")}))})),e(a).on("click",(function(n){if(n.preventDefault(),e(t).hasClass("subscribed"))e(t).removeClass("subscribed"),e(l).toggleClass("active"),e(".subscribe-btn").toggleClass("active"),e(o).removeClass("active"),e(c).removeClass("active"),e(i).prop("checked","");else{var r=!1;e(i).prop("checked")||(e(o).addClass("active"),r=!0),e(s).val()||(e(c).addClass("active"),r=!0),r||(e(i).prop("checked",""),e(o).removeClass("active"),e(c).removeClass("active"),e(t).addClass("subscribed"),e(l).toggleClass("active"),e(".subscribe-btn").toggleClass("active"))}}))}}).call(this,n(0))},function(e,t,n){(function(e){var t=e(".contacts");e(t).find("#map");console.log("contacts: ",t)}).call(this,n(0))},function(e,t,n){(function(e){if(e(".main.cases").width()){var t=e(".main.cases"),n=e(t).find(".cases__filter"),r=e(n).find(".tab-btn"),a=e(n).find(".cases__filter-discard");e(r).on("click",(function(t){t.preventDefault(),e(t.delegateTarget).toggleClass("active")})),e(a).on("click",(function(){e(r).each((function(t,n){e(n).removeClass("active")}))}))}}).call(this,n(0))}]);