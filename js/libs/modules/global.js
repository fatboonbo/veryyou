define([],function(){$.scrollLock=function(){"use strict";function l(){var l=s.attr("style"),o=[],t={};l&&(o=l.split(/;\s/),$.each(o,function(l){if(l){var o=l.split(/\s:\s/);o.length<2||(t[o[0]]=o[1])}}),$.extend(n,t))}function o(){var o={};c||(r={scrollLeft:$(window).scrollLeft(),scrollTop:$(window).scrollTop()},l(),$.extend(o,e,{left:-r.scrollLeft+"px",top:-r.scrollTop+"px"}),s.css(o),$(window).scrollLeft(0).scrollTop(0),c=!0)}function t(){c&&(s.attr("style",$("<x>").css(n).attr("style")||""),$(window).scrollLeft(r.scrollLeft).scrollTop(r.scrollTop),c=!1)}var s=$("html"),c=!1,r={scrollLeft:$(window).scrollLeft(),scrollTop:$(window).scrollTop()},n={},e={"overflow-y":"scroll",position:"fixed",width:"100%"};return l(),function(l){arguments.length?l?o():t():c?t():o()}}()});